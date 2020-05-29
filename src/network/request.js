import axios from "axios";
export const request = config => {
  const instance = axios.create({
    baseURL: "",
    timeout: 5000
  });
  return instance(config);

  /* return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: "",
      timeout: 5000
    });
    instance(config)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
  
   */
};
