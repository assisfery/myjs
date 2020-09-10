
# myjs
A simple JavaScript Facade library, to facilitate my life.

## Demo
See the demo here: [https://assisfery.github.io/myjs/index.html](https://assisfery.github.io/myjs/index.html)

## Cookies
To manage cookies use those functions.

Set a value to cookie.
```js
myjs.setCookie(key, value)
```

Set a value for a cookie with expiration days.
```js
myjs.setCookie(key, value, days)
```

Get a defined cookie.
```js
myjs.getCookie(key)
```

Verify if a cookie exists.
```js
myjs.hasCookie(key)
```

Delete a cookie.
```js
myjs.removeCookie(key)
```

## Query String
To get query string parameters from url you can use that function.

Get query string from current page url.
```js
myjs.getQuery(key)
```

Get query string from a url.
```js
myjs.getQuery(key, url)
```

## Validations
To validate some data use those functions.

To validate if a string is email.
```js
myjs.isEmail(str)
```

To validate if a string is URL.
```js
myjs.isUrl(str)
```

To validate if a string is a number.
```js
myjs.isNumber(str)
```

## Local Storage
To use localStorage, for storing data in your browser, use those functions.

Set a value to localstorage.
```js
 myjs.setLocal(key, value)
```

Get a defined localstorage.
```js
myjs.getLocal(key)
```

Verify if a localstorage exists.
```js
myjs.hasLocal(key)
```

Remove localstorage data.
```js
myjs.removeLocal(key)
```

## Sessions Storage
To use sessionStorage, for storing data in your browser, use those functions.

Set a value to sessionStorage.
```js
myjs.setSession(key, value)
```

Get a defined sessionStorage.
```js
myjs.getSession(key)
```

Verify if a sessionStorage exists.
```js
myjs.hasSession(key)
```

Remove sessionStorage data.
```js
myjs.removeSession(key)
```