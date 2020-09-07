var myjs = {};

myjs.getCookie = function(key)
{
	var name = key + "=";

	var decodedCookie = decodeURIComponent(document.cookie);

	var ca = decodedCookie.split(';');

	for(var i = 0; i <ca.length; i++) {

		var c = ca[i];

		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}

		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}

	}
	return null;
}

myjs.setCookie = function(key, value, days = 30)
{
	var d = new Date();

	d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));

	var expires = "expires="+d.toUTCString();

	document.cookie = key + "=" + value + ";" + expires + ";path=/";
}

myjs.hasCookie = function(key)
{
	return myjs.getCookie(key) != null;
}

console.log("loaded myjs...")