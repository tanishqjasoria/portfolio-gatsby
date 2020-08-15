import axios from "axios"

const GIST_URL = "https://gist.githubusercontent.com/tanishqjasoria/0e89dca5982d06da7e998fdfe7751422/raw/f6f5a1fec2c9f031a2a00a233299344e124131e6/resume.json"

const client = axios.create({
  baseURL: GIST_URL,
  timeout: 10000
  }
)

const request = function(client, options) {
  const onSuccess = function(response) {
    console.debug("Request Successful!", response);
    return response.data;
  };

  const onError = function(error) {
    console.error("Request Failed:", error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      console.error("Headers:", error.response.headers);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error("Error Message:", error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export const resume_client = (options) => request(client, options)