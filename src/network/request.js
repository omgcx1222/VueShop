import axios from 'axios'

export function request(config) {
  // 创建 axios 实例（向多个服务器发请求时，可以再创建多个）
  const instance1 = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  // 请求拦截
  instance1.interceptors.request.use(
    config =>{
      return config
    }
    // err =>{
    //   console.log(err);
    // }
  )

  // 响应拦截
  instance1.interceptors.response.use(
    res =>{
      return res.data
    },
    err =>{
      console.log(err);
    }
  )

  return instance1(config)
}