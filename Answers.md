1. preprocessor lets you convert a different type of css syntax to a regular css syntax.

2. npm install -g less

3. animation using keyframes

@keyframes appear_left {
    from {
    	 position: absolute;
        left: -100px;
        top: 55px;
        opacity: 0;
    }
    to {
    	 position: absolute;
        left: 60px;
        top: 55px;
        opacity: 1;
    }
}

@keyframes appear_right {
    from {
    	position: absolute;
        right: -100px;
        opacity: 0;
    }
    to {
    	position: absolute;
        right: 60px;
        opacity: 1;
    }
}

.custom-animation (@name, @duration: 1.1s) {
	-webkit-animation: @name @duration;
	-moz-animation: @name @duration;
	-ms-animation: @name @duration;
}

4. fixed layout uses px for the layout and it doesn't change when window resizes. Adaptive layout uses media query at a certain break point and the layout changes at the break point when window resizes. Fluid layout uses percentage, the layout changes instantly as the window resizes.

5. Max-width sets the maximun width of a container so it'll stop expanding when the browser goes full width. When using it with 100% width, the browser is fluid until it hits the max-width.