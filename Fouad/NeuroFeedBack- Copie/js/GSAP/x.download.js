document.addEventListener("DOMContentLoaded", function() {

	//look for ?download=GSAP-JS (or whatever) in the URL, and show the download overlay if we find it.
	if (document.URL.indexOf("download=") !== -1) {
		var a = document.URL.substr(document.URL.indexOf("?") + 1).split("&"),
			i = a.length,
			pair;
		while (--i > -1) {
			pair = a[i].split("=");
			if (pair[0] === "download") {
				downloadZIP();
				break;
			}
		}
	}

	window.downloadZIP = downloadZIP;
});

function downloadZIP(e) {
	if(e) {
		e.preventDefault();
	}
	$.getJSON("/index.php?app=gscheckout&module=ajax&controller=language&do=getByKey&key=js.GSAP", function(data) {
		window.location.href = data.DownloadUrl;
	});
}
