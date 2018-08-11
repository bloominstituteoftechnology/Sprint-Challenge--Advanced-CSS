1) An adaptive website will "snap sizes"(change sizes abruptly) depending on the actual set  view width of the browser window, Responsive will "flex"(move with the browser in a orchestrated fashion until it hits a media break) with the browser as it changes sizes.

2) Mobile first means you are building the website form its smallest view and adjusting outward using a media query @(min-width:). Desktop first means you are building for the largest size and scaling down implementing media queries @ (max-width).

3) by setting font-size: 62.5% it allows a user to utilize the accessibility feature to alter the font size depending on the setting within their browser. it also lets us use rem which makes the calculation easy to evaluate. 1rem=10px 

4) Preprocessing will give you more adaptability and readability by giving you features not accessible in vanilla css. It helps to keep your code "DRY" by allowing variables which can be used interchangeably and mixins which are functions for your css. it will allow you to "nest" code within containers and then compile  all of it and spit it out in css essentially expanding it and logging it in you css file.

5) I love parametric mixins. They allow you to utilize the same piece of code over and over without having to type it all and still be able to implement changes through parameters.