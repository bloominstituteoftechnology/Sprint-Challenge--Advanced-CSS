1)	What is the difference between an adaptive website and a fully responsive website?
-->		Responsive web design :
		servs the same HTML for all devices(Desktop, tablet, mobile) and uses only CSS with media queries to decide 	
		the rendering on each device. 
		-	use percentages(for width, padding, margins) to ensure a website’s flexibility, allowing smooth transition from one screen size 
			to the next.
		-	Media queries detect the device being used.
		-	A single template is delivered across all devices.
		-	All on-page elements are downloaded, regardless of device, and then resized to suit.

		Adaptive web design where A set of layouts are designed suited to each screen variation. Layout decisions are then taken at server side, and HTML is served dependent upon device detected.
		-	Client-side code detects device being used.
		-	Separate templates are delivered dependent upon device.
		-	Only the on-page elements required for a particular screen layout are downloaded.


2)	Describe what it means to be mobile first vs desktop first.
		-	These both are responsive methods. You need to consider this approach before designing the main function of the site.
		-	Desktop first design means designing the highest specifications first and then going down to smaller resolutions. Uses @media 
			query with max-width.
		-	As the name suggests first design for mobile screen size and then go for higher resolution (tablet, Desktop). Uses @media query
			with min-width

3)	What does font-size: 62.5% in the html tag do for us when using rem units?
		- 	rem stands for 'Root-em'. The rem unit is relative to the root—or the html—element. That means that we can define a single font
		 	size on the html element and define all rem units to be a percentage of that. Using rem unit approx. 10px = 1rem when html is set to font-size: 62.5%; 


4)	How would you describe preprocessing to someone new to CSS?
		-	CSS Preprocessors convert code into a true CSS by taking the same written code from a simple preprocessed language (CSS with 	
			added extensions). Besides CSS preprocessors are used to add extensions which aren’t used in CSS yet like: functions, mixins, nested rules, variables, operations and inheritance.


5)	What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?
		-	Using esacaping and mixins you can increase your productivity and decrease the amount of code you are writing.
		-	...