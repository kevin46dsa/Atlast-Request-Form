import axios from 'axios';
import authHeader from './auth-header';
import config from '../Config/envVariables';
const API_URL = `${config.Server_url}/user/data`;
const Public_URL = `${config.Server_url}/public`;

//This service is used to send the form Data to the backend server


//axios post call to the backend server
const postUserForm = (body) => {
	console.log(body, "I am at the form service")
    return axios
		.post(API_URL + '/form', { body: body }, { headers: authHeader() })
		.then((response) => {
			return response.data;
		});
};





//Extra refrence code
const getUserReview = () => {
	return axios
		.get(API_URL + '/review', { headers: authHeader() })
		.then((response) => {
			return response.data;
		}); //  "/review" is a route of the server
};

const getAllReview = () => {
	return axios.get(Public_URL + '/allReviews').then((response) => {
		return response.data;
	});
};

const Formservice = {
	getUserReview,
	postUserForm,
	getAllReview,
};
export default Formservice;