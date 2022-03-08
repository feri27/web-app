const axios = require('axios');

export async function getAllUsers() {

    const response = await axios.get('/api/users');
    return response.data;
}

export async function createUser(data) {
    const response = await axios.post(`/api/user`, {user: data});
    return response.data;
}

export async function getToken(){
    //const response = await axios.post('https://api.ic.peplink.com/api/oauth2/token',{client_id:"0e8e958dd27a4bb12e7adcb0970f95da",client_secret:"2523a7ca6b61589e6bb13561d22a89dd",grant_type:"client_credentials"},{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
    const response = await axios({
        method: 'POST',
        url: `https://api.ic.peplink.com/api/oauth2/token`,
        data: {
           "client_id":"0e8e958dd27a4bb12e7adcb0970f95da",
           "client_secret":"2523a7ca6b61589e6bb13561d22a89dd",
           "grant_type": "client_credentials"
        },
        headers: {
           'Access-Control-Allow-Origin': '*',
           'Content-type': 'application/x-www-form-urlencoded',
        }
    })
    return response.data;
}