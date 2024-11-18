import axios from "./axios.js";

export const respuestaReq = (user) => axios.post(`/register`, user);

export const loginReq = (user) => axios.post(`/login`, user);



export const verifyTokenReq = () => 
    axios.get(`/verify`, {
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });

