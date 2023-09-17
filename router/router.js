const phoenixUfoResopnse = require('../data/phoenixUfos.js');

function handleGetResponse(req, res) {
    console.log("Inside handle get response")
    console.log(req.url);
    const splitUrl = req.url.split('/');
    console.log("Split URL before shift");
    console.log(splitUrl);
    if (splitUrl[0]===''){
        splitUrl.shift();
    }
    console.log("Split URL");
    console.log(splitUrl);
    res.status(200);
    res.json(phoenixUfoResopnse.AZResponse(req.url));
}

module.exports.handleGetResponse = handleGetResponse;