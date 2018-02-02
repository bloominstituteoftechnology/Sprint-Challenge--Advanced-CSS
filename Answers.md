# Sprint Challenge - Responsive Less
1. A CSS preprocessor is a scripting language that extends CSS and is compiled into regular CSS syntax. A browser can only understand CSS, which at times may not be enough to write clean and reusable rules. Using only CSS, the designer/developer is not able to reuse a collection of rules in multiple selectors which had unclear pieces of data across a stylesheet. To overcome most of these limitations, the concept of a preprocessor was created. It offered an advanced way of writing CSS that extends the basic functionalities. This advanced code is later compiled as normal CSS code that the browser will understand.
2. The command in node package manager (npm) to install LESS globally on your computer is: 
<ul>npm install -g less</ul>

3. An example of a mixin I used in this week's project is :
<ul>
.round-borders { <br>
  border-radius: 5px;<br>
  -moz-border-radius: 5px;<br>
  -webkit-border-radius: 5px;<br>
}</ul>

4. Fixed websites have a set width, and resizing the browser or viewing it on different devices won’t affect on the way the website looks. This can require horizontal scrolling and a site that doesn’t look good on tablets or smartphones. Fluid websites are built using percentages for widths. As a result, columns are relative to one another and the browser, allowing it to scale up and down fluidly. Adaptive websites introduce media queries to target specific device sizes, like smaller monitors, tablets, and mobile. Responsive websites are built on a fluid grid and use media queries to control the design and its content as it scales down or up with the browser or device.
5. We need to integrate a max-width when we code responsive sites to make sure the content within a particular container is never displayed wider than its parent container.