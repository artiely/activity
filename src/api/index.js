let apiSource = {}
function initApi() {
  const apiContext = require.context('./modules/', true, /\.js$/)
  let apiList = []

  apiContext.keys().forEach(api => {
    const apiModle = apiContext(api)
    apiList = { ...apiList, ...(apiModle.default || apiModle) }
  })
  apiSource = apiList
  return apiList
}
let apiList = initApi()
let api = { ...apiList }
const Api = function(Vue) {
  if (Api.installed) return
  Api.installed = true
  Object.defineProperties(Vue.prototype, {
    $api: {
      get() {
        return api
      }
    }
  })
}
export { api, Api, apiSource }
