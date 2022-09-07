import axios from "axios";

export const fetchApplications = () => {
    return axios({
        method: "GET",
        url:"applications/",
	}).then((response)=>{
        const data = response.data;
        return data;
	}).catch((error) => {
        if (error.response) {
          	console.log("error response: ", error.response);
          	console.log("error response status: ", error.response.status);
          	console.log("error response headers: ", error.response.headers);
        }
	})
};
