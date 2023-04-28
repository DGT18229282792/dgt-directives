// 实现元素拖拽
export default {
    bind: function (el) {
      el.style.position = 'absolute';
      el.addEventListener('mousedown', function (event) {
        el.style.cursor = 'pointer';
        const startX = event.clientX
        const startY = event.clientY
        const left = el.offsetLeft
        const top = el.offsetTop
        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', stop)
        function move(event) {
          el.style.left = left + event.clientX - startX + 'px'
          el.style.top = top + event.clientY - startY + 'px'
        }
        function stop() {
          document.removeEventListener('mousemove', move)
          document.removeEventListener('mouseup', stop)
          el.style.cursor = 'default';
        }
      })
    }
  };
  