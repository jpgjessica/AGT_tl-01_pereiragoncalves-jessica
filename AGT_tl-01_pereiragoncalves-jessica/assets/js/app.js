const backToTopBtn = document.querySelector('.topBtn');
const header = document.querySelector('header');

function scrollTop() {
  if (document.documentElement.scrollTop > 100) {
    header.classList.add('header_reduced');
    backToTopBtn.style.display = "block";
  } else {
    header.classList.remove('header_reduced');
    backToTopBtn.style.display = "none";
  }
}
window.onscroll = scrollTop;

backToTopBtn.addEventListener('click', function () {
  document.documentElement.scrollTop = 0;
});


document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', function () {
    const content = item.querySelector('.content');
    if (content) {
      content.classList.toggle('content_hidden');
    }
  });
});
