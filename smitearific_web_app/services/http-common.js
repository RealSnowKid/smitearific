import axios from "axios";

const http8080 = () => {
    return axios.create({
        baseURL: "http://localhost:8080/",
        headers: {
            "Content-type": "application/json"
        }
    })
};

const http8081 = () => {
    return axios.create({
        baseURL: "http://localhost:8081/",
        headers: {
            "Content-type": "application/json"
        }
    })
};

export default {
    http8080,
    http8081
};