const { response } = require("express");

const responseMap = {

    '/Phoenix': 
    [
    {"city":"Phoenix","state":"Arizona","lat":33.452,"lng":-112.074},
    {"city":"Phoenix","state":"Arizona","lat":33.452,"lng":-112.165},
    {"city":"Phoenix","state":"Arizona","lat":32.552,"lng":-112.074}
    ],
    'FlagStaff':
    [
        {"city":"FlagStaff","state":"Arizona","lat":33.452,"lng":-112.074},
        {"city":"FlagStaff","state":"Arizona","lat":33.452,"lng":-112.165},
        {"city":"FlagStaff","state":"Arizona","lat":32.552,"lng":-112.074}
    ]
}

function AZufo(expectedResponse){
    const mappedResponse = responseMap[expectedResponse] || 'Response Unkown';
    return mappedResponse;
}

module.exports.AZResponse = AZufo;