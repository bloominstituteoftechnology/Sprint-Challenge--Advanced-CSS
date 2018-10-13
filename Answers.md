1. An adaptive designed website has multiple fixed points of design using media queries for different screen layouts. EX. Desktop first/Mobile first, then tablet, then desktop/mobile. // A responsive designed website has one to two set styles and relatively little to no breakpoints, and basically just shrinks the content so much until readable.

2. Mobile first means that you design the website to be centered around mobile user's experience first, then transition it with breakpoints to become a tablet, then desktop view. Desktop is just the opposite.

3. `font-size: 62.5%` allows the developer to use `rem` units at a 1.0 scale. Instead of trying to find the right `rem` with an initial `font-size 100%`, the 62.5% is helpful. Example if you wanted size 16 font/ 16px. You would put `1.6rem`.

4. As simple as I can put it, preprocessing is basically just a system to make styling as clean as possible and DRY.

5. My favorite concept to preprocessing is really everything. Nesting, Mixins, and Variables are all very handy. My least favorite concept is escaping/parametric mixins.
