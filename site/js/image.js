import ResizeObserver from 'resize-observer-polyfill';
import createObserver from './utils/observer';
var { observe } = createObserver( ResizeObserver );

export var bindImage = img => {
  var update = width => img.setAttribute( 'sizes', width + 'px' );
  update( img.getBoundingClientRect().width );
  img.setAttribute( 'srcset', img.dataset.srcset );
  var onSizeChange = entry => update( entry.contentRect.width )
  observe( img, onSizeChange );
}

[ ...document.querySelectorAll('img[data-srcset]') ].forEach( bindImage );