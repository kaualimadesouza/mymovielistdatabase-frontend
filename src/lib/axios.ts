import axios from "axios";

export const API = axios.create({
    baseURL: 'http://44.195.40.138:8080'
})