import http from './http-common.js';

const GetGods = () => {
    return http.httpdefault().get("gods", { timeout: 5000 });
};

export default {
    GetGods
};