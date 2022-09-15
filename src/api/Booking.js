import axios from "axios";

const bookingApi = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 2000,
  headers: { "X-Custom-Header": "foobar" },
});

bookingApi.interceptors.request.use(request => {
  // console.log('Starting Request', JSON.stringify(request, null, 2))
  return request
})

bookingApi.interceptors.response.use(response => {
  // console.log('Response:', JSON.stringify(response, null, 2))
  return response
})

export default bookingApi;