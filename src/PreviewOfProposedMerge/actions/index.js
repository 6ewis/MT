import axios from 'axios';
import serializeData from '../components/utility/serializeData';
//Utility libs or functions
import R from 'ramda';

export const INITIALIZE = 'INITIALIZE';

export function initialize(previousPageData) {
  const {store} = previousPageData;
  const {updatedFormContent, initialFormContent} = store.getState();
  const {selectedIds} = initialFormContent;
  //im considering merging initialFormContent and updatedFormContent
  const config = {
    transformResponse: [(data) =>
      serializeData(R.merge(updatedFormContent, {duplicatePersonToBeMerged: data}))],
    responseType: 'json'
  };

  const request = axios.get(`http://cpmtdev01.codandev.local:3000/corporate_persons/${selectedIds}`, config)
    .catch(response => {
      if (response instanceof Error) {
        console.log('Error', response.message);
      } else {
         // The request was made, but the server responded with a status code
         // that falls out of the range of 2xx
         console.log(response.data);
         console.log(response.status);
         console.log(response.headers);
         console.log(response.config);
      }
  });

  return {
    type: INITIALIZE,
    payload: request
  };
}
