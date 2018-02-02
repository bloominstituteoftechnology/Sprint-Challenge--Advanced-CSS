## Troy Bradley answers to Sprint Challenge Essay Questions

1. Preprocessors (LESS, SASS, SCSS, etc.) are abstractions of CSS that allow for some coding and are built to allow designers and developers to create sites that can be updated with less effort and better, more consistent results. IE - using variables for backgrounds or text colors throughout a site allows the client (or management) to ask for a change in colors used without having to wait (and pay for) a complete redesign of the site. This is a very basic example. Preprocessors also make it easier to develop responsive websites by providing a mechanism (escaped media query) that tells the browser how to display content on various screen sizes. 

2. To install less globally, the npm command is: `npm install less -g`.

3. I used the opacity mixin to change the opacity of an image. The goal was to move the image behind some text and a button and just squeaze them both into the same space on tablets and phones. 

4. Fixed vs. Adaptive vs. Fluid layouts: 
    4a. Fixed layouts have a fixed width for the entire site. These are typically designed for desktop/laptop viewing. It is up to a small device (phone or tablet) to allow the user the best possible experience by allowing them to zoom in on a particular part of the site. 
    4b. Adaptive layouts are similar to multiple fixed width layouts built into one codebase. The code will tell the browser, based on the screen size viewing the site, how to display the content. There will be distinct break points, called media queries, where these changes will occur. This can result in a choppy look while the viewport is being resized on a desktop/laptop, but phones and tablets rarely change their viewport size and will not likely experience this. However, as new devices are designed, their resolution may fall on an awkward spot for a specific site design, in which case, that site would display poorly on the new device.
    4c. Fluid layouts use relative values to define the width of elements that make up a site. In this way, the site fluidly changes from one screen size to another. In this way, the site is viewable at almost any resolution and will look as the designer intended.

5. CSS uses max-width to tell the browser, effectively: If a viewport is smaller than x width, display content in this fashion. A default setting is also supplied for viewports wider than x. In that way, a site can be designed for multiple viewport sizes. 