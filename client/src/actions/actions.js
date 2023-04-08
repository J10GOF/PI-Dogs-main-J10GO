import axios from 'axios';

export function getAllDogs () {
	return async function(dispatch){
		let json = await axios.get("http://localhost:3001/dogs");
		return dispach({
			type: 'GET_ALL_DOGS',
			payload: json.data
		})
	}
}