// 元素大小改变时触发指定事件
export default{
    bind: function (el, binding) {
      let width = el.offsetWidth
      let height = el.offsetHeight
      setInterval(() => {
        if (el.offsetWidth !== width || el.offsetHeight !== height) {
          binding.value(el.offsetWidth, el.offsetHeight)
          width = el.offsetWidth
          height = el.offsetHeight
        }
      }, 500)
    }
  };
  