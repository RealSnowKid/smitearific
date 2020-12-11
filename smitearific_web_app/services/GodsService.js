import http from './http-common.js';

const GetGods = () => {
    return http.http8080().get("gods", { timeout: 5000 });
};

export default {
    GetGods
};