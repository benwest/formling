[ ...document.querySelectorAll( '.slider' ) ].forEach( el => {
  var track = el.querySelector( '.slider__track' );
  var count = track.children.length;
  var curr = 0;
  var next = () => {
    curr = ( curr + 1 ) % count;
    track.style.transform = `translateX( ${ ( -100 / count ) * curr }% )`;
    el.parentNode.querySelector('.slider__pagination__bullet--active').classList.remove('slider__pagination__bullet--active');
    el.parentNode.querySelectorAll('.slider__pagination__bullet')[curr].classList.add('slider__pagination__bullet--active');
  }
  el.addEventListener( 'click', next );
})