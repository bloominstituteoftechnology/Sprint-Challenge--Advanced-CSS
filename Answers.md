What is the difference between an adaptive website and a fully responsive website?
    Adaptive: styling changes abruptly at designated breakpoints to accomodate a set number of screen dimensions
    Fully responsive: includes adaptive breakpoints, but additionally uses relative sizing (percentage-based) to yield fludity at any screen size

Describe what it means to be mobile first vs desktop first.
    Mobile first products are built to accomodate mobile users by default and adjust to other screen types as a secondary focus. To this end, min-width is used for mobile first queries. Alternately, desktop first prioritizes the desktop user and uses max-width media queries to make adjustments for other devices.

What does font-size: 62.5% in the html tag do for us when using rem units?
    The 62.5 allows us to have a base-ten root (10/16) for convenient calculations thoughout our project and the percent lets us avoid overriding user settings, which is what happens when px values are hard-coded.

How would you describe preprocessing to someone new to CSS?
    Preprocessors allow us to use their intuitive and powerful syntax, which are then compiled and output into regular old CSS. One example is that preprocessors let us nest CSS elements, the way we do in HTML, which helps to streamline and organize the code. The compiler sees this and transforms the nests into the longform, unested CSS we're used to seeing. 

What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
    I think my favorite concepts are nesting and mixins because they both save so much space. Escaping in LESS is probably the concept that most escapes me conceptually. For reasons unknown to me, I had to use the old format for escaping even thought my LESS version is 3.8
