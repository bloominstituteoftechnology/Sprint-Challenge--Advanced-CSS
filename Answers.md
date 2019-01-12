What is the difference between an adaptive website and a fully responsive website? 
Adaptive website relies on predefined breakpoints to adapt itself to various screens. Eg:
@media(max-width: 500px){
  width: 800px;
  margin: 0 auto;
  padding: 20px;
}

Fully responsive website uses adaptive breakpoints and percentage based sizing for the optimal viewing experience of a website across any screen size. Eg:
@media(max-width: 500px){
  width: 800px;
  margin: 0 auto;
  padding: 20px 1.25%;
}




Describe what it means to be mobile first vs desktop first. 
Mobile first: Webpages are built to accommodate mobile screen first and then adjust to other screens like tablet and desktop. Here min-width is used for media queries.
Desktop first: Webpages are built to accommodate desktop screen first and then adjust to other screens like tablet and mobile. Here max-width is used for media queries.





What does font-size: 62.5% in the html tag do for us when using rem units? 
62.5% is the root font-size. It is used as a base for rem calculation for a webpage.




How would you describe preprocessing to someone new to CSS? 
Preprocessing take codes written in the preprocessed language like LESS and then converts/compiles those codes in normal CSS. Preprocessor uses features like variables, functions, mixins, nesting etc., to make CSS structure more readable and organized.



What is your favorite concept in preprocessing? What is the concept that gives you the most trouble? 
My favorite concept in preprocessing are mixins and nesting. I feel they save a lot of space and help CSS structure look organized. The concept that gives me most trouble is escape. It could be because I didn’t make an effort to get familiar with this concept.  



