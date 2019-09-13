import { bindImage } from './image';
import { random } from 'lodash';

var wait = delay => new Promise( resolve => setTimeout( resolve, delay ) );
let containsMultiple = false;
let textExcerpt;


var typeInto = ( el, text, onDone = () => {} ) => {
  var words = text.split(' ')
  var curr = 0;
  var timer;
  var typeNext = () => {
    curr++;
    el.innerText = words.slice( 0, curr ).join(' ');

    var nextWord = words[ curr ];
    if ( !nextWord ) return onDone();
    
    var delay = nextWord.length * 60;
    if (containsMultiple && textExcerpt.classList.contains('slow-down')) {
      delay = nextWord.length * 180;
    }
    timer = setTimeout( typeNext, delay )

  }
  typeNext();
  return () => clearTimeout( timer );
}

[ ...document.querySelectorAll('.excerpt--single') ].forEach( el => {
  var textEl = el.querySelector('.excerpt__text');
  var sizerTextEl = el.querySelector('.excerpt__sizer .excerpt__text');
  var url = el.dataset.url;
  var cancel = null;
  var setText = newText => {
    if ( cancel !== null ) cancel();
    sizerTextEl.innerText = newText;
    cancel = typeInto( textEl, newText );
  }
  setText( textEl.innerText );
  el.classList.add('excerpt--ready');
  var loadNext = () => fetch( url ).then( r => r.text() ).then( setText )
  el.addEventListener( 'click', loadNext );
});

var createSentenceEl = url => {
  var el = document.createElement( url ? 'a' : 'div' );
  el.classList.add( 'excerpt__text' );
  el.classList.add( `excerpt__text--bracket-${ random( 1, 4 ) }`)
  if ( url ) el.href = url;
  return el;
}

var createCoverEl = ({ ratio, srcset }) => {
  var el = document.createElement( 'span' );
  el.classList.add('excerpt__cover');
  var img = document.createElement('img');
  img.dataset.srcset = srcset;
  img.style.width = ( 1 / ratio ) + 'em';
  bindImage( img );
  el.appendChild( img );
  return el;
}


const layoutMain = document.querySelector('.layout__main')
const checkTextFit = el => el.offsetHeight < layoutMain.offsetHeight;

let returnOnNext = false;
[ ...document.querySelectorAll( '.excerpt--multiple' ) ].forEach( el => {
  
  if (!containsMultiple) {
  textExcerpt = document.querySelector('.home__excerpt');
    textExcerpt.addEventListener('mouseenter', () => {
      textExcerpt.classList.add('slow-down');
    }); 
    textExcerpt.addEventListener('mouseleave', () =>{
      textExcerpt.classList.remove('slow-down');
    }); 
    containsMultiple = true;
  }

  
  var url = el.dataset.url;
  var nextSentence = () => fetch( url )
    .then( r => r.json() )
    .then( ({ text, url, cover }) => {
      let formling = document.querySelector('.formling--excerpt');
      formling.remove();
      formling.style.opacity = '1';
      var sentenceEl = createSentenceEl( url );
      var span = document.createElement( 'span' );
      sentenceEl.appendChild( span );
      sentenceEl.appendChild( createCoverEl( cover ) );
      el.appendChild( sentenceEl );
      sentenceEl.appendChild(formling);
      span.innerText = text;
      
      if (returnOnNext) {
        returnOnNext = false;
        el.innerHTML = "";
        return;
      }

      if (!checkTextFit(el) && !textExcerpt.classList.contains('slow-down')) {
        sentenceEl.style.display = 'none';
        returnOnNext = true;
      }
      

      
      return new Promise( resolve => typeInto( span, text, resolve ) );
    })
    .then(() => wait( 1000 ) )
    .then( nextSentence )
  nextSentence();
  el.classList.add('excerpt--ready');
})