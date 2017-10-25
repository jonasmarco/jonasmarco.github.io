$(document).ready(function () {
	$('#fullpage').fullpage();

	// Loader do highlight JS
	// Escapa os caracteres em momento de load da página
	// Lento, mas evita da gente ficar escapando todo source code
	// https://stackoverflow.com/a/45285331
	document.querySelectorAll("code").forEach(function(element) {
		element.innerHTML = element.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/( |\t){2,}/g, " ");
	});
	// https://highlightjs.org/usage/
	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});
});
