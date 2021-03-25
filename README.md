
# myjs
A simple JavaScript Facade library, to facilitate my life.

[![](https://data.jsdelivr.com/v1/package/gh/assisfery/myjs/badge)](https://www.jsdelivr.com/package/gh/assisfery/myjs)

## Demo
See the demo here: [https://assisfery.github.io/myjs/index.html](https://assisfery.github.io/myjs/index.html)

## Installation
Just include the myjs.min.js file in you web page.
```html
<script src="https://cdn.jsdelivr.net/gh/assisfery/myjs@1.1/myjs.min.js"></script>
```

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

## Slugify
To slugify a string use that function.

Return a string slug.
```js
myjs.slug(str)
```

## Random
To get the random number use that function.

Get a random number from min to max, but max is not included.
```js
myjs.random(min, max)
```

Get a random number from zero to max, but max is not included.
```js
myjs.random(max)
```

## Navigator
To execute navigator utils use that functions.

Redirect page to another url.
```js
myjs.redirect(url)
```

## Element
To manipulate dom use those function.

Get all elements that match with query done. For example: myjs.e(".btn") will select all elements that has class "btn".
```js
myjs.e(query)
```

Add a class to all elements that match with query.
```js
myjs.addClass(query, class)
```

Remove a class to all elements that match with query.
```js
myjs.removeClass(query, class)
```

Set a inner html in all elements that match with query.
```js
myjs.setHtml(query, html)
```

Get a inner html of the first element that match with query.
```js
myjs.getHtml(query)
```

Set a value html in all elements that match with query.
```js
myjs.setVal(query, value)
```

Get a value of the first element that match with query.
```js
myjs.getVal(query)
```

Hide all elements that match with query.
```js
myjs.hide(query)
```

Show all elements that match with query.
```js
myjs.show(query)
```

## AutoSelect
To auto select value in select (dropdown) element use tag **data-value="value1"** and execute the function **myjs.autoSelect()** when page is ready.

```html
<select data-value="3" class="form-control">
  <option value="1">Value 1</option>
  <option value="2">Value 2</option>
  <option value="3">Value 3</option>
</select>
```

```js
myjs.autoSelect()
```

## DrawChart
To draw a chart you can use those functions.  

Those functions depends of ChartJS libray.
```html
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
```

To draw a simple chart of any type supported by ChartJS.
```js
 myjs.drawChart(area, type, title, labels, data)
```

**Sample**
```js
myjs.drawChart('#chart1', 'bar', 'Some chart', ['A', 'B', 'C'], [1, 2, 3])
```

To draw a series chart of any type supported by ChartJS.
```js
myjs.drawChartSerie(area, type, labels, datasets)
```

**Sample**
```js
myjs.drawChartSerie('#chart2', 'bar', ['A', 'B', 'C'],
[
  {
           label: 'Some data 1',
           data: [12, 19, 3],
           backgroundColor: myjs.purpleColors,
           borderColor: myjs.purpleColors,
           borderWidth: 1
  },
  {
           label: 'Some data 2',
           data: [2, 6, 8],
           backgroundColor: myjs.blueColors,
           borderColor: myjs.blueColors,
           borderWidth: 1,
  }
]
);
```

## Datetime timezone convertion
To convert a time to or from UTC use those functions.  

Those functions depends of MomentJS Library.
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.31/moment-timezone-with-data-1970-2030.min.js"></script>
```

Convert a datetime from a timezone to UTC.
```js
myjs.toUtc(datetime, timezone)
```
**Sample**
```js
myjs.toUtc("2020-09-13 09:49:39", "Atlantic/Cape_Verde")
```

Convert a datetime from UTC to a timezone.
```js
myjs.fromUtc(datetime, timezone)
```
**Sample**
```js
myjs.fromUtc("2020-09-13 09:49:39", "Atlantic/Cape_Verde")
```

## Swap array elements
To swap array elements position (to left or right) use **myjs.swapArray()** function.

```js
myjs.swapArray(elements, position, direction = "right", callback = null)
```
