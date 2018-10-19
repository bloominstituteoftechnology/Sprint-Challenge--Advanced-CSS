1. Adaptive builds have multiple templates for different devices users might be using through breakpoints based on the viewport, but is very rigid. Fully responsive design uses concept like percentage-based layouts to respond to resized viewports but also has breakpoints for different devices.

2. mobile first design means the page/app is designed with a mobile user and viewport being the primary user, and the base css stylings will reflect that. responsive design breakpoints will then be added (using min-width values, since the style works from small viewport to large) for larger devices. Desktop first is the opposite, where base css is written with a full desktop viewport in ming, then using media queries with max-width values to apply different css for sequentially smaller viewports

3)setting font-size:62.5% in the html tag lets your site be based off of the individual user's browser font settings, but also allows us to design the rest of our font sizes with a base 10 format using rem units

4)preprocessing simply uses more advanced syntax than typical css that allows for more functionality and faster coding, which is then compiled and outputs normal CSS for the site to read

5)my favorite preprocessing concept, at least with Less, is nesting syntax. it becomes easier to write and read code using nesting since an entire section can be nested within one tag/class call instead of having to specify multiple layers deep every time. mixins don't particularly give me trouble, but they are the most advanced I've used so far and I know they can do so much more with their flexibility
