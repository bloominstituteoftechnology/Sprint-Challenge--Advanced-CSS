1. What is the difference between an adaptive website and a fully responsive website?

An adaptive website has static measurements on elements. However, the website still uses breakpoints to change the size of elements to make it viewable on mobile or other sizes it's been built for. Responsive design uses more percent based sizes, so it can provide a quality viewing experience on all screen sizes that it's been designed for.

2. Describe what it means to be mobile first vs desktop first.

To be desktop first means you would start developing a page with a larger size first (Like the size of a common desktop screen @ 800px width or larger), then use max-width media queries to start moving to smaller screens. When you do Mobile first, you would start with a mobile sized screen, developing it for 300-500px wide screens (Small-Large mobile screens) then moving up by developing larger sets of screens with min-width media queries.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?

Having `font-size: 62.5%` in the `html` tag makes it easier for the developer to set font-sizes. Why? Because the default user-agent style for most browsers sets font size to 16px, and having your website set to 62.5% would make 1rem = 10px. This allows the developer to easily set px counts without having to whip out a calculator to check exactly how much rem would be the px count they are looking for.

4. How would you describe preprocessing to someone new to CSS?

Preprocessing CSS is great. When writing CSS before it's preprocessed` is when you are given the largest benefit - readability, and speed. For example, in vanilla CSS to select all anchor tags inside of your navigation, that's also inside your header you would have to write
```header nav a { styles }```
This can get annoying, and isn't always the most readable or repeatable for a lot of styling. When you're using a preprocessor you can organize your code into blocks that are a lot easier for us to read. What if you wanted to select all anchor tags inside your nav, but also images? Well then you could write
```header {
    nav {
        a {
            font-size: 1.6rem;
        }

        img {
            width: 200px;
        }
    }   
}
```
This makes it a lot easier to see what is styled, and where. Another benefit that comes, is when you're done writing your CSS, it gets `preprocessed` into a single css file, which provides slightly better performance on your webpage by not having multiple CSS files it has to read at the inital runtime. You can also have multiple files you write it all in, where it gets combined into one single file. So in the end, you get to write your CSS easier, as well as have a performance boost to your web pages.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

My favorite concept in preprocessing would be mixins/parametric mixins. Being able to reuse styles without copy and pasting is VERY useful to me. What gave me the most trouble at first would be the mixins I ended up enjoying so much. I was having issues trying to find reasons to use them, but realized you're not supposed to make a mixin for everything. But they are very useful when you start to notice very common paradigms within your code.