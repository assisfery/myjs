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

// QUERY STRING
myjs.getQuery = function(key, url = null)
{
	if (!url) url = window.location.href;
		key = key.replace(/[\[\]]/g, '\\$&');

    var regex = new RegExp('[?&]' + key + '(=([^&#]*)|&|#|$)'),

    results = regex.exec(url);

    if (!results) return null;
    if (!results[2]) return '';
    
return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// VALIDATIONS
myjs.isEmail = function(str)
{
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(str).toLowerCase());
}

myjs.isUrl = function(str)
{
	var pattern = new RegExp('^(https?:\\/\\/)?'+
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
    '((\\d{1,3}\\.){3}\\d{1,3}))'+
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
    '(\\?[;&a-z\\d%_.~+=-]*)?'+
    '(\\#[-a-z\\d_]*)?$','i');

	return !!pattern.test(str);
}

myjs.isNumber = function(str)
{
	return !isNaN(str);
}

// SLUGIFY
myjs.slug = function(str)
{
	return str
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}

// RANDOM
myjs.random = function(min, max = null)
{
	if(max == null)
		return myjs.random(0, min);

	return min + Math.floor(Math.random() * (max - min));
}

// REDIRECT
myjs.redirect = function(url)
{
	window.location.href = url;
}

// ELEMENT
myjs.e = function(query)
{
	var elements = document.querySelectorAll(query);

	// if(elements.length == 1)
	// 	return elements[0];

	if(elements.length == 0)
		return null;

	return elements;
}

myjs.addClass = function(query, new_class)
{
	var elements = myjs.e(query);

	for(var i = 0; i < elements.length; i++)
	{
		elements[i].classList.add(new_class);
	}
}

myjs.removeClass = function(query, old_class)
{
	var elements = myjs.e(query);

	for(var i = 0; i < elements.length; i++)
	{
		elements[i].classList.remove(old_class);
	}
}

myjs.setHtml = function(query, html)
{
	var elements = myjs.e(query);

	for(var i = 0; i < elements.length; i++)
	{
		elements[i].innerHTML = html;
	}
}

myjs.getHtml = function(query)
{
	var elements = myjs.e(query);

	if(elements)
		return elements[0].innerHTML;

	return null;
}

// CHART
myjs.drawChart = function(area, type, title, labels, data, backgroundColor = null, borderColor = null)
{
	var ctx = document.querySelector(area).getContext('2d');

	if(!backgroundColor)
		backgroundColor = [
	        'rgba(154, 18, 179, 0.7)',
	        'rgba(145, 61, 136, 0.7)',
	        'rgba(190, 144, 212, 0.7)',
	        'rgba(155, 89, 182, 0.7)',
	        'rgba(142, 68, 173, 0.7)',
	        'rgba(102, 51, 153, 0.7)'
	    ];

	if(!borderColor)
		borderColor = [
	        'rgba(154, 18, 179, 0.7)',
	        'rgba(145, 61, 136, 0.7)',
	        'rgba(190, 144, 212, 0.7)',
	        'rgba(155, 89, 182, 0.7)',
	        'rgba(142, 68, 173, 0.7)',
	        'rgba(102, 51, 153, 0.7)'
	    ];

	var myChart = new Chart(ctx, {
	    type: type,
	    data: {
	        labels: labels,
	        datasets: [{
	            label: title,
	            data: data,
	            backgroundColor: backgroundColor,
	            borderColor: borderColor,
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero: true
	                }
	            }]
	        }
	    }
	});
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

// SESSION STORAGE
myjs.getSession = function(key)
{
	return sessionStorage.getItem(key);
}

myjs.setSession = function(key, value)
{
	return sessionStorage.setItem(key, value);
}

myjs.hasSession = function(key)
{
	return myjs.getSession(key) != null;
}

myjs.removeSession = function(key)
{
	sessionStorage.removeItem(key);
}

// OTHERS
console.log("loaded myjs...")