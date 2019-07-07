import { get, post } from './http'
// export const apiAddress = p => post('api/v1/users/my_address/address_edit_before', p);
// 测试接口
export const index = a => get('/index/index', a);


