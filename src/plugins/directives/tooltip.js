//鼠标悬停时显示提示信息
export default {
    bind: function (el, binding) {
      const tooltip = document.createElement('div')
      tooltip.className = 'tooltip'
      tooltip.innerHTML = binding.value
      el.appendChild(tooltip)
      el.addEventListener('mouseenter', function () {
        tooltip.style.display = 'block'
      })
      el.addEventListener('mouseleave', function () {
        tooltip.style.display = 'none'
      })
    }
  };
  