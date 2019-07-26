// var sleep = delay => new Promise( resolve => setTimeout( resolve, delay ) );

// var type = async ( el, text ) => {
//   var words = text.split(' ');
//   for ( var i = 0; i < words.length; i++ ) {
//     el.innerText = words.slice( 0, i ).join(' ');
//     var nextWord = words[ i + 1 ];
//     if ( nextWord ) await sleep( 60 * nextWord.length );
//   }
// }

[ ...document.querySelectorAll('.excerpt--single') ].forEach( el => {
  var textEl = el.querySelector('.excerpt__text');
  var sizerTextEl = el.querySelector('.excerpt__sizer .excerpt__text');
  var url = el.dataset.url;
  var text = textEl.innerText;
  var curr = 0;
  var timer;
  var render = () => {
    sizerTextEl.innerText = text;
    textEl.innerText = text.split(' ').slice( 0, curr ).join(' ');
  }
  render();
  var typeNext = () => {
    var nextWord = text.split(' ')[ curr ];
    if ( !nextWord ) return;
    var delay = nextWord.length * 60;
    timer = setTimeout(() => {
      curr++;
      render();
      typeNext();
    }, delay )
  }
  typeNext();
  // type( textEl, textEl.innerText );
})