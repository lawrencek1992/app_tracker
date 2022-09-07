import axios from "axios";

export const login = () => {
    return axios({
        method: "POST",
        // might be a different url? accounts/ ???
        url:"users/",
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