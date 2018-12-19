import axios from 'axios';
import { toast } from 'react-toastify';
import logger from './logService';

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    //console.log('Logging the error', error);
    logger.log(error);
    //toast.error('An error has occured');
    console.log(error);
  }
  return Promise.reject(error); //to return control back to the catch block
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
