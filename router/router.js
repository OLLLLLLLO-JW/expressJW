const phoenixUfoResopnse = require('../data/phoenixUfos.js');

function handleGetResponse(req, res) {
    let expectedResponse;
    const splitUrl = req.url.split('/');
    if (splitUrl[0]===''){
        splitUrl.shift();
        expectedResponse = splitUrl[0];
    }
    res.status(200);
    res.json(phoenixUfoResopnse.AZResponse(expectedResponse));
}

module.exports.handleGetResponse = handleGetResponse;