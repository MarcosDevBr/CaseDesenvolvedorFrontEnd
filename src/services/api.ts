import { AppError } from "@utils/AppError";
import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3000',  
  headers: {
    'Content-Type': 'application/json',
  },
});

//  de resposta para tratar erros
api.interceptors.response.use(
  (response) => response,  
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    } else {
      return Promise.reject(error); 
    }
  }
);
