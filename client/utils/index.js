import { URL, PORT } from '../config'
import axios from 'axios'

export const makeRequest = (opts) => {
     return axios({method: opts.method, url:`${URL}:${PORT}/${opts.route}`, data:opts.body})
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        return error
      });
}
