// 输入框自动格式化
export default {
    bind: function (el) {
      const reg = /\D/g
      el.addEventListener('input', function () {
        el.value = el.value.replace(reg, '')
      })
    }
  };
  