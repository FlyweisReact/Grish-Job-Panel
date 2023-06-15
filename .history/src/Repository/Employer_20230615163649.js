/** @format */
import axios from "axios";
const BaseUrl = "https://gadi-driver-u8ym.vercel.app/";

// Employers
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

export const DeleteEmployer = async (payload) => {
  try {
    const response = await axios.delete(`${BaseUrl}api/v1/employ/${payload}`);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// Jobs
export const AllJobs = async () => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/jobServices`);
    return response;
  } catch (e) {
    console.log(e);
  }
};


export const DeleteJobs = async (payload) => {
    try {
      const response = await axios.delete(`${BaseUrl}api/v1/employ/${payload}`);
      return response;
    } catch (e) {
      console.log(e);
    }
  };