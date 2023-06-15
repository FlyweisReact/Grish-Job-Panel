/** @format */
import axios from "axios";
const BaseURI = ''


export const GetAllEmployer = async () => {
    try {
        const { data } = await axios.get("/api/v1/employ")
    }catch(e) { 
        console.log(e)
    }
};
