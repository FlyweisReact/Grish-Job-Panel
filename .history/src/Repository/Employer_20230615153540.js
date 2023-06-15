/** @format */
import axios from "axios";
const BaseUrl = 

export const GetAllEmployer = async () => {
    try {
        const { data } = await axios.get("https://gadi-driver-u8ym.vercel.app/api/v1/employ")
    }catch(e) { 
        console.log(e)
    }
};
