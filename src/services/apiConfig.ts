import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: 'https://dindin-wlpw.onrender.com',
  withCredentials: true,
})

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.resolve({ data: error.response.data })
    }

    const err = {
      message: 'Não foi possível se conectar com o servidor!',
    }
    return Promise.resolve({ data: err })
  },
)

export { api }
