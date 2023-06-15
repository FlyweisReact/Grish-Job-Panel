/** @format */
import axios from "axios";
import BaseU


export const GetAllEmployer = async () => {
    try {
        const response = await axios.get(`${BaseURI}api/v1/employ`)
        return response
    }catch(e) { 
        console.log(e)
    }
};
