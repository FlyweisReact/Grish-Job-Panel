/** @format */
import axios from "axios";
const BaseUrl = 'https://gadi-driver-u8ym.vercel.app/'

export const GetAllEmployer = async () => {
    try {
        const response = await axios.get(`${BaseURL}api/v1/employ`)
        return response
    }catch(e) { 
        console.log(e)
    }
};
