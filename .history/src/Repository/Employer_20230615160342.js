/** @format */
import axios from "axios";
import BaseURL from './BaseURL'


export const GetAllEmployer = async () => {
    try {
        const response = await axios.get(`${BaseURI}api/v1/employ`)
        return response
    }catch(e) { 
        console.log(e)
    }
};
