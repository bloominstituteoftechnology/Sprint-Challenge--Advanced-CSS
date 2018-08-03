# Answers for Task 1

## 1. The Difference between an adaptive and a fully Responsive Website

Responsive web design provides an optimal view no mater what device is viewing it. Where ar adaptive web design implements several layouts each for a specified size / device profile using @media to give break points to the design.

Responsive web design requires a more stringent look at the css of the site and a great attention to ddetail is needed to give the user a fully responsive experience. Adaptive web design is concerned with a lower set of specification in such a way that it is easyer to design and develop as it can be as generic as having 1 or 2 break ponts for a desktop, tablet and mobile view of the website.

Responsive websites do load a little faster due to there only needing to be one layout loaded as opposed to an adaptive site requiring several layouts to load in to allow the break point scenareo.

## 2. Mobile first Vs Desktop First

Mobile first is the technique where we design the css to make the initial layout for mobile devices and then use @media to change to larger layouts such as tablet and desktop

Desktop first is the inverse of Mobile first in that we design the desktop layout in the css and then make @media query calls to change the layout as the devices get smaller.

## 3. font-size: 62.5% in the html tag

font-size: 62.5% in the html tag makes the dafault font size set at 10px so when we have to do the math for rem multiplication we just do rem * 10 = pixels. for instance 1.6rem = 16px in a standard browser setup. and this allows a uniform scaling to be done with browser settings and zooming.

## 4. Decription of preprocessing

Preprocessing in the terms of css is similar to any other preprocessing in that it takes the input of a less , scss, sass, ts file and then performs a transpile in to css. This is a process of parsing the file and turning it in to a css file that the browser can understand to style a website. Usually you would find use of preprocessing to simplify and streamline your workflow.