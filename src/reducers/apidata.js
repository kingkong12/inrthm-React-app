const initState = {
  data: []
};

export default (state = initState, action) => {

  switch (action.type) {
    //1. fetchdata
    case 'FetchData':
      return {...state, data: action.payload};
    default:

      return state;

  }

};
