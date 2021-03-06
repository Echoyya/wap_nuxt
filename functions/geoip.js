/* https://github.com/bluesmoon/node-geoip */
const fs = require('fs')
const net = require('net')
const path = require('path')

const async = require('async')

const geodatadir = './functions/ipdb'

const dataFiles = {
    city: path.join(geodatadir, 'geoip-city.dat'),
    city6: path.join(geodatadir, 'geoip-city6.dat'),
    cityNames: path.join(geodatadir, 'geoip-city-names.dat'),
    country: path.join(geodatadir, 'geoip-country.dat'),
    country6: path.join(geodatadir, 'geoip-country6.dat')
}

const privateRange4 = [
    [aton4('10.0.0.0'), aton4('10.255.255.255')],
    [aton4('172.16.0.0'), aton4('172.31.255.255')],
    [aton4('192.168.0.0'), aton4('192.168.255.255')]
]

let cache4 = {
    firstIP: null,
    lastIP: null,
    lastLine: 0,
    locationBuffer: null,
    locationRecordSize: 88,
    mainBuffer: null,
    recordSize: 24
}

let cache6 = {
    firstIP: null,
    lastIP: null,
    lastLine: 0,
    mainBuffer: null,
    recordSize: 48
}

const RECORD_SIZE = 10
const RECORD_SIZE6 = 34

function lookup4(ip) {
    let fline = 0
    let floor = cache4.lastIP
    let cline = cache4.lastLine
    let ceil = cache4.firstIP
    let line
    let locId

    const buffer = cache4.mainBuffer
    const locBuffer = cache4.locationBuffer
    const privateRange = privateRange4
    const recordSize = cache4.recordSize
    const locRecordSize = cache4.locationRecordSize

    let i

    const geodata = {
        range: '',
        country: '',
        region: '',
        eu: '',
        timezone: '',
        city: '',
        ll: [0, 0]
    }

    // outside IPv4 range
    if (ip > cache4.lastIP || ip < cache4.firstIP) {
        return null
    }

    // private IP
    for (i = 0; i < privateRange.length; i++) {
        if (ip >= privateRange[i][0] && ip <= privateRange[i][1]) {
            return null
        }
    }

    do {
        line = Math.round((cline - fline) / 2) + fline
        floor = buffer.readUInt32BE(line * recordSize)
        ceil = buffer.readUInt32BE(line * recordSize + 4)

        if (floor <= ip && ceil >= ip) {
            geodata.range = [floor, ceil]

            if (recordSize === RECORD_SIZE) {
                geodata.country = buffer.toString('utf8', line * recordSize + 8, line * recordSize + 10)
            } else {
                locId = buffer.readUInt32BE(line * recordSize + 8)
                /* eslint no-control-regex: 0 */
                geodata.country = locBuffer.toString('utf8', locId * locRecordSize + 0, locId * locRecordSize + 2).replace(/\u0000.*/, '')
                geodata.region = locBuffer.toString('utf8', locId * locRecordSize + 2, locId * locRecordSize + 4).replace(/\u0000.*/, '')
                geodata.metro = locBuffer.readInt32BE(locId * locRecordSize + 4)
                geodata.ll[0] = buffer.readInt32BE(line * recordSize + 12) / 10000 // latitude
                geodata.ll[1] = buffer.readInt32BE(line * recordSize + 16) / 10000 // longitude
                geodata.area = buffer.readUInt32BE(line * recordSize + 20) // longitude
                geodata.eu = locBuffer.toString('utf8', locId * locRecordSize + 8, locId * locRecordSize + 9).replace(/\u0000.*/, '')
                geodata.timezone = locBuffer.toString('utf8', locId * locRecordSize + 9, locId * locRecordSize + 33).replace(/\u0000.*/, '')
                geodata.city = locBuffer.toString('utf8', locId * locRecordSize + 33, locId * locRecordSize + locRecordSize).replace(/\u0000.*/, '')
            }

            return geodata
        } else if (fline === cline) {
            return null
        } else if (fline === cline - 1) {
            if (line === fline) {
                fline = cline
            } else {
                cline = fline
            }
        } else if (floor > ip) {
            cline = line
        } else if (ceil < ip) {
            fline = line
        }
    } while (1)
}

function lookup6(ip) {
    const buffer = cache6.mainBuffer
    const recordSize = cache6.recordSize
    const locBuffer = cache4.locationBuffer
    const locRecordSize = cache4.locationRecordSize

    const geodata = {
        range: '',
        country: '',
        region: '',
        city: '',
        ll: [0, 0]
    }
    function readip(line, offset) {
        let ii = 0
        const ip = []

        for (ii = 0; ii < 2; ii++) {
            ip.push(buffer.readUInt32BE(line * recordSize + offset * 16 + ii * 4))
        }

        return ip
    }

    cache6.lastIP = readip(cache6.lastLine, 1)
    cache6.firstIP = readip(0, 0)

    let fline = 0
    let floor = cache6.lastIP
    let cline = cache6.lastLine
    let ceil = cache6.firstIP
    let line

    if (cmp6(ip, cache6.lastIP) > 0 || cmp6(ip, cache6.firstIP) < 0) {
        return null
    }

    do {
        line = Math.round((cline - fline) / 2) + fline
        floor = readip(line, 0)
        ceil = readip(line, 1)

        if (cmp6(floor, ip) <= 0 && cmp6(ceil, ip) >= 0) {
            if (recordSize === RECORD_SIZE6) {
                geodata.country = buffer.toString('utf8', line * recordSize + 32, line * recordSize + 34).replace(/\u0000.*/, '')
            } else {
                const locId = buffer.readUInt32BE(line * recordSize + 32)

                geodata.country = locBuffer.toString('utf8', locId * locRecordSize + 0, locId * locRecordSize + 2).replace(/\u0000.*/, '')
                geodata.region = locBuffer.toString('utf8', locId * locRecordSize + 2, locId * locRecordSize + 4).replace(/\u0000.*/, '')
                geodata.metro = locBuffer.readInt32BE(locId * locRecordSize + 4)
                geodata.ll[0] = buffer.readInt32BE(line * recordSize + 36) / 10000 // latitude
                geodata.ll[1] = buffer.readInt32BE(line * recordSize + 40) / 10000 // longitude
                geodata.area = buffer.readUInt32BE(line * recordSize + 44) // area
                geodata.eu = locBuffer.toString('utf8', locId * locRecordSize + 8, locId * locRecordSize + 9).replace(/\u0000.*/, '')
                geodata.timezone = locBuffer.toString('utf8', locId * locRecordSize + 9, locId * locRecordSize + 33).replace(/\u0000.*/, '')
                geodata.city = locBuffer.toString('utf8', locId * locRecordSize + 33, locId * locRecordSize + locRecordSize).replace(/\u0000.*/, '')
            }
            // We do not currently have detailed region/city info for IPv6, but finally have coords
            return geodata
        } else if (fline === cline) {
            return null
        } else if (fline === cline - 1) {
            if (line === fline) {
                fline = cline
            } else {
                cline = fline
            }
        } else if (cmp6(floor, ip) > 0) {
            cline = line
        } else if (cmp6(ceil, ip) < 0) {
            fline = line
        }
    } while (1)
}

function get4mapped(ip) {
    const ipv6 = ip.toUpperCase()
    const v6prefixes = ['0:0:0:0:0:FFFF:', '::FFFF:']
    for (let i = 0; i < v6prefixes.length; i++) {
        const v6prefix = v6prefixes[i]
        if (ipv6.indexOf(v6prefix) === 0) {
            return ipv6.substring(v6prefix.length)
        }
    }
    return null
}

function preload(callback) {
    let datFile
    let datSize
    const asyncCache = {
        firstIP: null,
        lastIP: null,
        lastLine: 0,
        locationBuffer: null,
        locationRecordSize: 64,
        mainBuffer: null,
        recordSize: 12
    }

    // when the preload function receives a callback, do the task asynchronously
    if (typeof arguments[0] === 'function') {
        async.series([
            function(cb) {
                async.series(
                    [
                        function(cb2) {
                            fs.open(dataFiles.cityNames, 'r', function(err, file) {
                                datFile = file
                                cb2(err)
                            })
                        },
                        function(cb2) {
                            fs.fstat(datFile, function(err, stats) {
                                datSize = stats.size
                                asyncCache.locationBuffer = Buffer.alloc(datSize)
                                cb2(err)
                            })
                        },
                        function(cb2) {
                            fs.read(datFile, asyncCache.locationBuffer, 0, datSize, 0, cb2)
                        },
                        function(cb2) {
                            fs.close(datFile, cb2)
                        },
                        function(cb2) {
                            fs.open(dataFiles.city, 'r', function(err, file) {
                                datFile = file
                                cb2(err)
                            })
                        },
                        function(cb2) {
                            fs.fstat(datFile, function(err, stats) {
                                datSize = stats.size
                                cb2(err)
                            })
                        }
                    ],
                    function(err) {
                        if (err) {
                            if (err.code !== 'ENOENT' && err.code !== 'EBADF') {
                                throw err
                            }

                            fs.open(dataFiles.country, 'r', function(err, file) {
                                if (err) {
                                    cb(err)
                                } else {
                                    datFile = file
                                    fs.fstat(datFile, function(err, stats) {
                                        datSize = stats.size
                                        asyncCache.recordSize = RECORD_SIZE
                                        cb(err)
                                    })
                                }
                            })
                        } else {
                            cb()
                        }
                    }
                )
            },
            function() {
                asyncCache.mainBuffer = Buffer.alloc(datSize)

                async.series(
                    [
                        function(cb2) {
                            fs.read(datFile, asyncCache.mainBuffer, 0, datSize, 0, cb2)
                        },
                        function(cb2) {
                            fs.close(datFile, cb2)
                        }
                    ],
                    function(err) {
                        if (err) {
                            // keep old cache
                        } else {
                            asyncCache.lastLine = datSize / asyncCache.recordSize - 1
                            asyncCache.lastIP = asyncCache.mainBuffer.readUInt32BE(asyncCache.lastLine * asyncCache.recordSize + 4)
                            cache4 = asyncCache
                        }
                        callback(err)
                    }
                )
            }
        ])
    } else {
        try {
            datFile = fs.openSync(dataFiles.cityNames, 'r')
            datSize = fs.fstatSync(datFile).size

            if (datSize === 0) {
                // eslint-disable-next-line no-throw-literal
                throw {
                    code: 'EMPTY_FILE'
                }
            }

            cache4.locationBuffer = Buffer.alloc(datSize)
            fs.readSync(datFile, cache4.locationBuffer, 0, datSize, 0)
            fs.closeSync(datFile)

            datFile = fs.openSync(dataFiles.city, 'r')
            datSize = fs.fstatSync(datFile).size
        } catch (err) {
            if (err.code !== 'ENOENT' && err.code !== 'EBADF' && err.code !== 'EMPTY_FILE') {
                throw err
            }

            datFile = fs.openSync(dataFiles.country, 'r')
            datSize = fs.fstatSync(datFile).size
            cache4.recordSize = RECORD_SIZE
        }

        cache4.mainBuffer = Buffer.alloc(datSize)
        fs.readSync(datFile, cache4.mainBuffer, 0, datSize, 0)

        fs.closeSync(datFile)

        cache4.lastLine = datSize / cache4.recordSize - 1
        cache4.lastIP = cache4.mainBuffer.readUInt32BE(cache4.lastLine * cache4.recordSize + 4)
        cache4.firstIP = cache4.mainBuffer.readUInt32BE(0)
    }
}

function preload6(callback) {
    let datFile
    let datSize
    const asyncCache6 = {
        firstIP: null,
        lastIP: null,
        lastLine: 0,
        mainBuffer: null,
        recordSize: 58
    }

    // when the preload function receives a callback, do the task asynchronously
    if (typeof arguments[0] === 'function') {
        async.series([
            function(cb) {
                async.series(
                    [
                        function(cb2) {
                            fs.open(dataFiles.city6, 'r', function(err, file) {
                                datFile = file
                                cb2(err)
                            })
                        },
                        function(cb2) {
                            fs.fstat(datFile, function(err, stats) {
                                datSize = stats.size
                                cb2(err)
                            })
                        }
                    ],
                    function(err) {
                        if (err) {
                            if (err.code !== 'ENOENT' && err.code !== 'EBADF') {
                                throw err
                            }

                            fs.open(dataFiles.country6, 'r', function(err, file) {
                                if (err) {
                                    cb(err)
                                } else {
                                    datFile = file
                                    fs.fstat(datFile, function(err, stats) {
                                        datSize = stats.size
                                        asyncCache6.recordSize = RECORD_SIZE6

                                        cb(err)
                                    })
                                }
                            })
                        } else {
                            cb()
                        }
                    }
                )
            },
            function() {
                asyncCache6.mainBuffer = Buffer.alloc(datSize)

                async.series(
                    [
                        function(cb2) {
                            fs.read(datFile, asyncCache6.mainBuffer, 0, datSize, 0, cb2)
                        },
                        function(cb2) {
                            fs.close(datFile, cb2)
                        }
                    ],
                    function(err) {
                        if (err) {
                            // keep old cache
                        } else {
                            asyncCache6.lastLine = datSize / asyncCache6.recordSize - 1
                            cache6 = asyncCache6
                        }
                        callback(err)
                    }
                )
            }
        ])
    } else {
        try {
            datFile = fs.openSync(dataFiles.city6, 'r')
            datSize = fs.fstatSync(datFile).size

            if (datSize === 0) {
                // eslint-disable-next-line no-throw-literal
                throw {
                    code: 'EMPTY_FILE'
                }
            }
        } catch (err) {
            if (err.code !== 'ENOENT' && err.code !== 'EBADF' && err.code !== 'EMPTY_FILE') {
                throw err
            }

            datFile = fs.openSync(dataFiles.country6, 'r')
            datSize = fs.fstatSync(datFile).size
            cache6.recordSize = RECORD_SIZE6
        }

        cache6.mainBuffer = Buffer.alloc(datSize)
        fs.readSync(datFile, cache6.mainBuffer, 0, datSize, 0)

        fs.closeSync(datFile)

        cache6.lastLine = datSize / cache6.recordSize - 1
    }
}

function lookup(ip) {
    if (!ip) {
        return null
    } else if (typeof ip === 'number') {
        return lookup4(ip)
    } else if (net.isIP(ip) === 4) {
        return lookup4(aton4(ip))
    } else if (net.isIP(ip) === 6) {
        const ipv4 = get4mapped(ip)
        if (ipv4) {
            return lookup4(aton4(ipv4))
        } else {
            return lookup6(aton6(ip))
        }
    }

    return null
}

function aton4(a) {
    a = a.split(/\./)
    return ((parseInt(a[0], 10) << 24) >>> 0) + ((parseInt(a[1], 10) << 16) >>> 0) + ((parseInt(a[2], 10) << 8) >>> 0) + (parseInt(a[3], 10) >>> 0)
}

function aton6(a) {
    a = a.replace(/"/g, '').split(/:/)

    const l = a.length - 1
    let i

    if (a[l] === '') {
        a[l] = 0
    }

    if (l < 7) {
        a.length = 8

        for (i = l; i >= 0 && a[i] !== ''; i--) {
            a[7 - l + i] = a[i]
        }
    }

    for (i = 0; i < 8; i++) {
        if (!a[i]) {
            a[i] = 0
        } else {
            a[i] = parseInt(a[i], 16)
        }
    }

    const r = []
    for (i = 0; i < 4; i++) {
        r.push(((a[2 * i] << 16) + a[2 * i + 1]) >>> 0)
    }

    return r
}

function cmp6(a, b) {
    for (let ii = 0; ii < 2; ii++) {
        if (a[ii] < b[ii]) {
            return -1
        }

        if (a[ii] > b[ii]) {
            return 1
        }
    }

    return 0
}

export { preload, preload6, lookup }
