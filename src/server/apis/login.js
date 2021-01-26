import request from '@/utils/request'

export function loginReq(username,password) {
  return request.post('/login.json',{
    loginName: username,
    loginPassword: password
  })
}
