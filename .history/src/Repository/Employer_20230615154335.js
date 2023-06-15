/** @format */
import axios from "axios";
const BaseURI = 'https://gadi-driver-u8ym.vercel.app/'


export const GetAllEmployer = async () => {
    try {
        const { data } = await axios.get(`${Bas}`)
    }catch(e) { 
        console.log(e)
    }
};
