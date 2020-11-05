import http from './http-common.js';

const GetGods = () => {
    return http.httpdefault().get("godses", { timeout: 5000 });
};

export default {
    GetGods
};