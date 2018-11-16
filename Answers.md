What is the difference between an adaptive website and a fully responsive website?

A: Adaptive preselects template from server based on device while responsive has 1 template that changes based on rules.
----

Describe what it means to be mobile first vs desktop first.

A:Desktop first means planning primarily for the desktop first so most of the css is based on ~1100px+. Then you deal with smaller devices by testing max-width within a media query going large to small. Mobile first is the inverse... develope first for device then test min-width going up 800px to ~1100px.
----


What does font-size: 62.5% in the html tag do for us when using rem units?

A:Its just a trick to make it easier to convert rem to px. 1rem = 10px
---


How would you describe preprocessing to someone new to CSS?

A:Preprocessing is CSS that first needs to be parsed by javascript. It adds extra feature functions, variables and a lot more cool stuff.
---

What is your favorite concept in preprocessing? What is the concept that gives you the most trouble?

A:I think it all is great. The import lets me make modularized code easier and then bundles it all into index.less -> index.css, variables are good, it even has when loops. Nothing is really that confusing but then again I didnt get to dig into the docs in depth yet.
----