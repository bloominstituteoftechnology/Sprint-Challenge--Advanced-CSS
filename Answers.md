## Answers

1. A preprocessor is like a compiler for any computer science language. It takes readable human code and translates it into computer-readable code. For CSS preprocessors, this is just turning a preprocessor like LESS into CSS.

2. `npm install -g less`

3. `mixin` example:

> @max-width: 880px;

> .convertToPercent(@pixels, @width: @max-width) {
> @percent: @pixels / @width \* 100%;
> }

> @media @laptop {
> .convertToPercent(170,292.11);
> width: @percent;
> }

4. A fixed layout has a fixed starting width a website is built upon. An adaptive layout uses `@media query` to build websites for different devices. And a fluid layout uses percent based responsiveness to make an ideal viewing of the website.

5. We need to use the CSS property max-width in a responsive website because there needs to be an absolute 100% to base all other element percentages on. Otherwise, the percentages will be based on the viewport / display, which gives us no control over the design of the website.
