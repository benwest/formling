const aboutButton = document.getElementById('about-button');
const aboutSection = document.getElementById('about-section');

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

function aboutReveal(e){
  e.preventDefault();
  scrollToTop();
  $(aboutSection).slideToggle(250).toggleClass('reveal');
}

aboutButton.addEventListener('click', (e) => aboutReveal(e) )