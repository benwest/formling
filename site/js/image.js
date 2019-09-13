// import createObserver from './utils/observer';
// import 'intersection-observer';
// import ResizeObserver from 'resize-observer-polyfill';
// import picturefill from 'picturefill';

// var resizeObserver = createObserver( ResizeObserver );
// var intersectionObserver = createObserver( IntersectionObserver, { rootMargin: '100% 0% 100% 0%' } );

// [ ...document.querySelectorAll('img[data-srcset]') ].forEach( img => {
//     var update = width => img.setAttribute( 'sizes', width + 'px' );
//     var onResize = entry => {
//         update( entry.contentRect.width );
//         picturefill({ reevaluate: true, elements: [ img ] })
//     }
//     var onIntersect = entry => {
//         if ( entry.isIntersecting ) {
//             update( img.getBoundingClientRect().width );
//             img.setAttribute( 'srcset', img.dataset.srcset );
//             resizeObserver.observe( img, onResize )
//             picturefill({ reevaluate: true, elements: [ img ] })
//         } else {
//             resizeObserver.unobserve( img, onResize )
//         }
//     }
//     intersectionObserver.observe( img, onIntersect );
// })

// [ ...document.querySelectorAll('img[data-srcset]') ].forEach( img => {
//     var update = width => img.setAttribute( 'sizes', width + 'px' );
//     update( img.getBoundingClientRect().width );
//     var onSizeChange = debounce( entry => update( entry.contentRect.width ), 100 );
//     observe( img, onSizeChange );
//     // return () => unobserve( img, onSizeChange );
// })


import ResizeObserver from 'resize-observer-polyfill';
import createObserver from './utils/observer';
var { observe } = createObserver( ResizeObserver );

export var bindImage = img => {
  var update = width => img.setAttribute( 'sizes', width + 'px' );
  update( img.getBoundingClientRect().width );
  img.setAttribute( 'srcset', img.dataset.srcset );
  var onSizeChange = entry => {
    update( entry.contentRect.width )
  }
  observe( img, onSizeChange );
}

[ ...document.querySelectorAll('img[data-srcset]') ].forEach( bindImage );