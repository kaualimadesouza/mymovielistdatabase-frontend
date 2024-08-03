import axios from "axios";

export const API = axios.create({
    baseURL: 'https://44.195.40.138:8080'
})