
1. What is the difference between an adaptive website and a fully responsive website?

Adaptive websites are actually not composed of a singular design that changes to the needs of the user; instead, they are composed of multiple layouts for multiple devices (for example, a 500px width layout for phones, an 800px layout for a generic tablet, etc.). In one way, this is cool, as every device lucky enough to have a pre-designed layout coded out for it has a user-friendly experience; of course, the downside is this is man-power consuming and it can never anticipate all the possible variants of phones, tablets, phablets, and huge desktop screens that exist out there.

A fully responsive site, however, has two advantages over an adaptive website. First, it is composed of just one responsive layout that is designed to have its viewport stretched and pulled by the webuser. This saves a tremendous amount of coding time and effort. Second, because it is fully flexible and incorperates (if done correctly) fluid design and media queries, it can deliver a very good performance and layout (if not perfect) for almost all devices on the planet. 
 

2. Describe what it means to be mobile first vs desktop first.

As the terms suggest, mobile first design is a design practice dedicated to making a responsive layout that can deliver a nice presentation, regardless of the screensize or viewport of the web user. Because layouts become cramped at smaller viewports (width being the major factor), most developers who make responsive layouts start with the mobile view first, working with the precious real estate on those smaller screens, and progressively flesh out the site so that the desktop version has the same site, just stretched out and (usually) easier to read. 

A desktop first design pattern disregards the above and has the designer and front-end engineer concentrate on a big, (at times "fixed" or static) website that does not easily stretch out or accomodate smaller screens. These sites usually have multiple layouts for multiple types of screens (although there are terrible instances where there is just one fixed site) in an "adaptive" setup, but this is progressively becoming outdated and old practice.

3. What does `font-size: 62.5%` in the `html` tag do for us when using `rem` units?

Decreasing the default font size in the html selector to 62.5% simply changes the default 16px font size to 10px. 1 rem unit equals whatever the default size of the font is in the html, which in this case is now 10px, making it very very easy to figure out how large a font should be in rem units. 

This is used in responsive websites to allow for quick font changes in media queries and the like, as the smaller the screen, the more a given font size fills it up. 

4. How would you describe preprocessing to someone new to CSS?

Preprocessing, in a nutshell, is a way for a front-end programmer to decrease how much code one has to write AND maintain for any given project, by allowing the programmer to use object oriented techniques, like variables and classes, to increase code reusuability. In short, it gives the designer way more tools to make css style sheets that are easier to maintain and allows the designer to use blocks of code, either in something called a "mixin" or a "variable", multiple times in a css file. By using an import system that allows the designer to import the css style sheets to a central "index.less/sass/etc", it allows for a cleaner way to quickly differentiate code from other code.

5. What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

My favorite concept is definitely the compiler watching over my code, and alerting me when I type in an exception or miss a semi-colon. Not going to lie, at first I hated it, and I hated Josh for being so gungho about it ("Wow its so great NO ITS NOT JOSH THIS IS FRUSTURATING AS HECK") (jk about hating josh hes a cool dude). But I quickly realized that this was a huge help, as before, I only realized my errors after about 5 minutes of laborous coding, only to realize that the site disappeared (or something dumb like that). With the less compiler watching the index.less, even if I try to save bad code, the compiler will full on stop it from actually compiling, and throw an error and tell me exactly what went wrong! That's great!

The hardest concept so far is trying to figure out how to use mixins and variables in a systematic way. I am sure this is because I have not had to make any site larger than 2 static pages yes, but I still cannot visualize how to use those elements in my code just yet. Hopefully I will get more practice in the near future.