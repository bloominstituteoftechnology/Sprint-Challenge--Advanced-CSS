#### 1. If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?

* A preprocessor is a scripting language that extends CSS and is then compiled into CSS syntax. 

* Preprocessors allow us to write CSS much like we would JavaScript.

#### 2. What is the command in node package manager (npm) to install LESS globally on your computer?

```
npm i -g less
```
#### 3. Please provide an example of a mixin you have used in a project this week.

```
.transition-properties(...) {
  -webkit-transition: @arguments;
  -moz-transition: @arguments;
  -o-transition: @arguments;
  transition: @arguments;


.transition-properties(border-top .25s linear, color .5s linear;);
```
#### 4. What is the difference between fixed layout, adaptive layout, and fluid layout?

* Fixed layouts have a set width. Resizing and device viewport have no affect on Fixed Layouts.

* Fluid layouts use % based widths that scale with viewport resizing.

* Adaptive layouts use media queries to target specific device sizes.

#### 5. Why do we need to use the CSS property max-width in a responsive website?

##### Without max-width our containers or ```divs``` could easily stretch beyond the width of a device's viewport.