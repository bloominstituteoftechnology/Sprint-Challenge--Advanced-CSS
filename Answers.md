# Responsive Design, CSS, and LESS

## Describe a Preprocessor
A preprocessor simply adds additional scripting functionality, such as variables, useful built-in functions, and style mixins (which are reusable bits of script), all of which can be compiled down into standard CSS (as it doesn't add anything new to CSS itself). This helps lead to a faster workflow and more readable script.

## Installing LESS Globally

`npm install -g less`

## Example of a Mixin
In our Preprocessing II section, we were asked to use at least 5 pre-defined mixins. One of the easiest to implement was a simple rotate mixin, which employs the standard CSS rotate functionality (provide an angle in degrees to rotate an element by), however it contains all the necessary prefixes to provide this same function across multiple browsers, which prevents the need to rewrite those same lines for every element a rotation is applied to.

## Difference between fixed, adaptive, and fluid layouts
- **Fixed:** A fixed layout does not automatically resize/rescale items to accommodate differing viewport sizes, meaning that this layout type will provide an excellent experience on exactly one device type, and never adapt properly for others.
- **Adaptive:** An adaptive layout will change based on viewport size, however it only does so at predefined media queries, so page elements will essentially "snap" into new positions.
- **Fluid:** Fluid design also changes to viewport size, but it does so in a relatively smooth way (text elements automatically resizing as the viewport expands or narrows, for example).


## Why use 'max-width' in a Responsive Website
In order to keep page elements at certain style settings within the range defined by max-width (setting it to 400px will affect viewport widths between 0px and 400px, for example). Combining this with min-width can allow very specific media queries that only trigger exactly when they're supposed to.