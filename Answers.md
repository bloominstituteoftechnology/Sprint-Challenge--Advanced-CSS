1. The main difference between an adaptive design and a fully responsive design is layout. An adaptive design will only have many layouts depending on the screen size.

A responsive design is one design layout that stretches or shrinks itself to give the best view of the website regardless of screen size.

2. The main difference between mobile first and desktop first design is the way you approach the code. A mobile first design is where your initial code (no media query code) is based for the mobile design you want. Then the media queries go from smallest screen size using (min-width: #), to the largest screen size at the end.

The desktop first approach is the exact opposite. The initial code is for the desktop layout, and then the media queries use (max-width: #) going from largest screen size to smallest.

3. When setting html selector to font-size: 62.5%, it makes the default font-size on a base of 10px. So when using rem units, it will scale by 10px.

4. Preprocessing is an extension. CSS Preprocessing is a language that extends the CSS and gets compiled using a tool into regular CSS. It gives you the ability to create multiple files that go directly back to ONE CSS file. Creates less clutter and makes it easier for other developers to comprehend your styles.

5. The concept I love the most is being able to separate my styles into their own files. Creating less clutter, and creating clearer, more concise code. The only concept I have trouble with is making sure I nest sibling elements correctly.