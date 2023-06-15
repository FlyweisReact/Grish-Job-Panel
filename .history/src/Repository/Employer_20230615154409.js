/** @format */
import axios from "axios";
const BaseURI = 'https://gadi-driver-u8ym.vercel.app/'


export const GetAllEmployer = async (setData) => {
    try {
        const { data } = await axios.get(`${BaseURI}api/v1/employ`)
        setData(data)
    }catch(e) { 
        console.log(e)
    }
};
