

1.  An adaptive website uses some fixed width along and media queries to create a responseive design.  A fully responsive design website uses a percent based layout as well as media queries. 
2.  Mobile first means that you are designing for the mobile experience as the primary experience.  Desktop, you are designign for the desktop to be the main experience.  Some of the differences are: 
    Desktop first: 
        designing using 'max-width' mentality and the media queries will contain the mobile view.
    Mobile first: 
        designing using 'min-width' mentality and the media queries will contain the desktop view.
3.  Setting the font-size to 62.5% in the html tag allows all elements to be sized based off the root element.  this trick also allows you to base the rem units off 10 not 16 so its easier to work with.
4.  I would describe preprocessing as a process of running your less code through a compiler and generating the css file.
5.  My favorite part of preprocessing is the nesting.  it helps mirror the html structure and keep the code clean.  I have the most trouble seeing situations where using parametric parameters would be helpful.
    