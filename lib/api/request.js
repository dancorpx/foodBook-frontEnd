const BASE_URL = 'https://cooki.weminusplus.com/api/v1/';

const myRequest = {
  request(options, httpMethod) {
    wx.request({
      url: BASE_URL + options.path,
      header: {
        'Content-Type': 'application/json',
        'X-YOURAPP-Token': 'YOUR TOKEN' 
      },
      data: options.data,
      method: httpMethod,
      success: options.success
      })
  },
  post(options) {
    this.request(options, 'POST')
  },
  get(options) {
    this.request(options, 'GET')
  },
  put(options) {
    this.request(options, 'PUT')
  },
  delete(options) {
    this.request(options, 'DELETE')
  }
}
module.exports = myRequest;