1. What is the difference between an adaptive website and a fully responsive website?

	Adaptive :Server uses HTML which is pre-selected for different devices with different screen size.
	          Information is pre-selected and only specific device based information is displayed.
	          Templates are optimized for each devices.


	Responsive:
		Responsive website design is the most suitable type of web design style and the most popular in today’s time. It provides
		 precise viewing experience of a website to the user, adapting to all screens across devices using media querry.

    Devices are detected by media querries. Flexible images and grid are sized correctly to various screen of devices. It downloads all the content whether it uses or not.One template across all devices. Website loads faster than an adaptive website design as there is only one across devices.

2. Describe what it means to be mobile first vs desktop first.
	Desktop first means desigining CSS for desktop first, and then using max-width to override the properties of CSS to create a responsive view for mobile screens. Typically we use media query with max-width of 500px for creating a mobile screen from desktop screen. Mobile first means designing for mobile screen first and using min-width media query to create desktop view screen. We use media query with min-width of 500px to override CSS properties to create desktop view.


3. What does font-size: 62.5% in the html tag do for us when using rem units?
   When we put font-size: 62.5%  in html our design becomes responsive across all the screen and we can use  the formula (10px ===1rem).

4. How would you describe preprocessing to someone new to CSS?
  Preprocessing means converting one form of data to another. There are dynamic languagues like LESS which converts to CSS used by websites. Dynamic language like LESS provided much more features and allow changes on the run by compiling to a updated CSS. Preprocessing allows fragmentation of files which allows readability and easy for developers to fix bugs and write codes.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

   Usage of mixins  and  fragmenting everything in less file makes things clean and understandable  hence those are my most favourite concept .I don't  think so any of the concept gives me trouble.