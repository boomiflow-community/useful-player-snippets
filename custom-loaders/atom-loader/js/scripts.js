let loaderHtmlString =
	'<div class="load-wrapper"><div class="load-logo"></div><div class="load-atom-wrapper"><div class="particle one"><div class="trail"></div></div><div class="particle two"><div class="trail"></div></div><div class="particle three"><div class="trail"></div></div><div class="particle four"><div class="trail"></div></div></div></div>';
var insertListener = function(event) {
	event.animationName === 'spin'
		? document
				.querySelector('.wait-spinner')
				.insertAdjacentHTML('beforebegin', loaderHtmlString)
		: null;
};
document.addEventListener('animationstart', insertListener, false); // standard
document.addEventListener('MSAnimationStart', insertListener, false); // IE
document.addEventListener('webkitAnimationStart', insertListener, false); // Chrome + Safari
