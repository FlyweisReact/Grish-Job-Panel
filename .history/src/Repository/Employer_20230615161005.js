/** @format */
import axios from "axios";
const BaseUrl = 'https://gadi-driver-u8ym.vercel.app/'

export const GetAllEmployer = async () => {
    try {s
        const reponse = await axios.get(`${BaseUrl}api/v1/employ`)
        return response
    }catch(e) { 
        console.log(e)
    }
};


export const AddEmployer 
