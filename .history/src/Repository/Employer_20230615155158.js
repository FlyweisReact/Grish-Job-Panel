/** @format */
import axios from "axios";

const BaseURI = 'https://gadi-driver-u8ym.vercel.app/'


export const GetAllEmployer = async () => {
    try {
        const response = await axios.get(`${BaseURI}api/v1/employ`)
        return response
    }catch(e) { 
        console.log(e)
    }
};
