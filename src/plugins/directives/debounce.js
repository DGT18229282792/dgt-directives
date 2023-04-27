// 防抖动，延迟触发指定事件
export default {
    inserted: function (el, binding) {
      let timer
      el.addEventListener('input', function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
          binding.value()
        }, 1000)
      })
    }
  };
  