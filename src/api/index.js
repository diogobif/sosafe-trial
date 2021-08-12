import axios from 'axios';
import config from 'config';

const api = axios.create({
  baseURL: config.get('api.url'),
  headers: {                  
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization", 
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
    "Content-Type": "application/json;charset=UTF-8"                   
},
})

export default api;