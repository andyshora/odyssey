FAQs
====


Why can't the navigation slide down on desktop?

- the structure of the markup required to implement the nav on mobile, enforces a certain order

Why aren't the bottom borders removed on the top menu items when the menu is open?






Things we need to go over
====

- Progressive enhancement
- Grid systems
- Scroll events
- Iconography and svg scaling

Why would JS not work?
===

There are many scenarios where the extra layers can fail to load or are deliberately filtered, which can be due to:

- temporary network errors
- DNS lookup failures
- server that the resource is found on could be overloaded or down, and fail to respond in  time or at all
- large institutions (eg banks and financial institutions, some government departments) having corporate firewalls that block, remove or alter content from the Internet
- mobile network providers resampling images and altering content so that load times faster and reduce bandwidth consumed
- antivirus and personal firewall software that will alter and/or block content


Designing navigation with progressive enhancement approach
===

- No-js design will layout navigation all together, everything visible.

- We can be sure critical elements are avaiable to the user almost immediately. For example, Google's search bar.

- The focus is on seeing the content without any issues, regardless of the device or browser.

- Whenever you're starting a new website project, you should first concentrate on the content structure. Then you can focus on how to present that content.

- The presentation level (CSS) should enhance the content and improve the user experience.



- Priority of enhancements:
	1. Collapse navigation, allow opening via hover/click events
	2. Add transitions to nav sections opening/closing
	3. Enable fixed positioning so nav sticks to top
	4. Enable toggling of fixed positioning on scroll events

	* Some of these enhancements should not be applied when a simple feature detection check has passed. Browser sniffing will probably have to occur, as some browser report false positives, for example for fixed positioning support.

- Questions:
	1. Is there a way to avoid a FOC before JS has loaded?

	If CSS transitions are supported (IE10+), we can add an opacity transition with a delay to the nav container, so if JS loads before the delay duration has elapsed, the nav will never appear.

	2. Why can't transitions be enabled on modern browsers?

	The design of the current navigation means that the structure cannot support the ordering (in the z-axis) required to make the header bar appear on top of the expanded navigation.

Approach
===

1. Look at the content available and how it should be organized. Create some wireframes for how you want to show the content, the placement of different elements, etc.

2. Prioritize them at this point, by what should appear closest to the top of the code (the most important elements) and what can go lower down. Make sure you set up your HTML code in the correct order, according to what’s most important. This isn’t necessarily going to coincide perfectly with the order in which things appear on your completed, styled website, but it probably won’t be too far off (header at the top, content in the middle, footer at the bottom). Tests should pass.

3. Design site normally and create CSS. All tests should still work without JS.
4. Add scripts to enhance content. All tests should work with and without JS.

Approach to Testing
===

- Test code with JS disabled, all functionality should still work.


Browser Support Examples
===

Fixed positioning - does not work on Android 4.1-, iOS7, IE7
CSS transitions - does not work on IE9


Hardware Accel + Memory Issues
===


References
===

http://www.webdesignerdepot.com/2010/08/a-complete-guide-to-progressive-enhancement/
