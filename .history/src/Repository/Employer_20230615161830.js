/** @format */
import axios from "axios";
const BaseUrl = "https://gadi-driver-u8ym.vercel.app/";

export const GetAllEmployer = async () => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/employ`);
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const AddEmployer = async (employer) => {
  try {
    const response = await axios.post(`${BaseUrl}api/v1/employ`, {
      employer,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
};



export const Deletemployer = async (employer) => {
    try {
      const response = await axios.post(`${BaseUrl}api/v1/employ`, {
        employer,
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  };
  