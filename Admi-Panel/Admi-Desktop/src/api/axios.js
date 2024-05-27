import axios from "axios";


 function authorization() {
  const token =  localStorage.get("accessToken")
  return token ? `Bearer ${token}` : null
}

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: true,
});



 instance.interceptors.request.use(config => {
  config.headers = {
    ...config.headers,
   Authorization: localStorage.getItem('accessToken') && `Bearer ${localStorage.getItem('accessToken')}`,
  }

  return config
})

const Api = {
  get: (url, config) => instance.get(url, config),
  post: (url, data, config) => instance.post(url, data, config),
  put: (url, data, config) => instance.put(url, data, config),
  delete: (url, config) => instance.delete(url, config),
}

export default Api;