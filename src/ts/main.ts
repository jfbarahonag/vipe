function init() {
  window.onscroll = function() {
    const btt = document.querySelector('.back-to-top') as HTMLElement;
    if (!btt) { return }

    if (document.documentElement.scrollTop > 100) {
      // btt.style.opacity = '1'
      btt.classList.add('show');
    } else {
      // btt.style.opacity = '0'
      btt.classList.remove('show');
    }
  }


}

export {
  init
}