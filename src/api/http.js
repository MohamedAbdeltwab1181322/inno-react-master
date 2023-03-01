import axios from 'axios';

const http = axios.create({
    baseURL: "http://innoscripta.test/api",
    headers: {
        'Content-Type': "Apllication/json"
    }
});


export default http;