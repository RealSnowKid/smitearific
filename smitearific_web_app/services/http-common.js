import axios from "axios";

const httpdefault = () => {
    return axios.create({
        baseURL: "http://localhost:8080/",
        headers: {
            "Content-type": "application/json"
        }
    })
};

export default {
    httpdefault,
};