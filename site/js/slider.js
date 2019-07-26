[ ...document.querySelectorAll( '.slider' ) ].forEach( el => {
  var track = el.querySelector( '.slider__track' );
  var count = track.children.length;
  var curr = 0;
  var next = () => {
    curr = ( curr + 1 ) % count;
    track.style.transform = `translateX( ${ ( -100 / count ) * curr }% )`;
  }
  el.addEventListener( 'click', next );
})