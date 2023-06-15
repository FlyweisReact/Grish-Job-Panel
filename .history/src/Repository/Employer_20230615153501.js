/** @format */

import axios from "axios";

export const GetAllEmployer = async () => {
    try {
        const { data } = await axios.get()
    }catch(e) { 
        console.log(e)
    }
};
