// 文本溢出时自动添加省略号
export default {
  bind: function (el, binding) {
    const lines = binding.value || 1; // 默认显示一行
    const style = `
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${lines};
      overflow: hidden;
    `;
    el.style.cssText += style;
  },

  unbind: function (el) {
    el.style.cssText = '';
  }
  };
  