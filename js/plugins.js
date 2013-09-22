// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
$('h2.fast-text').waypoint(function(direction) {
  $('.fast-text').addClass('animation-fast fast-text-animation');
}, { offset: '75%' }
);
$('.box').waypoint(function(direction) {
  $('.box').addClass('animation-slow box-animation');
}, { offset: '75%' }
);
$('.rotate').waypoint(function(direction) {
  $('.rotate').addClass('animation-medium rotate-animation');
}, { offset: '75%' }
);
