1) An adaptive website has "breakpoints" at different screen (or viewport, the viewable area of the screen) sizes, which were controlled by media quereies in our examples.
Elements on the website would change presentationally when the screen size reaches these points. These screen sizes represent different devices (tablet/mobile/desktop).
A responsive website has the same breakpoints that adaptive websites have, but also use percentage-based values for height and width, along with constraints for these percent values.
In our given example the contraints shown were max-width and max-height.

2) Mobile first websites exhibit their mobile version of the website (as displayed on a small viewport or screen size) in the part of css that is not affected by media queries.
The media queries or "breakpoints" will then contain min-width requirements that will introduce new CSS rules once the screen reaches a greater width.
Each screen width reached represents a different device. Desktop first websites instead present the desktop version of the website in non-mediaquery css. Their breakpoints will contain,
instead, max-width requirements that introduce new rules when the screen reaches a smaller width.

3) REM is a developer's unit of measure that is relative to the "root" font-size, which is the font-size as declared in the html tag in CSS. When the font-size here is set to 62.5%, the
value for a REM is helpfully equivalent to 10px, allowing for easy and calculator-free conversions.

4) Preprocessors are a "building-tool" for CSS. You provide them with a file or group of files that are practically similar to your general index.CSS css file, but allow for usage of
techniques that lead to a much shorter and easier-to-write styling sheet. The preprocessor then takes the file(s) you provide it, processes them, and generate a index.CSS file that is
much longer line-by-line than what we had to type in. In Less, the techniques allowed involved usage of variables and mix-ins (similar to functions) in CSS to allow for lesser need
to repeat input of identical CSS rules on several elements.

5) My favorite concept in preprocessing is the ability of the compiler to scan my code and let me know  in gitbash if I have any errors in my code when I save the stylesheet. The
most difficulty I have with preprocessing, at least with LESS, is the organizational "nesting" technique, as I feel like it is more difficult to ident/create, though I feel it
looks better once it is complete.
