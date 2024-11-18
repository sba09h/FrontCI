import { UNSAFE_ErrorResponseImpl } from "react-router-dom";
import axios from "./axios.js";


export const repuestaReq = user => axios.post(`/register`, user);

export const loginReq = user => axios.post(`/login`, user);

export const verifyTokenReq = () => axios.get("/auth/verify")

