1. If you had to teach someone with basic CSS knowledge what a preprocessor was, how would you describe it?

    CSS preprocessors extend CSS with variables, operators, mixins, functions and many other useful features. Preprocessors help achieve  better code reusability and maintainability, increase producitivity, and decrease the amount of code n CSS.

2. What is the command in node package manager (npm) to install LESS globally on your computer?

    npm install -g less

3. Please provide an example of a mixin you have used in a project this week.

    ```
    .mixin-cta-button (@width; @height; @background) {
        width: @width;
        height: @height;
        background-color: @background;
    }

    .cta-text button {
        border: 1px double black;
        font-size: 16px;
        background: white;
        width: 170px;
        height: 32px;
        margin-top: 10px;
        cursor: pointer;
        
        .mixin-cta-button(200px; 42px; rgb(126, 155, 199));

        &:hover {
            background: black;
            color: white;
        }
    }
    ```

4. What is the difference between fixed layout, adaptive layout, and fluid layout?

     Fixed layout is when you control your sizes with pixels and the layout is not responsive to changes in screen sizes.

     Adaptive layout is when you set breakpoints for different screen sizes.

     Fluid layout is when you use percentages to adapt your styles to different screen sizes.

5. Why do we need to use the CSS property max-width in a responsive website?

    To better control the design pattern if it goes above the max-width point. Responsive design represents the best of the two worlds of adaptive and fluid design.