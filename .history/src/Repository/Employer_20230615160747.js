/** @format */
import axios from "axios";
const BaseUrl = ''

export const GetAllEmployer = async () => {
    try {
        const response = await axios.get(`${BaseURL}api/v1/employ`)
        return response
    }catch(e) { 
        console.log(e)
    }
};
