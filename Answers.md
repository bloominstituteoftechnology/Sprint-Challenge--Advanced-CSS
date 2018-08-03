1. What is the difference between an adaptive website and a fully responsive website?

An adaptive website has templates for pre-defined screen sizes, but a new layout must be created for each device. Some devices may have more or less information depending on what can fit in the layout. A fully responsive websited, on the other hand, combines device-specific layouts with fluidity, by allowing one master layout to flow between screen sizes using media queries, and giving all users access to the same amount of info.

2. Describe what it means to be mobile first vs desktop first.

Mobile first refers to designing and coding for the mobile version of a website first, and using media queries to adapt the layout to desktop. Desktop first is vice versa, with the desktop version designed first and media queries used to make necessary changes for the mobile version.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units? 

Setting the root font-size to 62.5% allows us to size rem units similarly to pixels (px), which makes for a more intuitive experience, as something like 1.2rem corresponds to 12px.

4. How would you describe preprocessing to someone new to CSS?

Preprocessors give us access to more assets by extending CSS to include variables, mixins, operators, functions, etc. We use the preprocessor's syntax (which is very similar to CSS), which is then compiled and translated to the CSS file. 

5. What is your favorite concept in preprocessing?  What is the concept that gives you the most trouble? 

Variables and mixins are my favorite because they let me have unity in my design without having to remember every single occurrence of a color or flexbox style. I'm a forgetful person so it's helpful to be able to change something once instead of ten thousand times.

Parametric mixins with variables are a little confusing, only because I sometimes forget that the variables in the parameters are not the same thing as the variables in the variables.less file. All those @ symbols can be a bit tricky to keep separated in my brain.