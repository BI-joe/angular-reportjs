angular-reportjs
===============

Angular directive for using [Report.js](http://youknowriad.github.io/report.js)

Installation
------------

```sh
bower install angular-reportjs
```

Setup
-----

```html
<!--
Include Angular ~1.3.0
Include Chart.js ~1.0.1
Include Report.js ~1.0.0
-->
<script type="text/javascript" src="bower_components/angular-reportjs/src/angular-reportjs.js"></script>
```

and in your app init...

```javascript
var app = angular.module('myApp', ['reportjs']);
```

Usage
-----

There is a single directive for all your reports.

In the template...

```html
<div ng-controller="testCtrl">
    <report-js report-data="someData" layout="myLayout"></report-js>
</div>
```

In the controller...

```javascript
myapp.controller('testCtrl', function ($scope) {
	$scope.someData = {
        dimensions: [{ id: 'Measures'}, { id: 'Year' }],
        dimensionValues: [
            [{ id: 'count', caption: 'My Count' }, { id: 'sum', caption: 'My Sum' }],
            [{ id: '2013' }, { id: '2014' }]
        ],
        cells: [
            {value: 10, dimensionValues: [0, 0]},
            {value: 20, dimensionValues: [1, 1]},
            {value: 15, dimensionValues: [0, 1]}
        ]
    };

    $scope.myLayout = {
        type: 'table',
        rows: ['Measures'],
        columns: ['Measures', 'Category']
    };
});
```
