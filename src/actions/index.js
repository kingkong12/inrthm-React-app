import axios from 'axios';

const FetchData = "FetchData";
const rootUrl = `https://itunes.apple.com/search?term=`;

export function actionFetchData(searchString) {
  return (dispatch) => {
    axios.get(rootUrl + searchString).then(res =>
      dispatch({
        type: FetchData,
        payload: res.data.results
      })
    ).catch(error => {
      dispatch({
        type: FetchData,
        payload: []
      })
    });
  }
}
   


