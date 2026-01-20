function chgHTML() {
	var version = "3.10";

	if(navigator.appName=="Microsoft Internet Explorer") {
		if (document.getElementById("versionNumber") != null) {
			if (typeof(versionNumber.length) == "undefined") {
				versionNumber.innerHTML = version;
			} else {
				for (i=0; i< versionNumber.length; i++) {
					versionNumber[i].innerHTML = version;
				}
			}
		}
	} else {
		var verNums = document.getElementsByName("versionNumber");
		for (i=0; i< verNums.length; i++) {
			verNums[i].innerHTML = version;
		}
	}
}