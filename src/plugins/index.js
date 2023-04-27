
const requireDirective = require.context('./', true, /.js$/);
const directives = {}

requireDirective.keys().forEach(fileName => {
  const directiveName = fileName.replace(/\.\/(.*)\.js$/, '$1')
  directives[directiveName] = requireDirective(fileName).default
})
const install = (Vue) => {
for(let i in directives){
    Vue.directive(i, directives[i]);
}
}
// 环境检测
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default {
    install
}