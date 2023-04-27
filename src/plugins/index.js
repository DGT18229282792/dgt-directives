import { funs } from './directives/backGround.js'
const install = (Vue) => {
Vue.directive('backGround', funs);
}
// 环境检测
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default {
    install
}