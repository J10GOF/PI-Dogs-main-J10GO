const EstadoInicial = {
	dogs: [],
	allDogs: [],
	temperaments: [],
	details: [],
	loader: true,
};

function rootReducer (state = EstadoInicial, action){
	switch (action.type) {
		case "GET_DOGS":
			return {
				...state,
				dogs: action.payload,
				allDogs: action.payload,
				loader: false,			
			};
	}
}

export default rootReducer;