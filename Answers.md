What is the difference between an adaptive website and a fully responsive website?
	An adaptive website has breakpoints to look good at a few fixed screen sizes.  A full responsive website dynamically adjusts to look good no matter what width the user has their browser set to.

Describe what it means to be mobile first vs desktop first.
	With mobile first the styles are implemented to match the mobile design.  Then breakpoints are added with min-width to adjust the site to look good at larger sizes.
	With desktop first, the opposite is true. The styles are implemented to match the desktp design and max-width is used to adjust to look good at smaller sizes. 

What does font-size: 62.5% in the html tag do for us when using rem units?
	Sets the base unit to 10px.  Then we can easily calculate rem to be any other font size we want.  We use a base 10 number system everyday, so anything we do to stay within that makes our brains happy.

How would you describe preprocessing to someone new to CSS?
	Preprocessing is a tool to translate code into css.  So we can use nested styles, variables, and mixins.

What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
	I love the nesting and mixins.  The hardest thing was keeping track of my styles once we went to multiple import files.  It makes each file easier to read, but I found I had just about every less file open for reference.