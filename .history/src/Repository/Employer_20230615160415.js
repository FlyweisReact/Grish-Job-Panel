/** @format */
import axios from "axios";


export const GetAllEmployer = async () => {
    try {
        const response = await axios.get(`${}api/v1/employ`)
        return response
    }catch(e) { 
        console.log(e)
    }
};
