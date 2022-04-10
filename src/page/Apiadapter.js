const axios = require('axios');
const access_token = "515a8fad71a7a9cd732d05326e9cb514d1fc57859be61025eb8930dfa18f3025eb959bfcb5939f37"
module.exports = (baseUrl) => {
    return axios.default.create({
        baseURL: baseUrl,
        headers: {
            'Authorization': `token ${access_token}`
        }
    });
}