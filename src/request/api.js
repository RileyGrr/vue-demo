/**
* api接口统一管理
*/
import { get, post } from './http'
// eg：http://www.baiodu.com/api/v1/users/my_address/address_edit_before    我们的接口

// p是我们请求接口时携带的参数对象
export const apiAddress = p => post('api/v1/users/my_address/address_edit_before', p);
