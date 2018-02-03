## Questions - Self Study

1. If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?
  - A preprocessor is a sub-language of CSS that allows you to write/edit your CSS in much easier and nicer to read code. It acts like a middle man for your css and you updating your css as your work with it.
2. What is the command in node package manager (npm) to install LESS globally on your computer?
 - npm -g install less = Allows you to use less
 - npm -g install-watch-compiler = Allows for realtime compiling while working with less
3. Please provide an example of a mixin you have used in a project this week.
 - .rotate(@deg) = rotates the element it is attached to @deg.
 - .transition(@s) = time for element to transition changes that are listed under the same nesting hierchy as transition.
4. What is the difference between fixed layout, adaptive layout, and fluid layout?
 - Fixed layout = uses static dimensions (px) for layout and does not change with resizing of viewing window.
 - Adaptive layout = uses static dimensions (px) but adapts when detecting the resizing of the viewing window. Changes typically occur all at once at breaking points.
 - Fluid layout - uses relative dimensions (%) for layout that responds to the resizing of a viewing window in real time.
5. Why do we need to use the CSS property max-width in a responsive website?
 - By defining a max-width we are able to use percents knowing 100% = max-width. This allows use to calculate our desired % widths for elements.