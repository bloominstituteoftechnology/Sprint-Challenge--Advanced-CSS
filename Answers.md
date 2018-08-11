1. Responsive designs are harder but more flexable. They allow for screens of many sizes to load the content correctly where as adpative does not. So no matter the width of your screen the responsive site will form to it due to using percentages rather than fix widths that adaptive uses.

2. Desktop first is max-width, you start with the desktop site and build down. By being desktop first you are more worried about how your desktop site looks in comparison to mobile or tablet. Mobile first is min-width, you do the same as desktop except reverse. You build mobile up to desktop and are more worried about the mobile site in comparison to tablet or desktop.

3. Having your font-size set to 62.5 percent in the html selector sets all font to 10px, that way your rem is easier to set. So if you did 1.6rem it would be 16px.

4. Preprocessing is a way to use a compiler to create things that are not possible in standard CSS. Like variables, you can create a variable and add it to your CSS so that it can be quickly changed in the future if need be.

5. My favorite concept is mixins, I really like that I can set multiple values in the mixin with variables and be able to change them on the fly. With that being said, my biggest issue so far as been using the media variables like @media @mobile. I slipped up and forgot to add px to the variable which left me for a loop trying to figure out what I did wrong. Other than that LESS is pretty straight forward and I am not really having issues. I am going to start digging deeper into it as well when I have the time!
