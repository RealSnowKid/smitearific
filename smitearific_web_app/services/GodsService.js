import http from './http-common.js';

const GetGods = () => {
    return http.http8080().get("gods");
};

const GetGodInfo = (data) => {
    return http.http8081().get("godinfoes/search/findByName?name=" + data)
}

const GetAllGodsInfo = () => {
    return http.http8081().get("godinfoes")
}

export default {
    GetGods,
    GetGodInfo,
    GetAllGodsInfo
};