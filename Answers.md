## Questions

1. A preprocessor takes data such as code and transforms it to conform to the standards of the program or language it is compiling to.

2. The command to installd Less globally is - 
    - `npm install less -g`

3. I haven't actually had a chance to do the mixins assignment yet. Unless the media queries count which I don't see why they wouldn't because they are in the mixins files. Then this would be one:
    - `@phone: ~"(max-width: 400px)";`
    I lied, I guess they aren't, but I'm leaving that there to show my lie or mistake? Here would be an example :
    - `.rotate (@deg) {
       webkit-transform:    rotate(@deg);
	   moz-transform: 	     rotate(@deg);
	   ms-transform: 		 rotate(@deg);
	   o-transform: 		 rotate(@deg);`

4. A fixed layout is not responsive and will not adapt to different screen sizes. An adaptive layout will adapt at set breakpoints such as 400px, 768px, 1100px, etc. A fluid layout is completely responsive and will adapt to any size of screen or setting fairly seamlessly.

5. The max-width should be set because using percentages can be hard to control to set parameters.