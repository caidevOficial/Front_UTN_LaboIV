
window.onscroll = () => {
    scroll_bar();
  };

  const scroll_bar = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = `${scrolled}%`;
  }