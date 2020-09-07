var myjs = {};

// COOKIE MANAGEMENT
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

myjs.removeCookie = function(key)
{
	myjs.setCookie(key, "", -1);
}

// LOCAL STORAGE
myjs.getLocal = function(key)
{
	return localStorage.getItem(key);
}

myjs.setLocal = function(key, value)
{
	return localStorage.setItem(key, value);
}

myjs.hasLocal = function(key)
{
	return myjs.getLocal(key) != null;
}

myjs.removeLocal = function(key)
{
	localStorage.removeItem(key);
}

// OTHERS
console.log("loaded myjs...")