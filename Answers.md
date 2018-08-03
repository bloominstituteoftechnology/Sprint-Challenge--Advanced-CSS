1. A responsive website uses a layout that adapts to the screen it is being viewed on, for example through the use of percentages rather than fixed pixels. An adaptive website has multiple different
layouts and renders the appropriate one depending on what type of device is used. A responsive design is more flexible than any other type of layout but is also the most work to make.

2. The difference in design is that a desktop-first approach starts with the size of the desktop and the CSS works downward using max-width, so the code would move from something like an 880px desktop
down to a tablet with (max-width: 800px) and then to a phone with (max-width: 500px). This usually means that since the site is designed primarily for a desktop experience, some layout and interface
features are hidden on a mobile view. The goal is primarily to have a feature-rich desktop layout and a functional mobile layout. Mobile-first goes for a simpler general layout and uses progressive
enhancement to build larger layouts. In the CSS file this approach uses min-width and increases in size as the file goes on.

3. Since the rem unit is relative to the root (html) element as opposed to the em element which refers to only its parent, changing the font-size property in the html tag means that font size changes
with rem will be based on that 62.5% value. In this example 1rem equals 10 pixels as opposed to the default 16.

4. A preprocessor helps to eliminate repetitive CSS tasks by taking the specific preprocessor code and converting it into CSS when it needs to be used. Some constructs that we can use in LESS, such as
nesting certain elements or importing files, save quite a bit of time as opposed to writing them out in standard CSS. Preprocessing provides a middle man that takes our more convenient syntax and turns
it into standard CSS for a browser to render.

5. I like the power and potential of mixins, so I had fun messing around with certain elements to try and see where I could save the most time in a particular layout. My weakest area with Preprocessing
definitely came with mobile queries; I referenced my queries in the wrong file and spent too much time looking back and forth between files. I had a couple of mobile display issues that could also be
traced back to these queries.
