What is the difference between an adaptive website and a fully responsive website?
    - Adaptive websites evoke Media queries, whereas a fully responsive site evoke media queries and percent based layout. Fully Responsive can be described as a combination of Adaptive and fluid layouts.

Describe what it means to be mobile first vs desktop first.
    -Mobile first design means your base CSS styles reflect a mobile layout. Then your ensuing media queries, that are set at min-widths, represent tablet and desktop layouts. Where as desktop first is exactly the inverse. Base CSS == Desktop Design, media queries are set with max-widths and represent tablet and mobile. 

What does font-size: 62.5% in the html tag do for us when using rem units?
    - This is great when using rems, because it normalizes your fonts. It ensures that 1rem = 10px. So it's easy to implement using multiples of 10. 

How would you describe preprocessing to someone new to CSS?
    - Prepocessing is awesome! It's essentially a more robust and organized way of keeping our CSS. The way it functions is we write our code in a Less file it's then compiled via Javascript and then output in CSS. With preprocessors we gain access to variables, mixins, functions, nesting and much more that allows us to streamline our CSS to mimic our HTML and become more flexible and responsive to changes we need to make. By storing values in variables and mixins we're now capable of adjust one property vs back traking over hundreds of lines of code. With nesting, we can now condense our code and in IDE literally collapse it like our HTML which makes it much easier to navigate vs. CSS.

What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
    - I really love Nesting, Mixins and Variables. They all are super valuable in their own ways and allow me to work so much faster. Right now I feel pretty comfortable with Less, but would like to learn more about functions. I think there are a lot we can do with those and I'd love to experiment a bit. 