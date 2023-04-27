// 滚动时触发指定事件
export default {
    bind: function (el, binding) {
      el.addEventListener('scroll', function () {
        binding.value(el.scrollTop)
      })
    }
  };
  