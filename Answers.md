1. An adaptive website is optimized for specific breakpoints, but is designed rigidly to those breakpoints. A fully responsive website will look great through all display sizes due elements being set up so they can respond to all screen sizes, not just 2 or 3.

2. The big difference in how you code the site. Mobile first as the name implies starts with designing the mobile layout/styling, and then the media queries are set with min-width. Desktop first starts with styling the desktop first, and then uses max-width media queries to pare down to the mobile design.

3. Setting the font-size to 62.5% has the effect of making 1rem unit equal to 10p. Making the math much easier to convert px to rem.

4. Preprocessing allows you to write more powerful and concise CSS using slightly different syntax that is then put into a program called a compiler to convert the code to pure CSS.

5. I really like the simplicity of nested media queries. I struggled with misplacing a bracket during the last project. I can see how rushing to fix a problem and messing something like that up could cause a massive issue.