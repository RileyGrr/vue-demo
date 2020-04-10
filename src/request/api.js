/**
* api接口统一管理
*/
import { get, post } from './http'
// eg：http://www.baiodu.com/api/v1/users/my_address/address_edit_before    我们的接口
// https://crpapi.liuxue.com/search_map/overseas/newest_three_carousel/?count_filter=3
// https://crpapi.liuxue.com/wechat/get_signature_config/?url=https://wx.crp.liuxue.com/realtime/?f=mp  微信配置

// p是我们请求接口时携带的参数对象
// export const apiAddress = p => GET('/search_map/overseas/newest_three_carousel/', p);
export const apiNewTreeCarousel = p => get('/search_map/overseas/newest_three_carousel/', p);
