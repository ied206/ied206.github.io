// Need <html lang=""> declartion to detect page's language
// From http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})();

if (urlParams["nolangred"] !== "1") {
	// Browser Language Redirect script - By JavaScript Kit
	// For this and over 400+ free scripts, visit http://www.javascriptkit.com
	// This notice must stay intact
	// Modified by Joveler

	// Enter ISO 639-2 letter Language codes to detect (see: http://www.w3.org/WAI/ER/IG/ert/iso639.htm):
	var langcodes = new Array("ko","en","default");
	// Enter corresponding redirect URLs (last one is for default URL):
	var langredirects = new Array("index.html","index-en.html","index-en.html");
	var langinfo = navigator.language? navigator.language : navigator.userLanguage;
	var gotodefault = 1;

	function redirectpage(dest) {
		if (window.location.replace)
			window.location.replace(dest);
		else
			window.location = dest;
	}

	// pageLang is this page's native language
	var pageLang = document.getElementsByTagName('html')[0].getAttribute('lang');
	var langIter = langinfo.substr(0,2);
	for (i = 0; i < langcodes.length-1; i++) {
		if (langIter === langcodes[i]) {
			if (langIter !== pageLang)
				redirectpage(langredirects[i]);
			gotodefault = 0;
			break;
		}
	}
	// this browser's lang is not listed in langcodes, jump to default URL
	if (gotodefault)
		redirectpage(langredirects[langcodes.length-1]);
}
