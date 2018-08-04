
BallAnimation.js
================

JavaScript that allows to add ball animations in any container, javascript handles the impacts between the balls and on the edges.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

include : 
```
<script src="ballimpact" type="text/javascript"></script>
<link href='style.css' rel='stylesheet' type='text/css' />
```

init sample :
```
<script>
	window.addEventListener("load", function(event) {     
		var balAnimation1 = new BallAnimation("#zone1", 6, 20, 1);
		var balAnimation2 = new BallAnimation("#zone2", 12, 10, 1);
	});
</script>
```

- [online demo](https://www.javlo.org/resource/static/github/ballimpact/index.html)

### Prerequisites

nothing

## Versioning

1.1

## Authors

* **Patrick Vandermaesen** - *Java/Javascript Deleloper*

## License

This project is licensed under the MIT License