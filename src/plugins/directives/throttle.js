// 节流，限制触发指定事件的频率
export default{
    inserted: function (el, binding) {
      let timer
      el.addEventListener('input', function () {
        if (!timer) {
          timer = setTimeout(() => {
            binding.value()
            timer = null
          }, 1000)
        }
      })
    }
  };
  