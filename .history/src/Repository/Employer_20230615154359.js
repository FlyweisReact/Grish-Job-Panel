/** @format */
import axios from "axios";
const BaseURI = 'https://gadi-driver-u8ym.vercel.app/'


export const GetAllEmployer = async (data) => {
    try {
        const { data } = await axios.get(`${BaseURI}api/v1/employ`)
        data()
    }catch(e) { 
        console.log(e)
    }
};
