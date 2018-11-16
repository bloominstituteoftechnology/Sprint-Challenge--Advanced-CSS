1. Adaptive design uses a collection of discrete layouts to create specific browsing experiences targeted at specific devices. Responsive design takes a broader approach that scales regardless of the user's device.

2. Mobile-first means the organizational structure is designed primarily to be used on a phone, meaning it ought to be compact and navigable without unduly complex menus, and scaling it up to a desktop version doesn't really change that. Desktop-first allows for more complexity in structure and graphical layouts but requires you to find a way to truncate all that for use on a phone.

3. It makes the math easier. Rem is a scalar font unit based on user settings. The base font size is 16 pixels, and setting the font size to 62.5% reduces that to 10 pixels, making 1 rem roughly equivalent to one pixel.

4. Preprocessing is like delegating communication to a subordinate. You tell the preprocessor what you need, and the preprocessor tells CSS in more detail.

5. I like the idea of parametric mixins just because I've found specific things I've needed to do for the designs so far that don't fit super neatly into the standard CSS syntax so it's relatively easy to write one that behaves more intuitively to me. I have struggled with nesting. It's not confusing conceptually but in practical terms I've had some trouble keeping brackets straight and accidentally creating specificity conflicts.