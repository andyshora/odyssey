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


Designing navigation with progressive enhancement approach
===

- No-js design will layout navigation all together, everything visible.
- Priority of enhancements:
	1. Collapsed navigation
	2. Transitions on nav sections
	3. Fixed positioning

- Questions:
	1. Is there a way to avoid a FOC before JS has loaded? If CSS transitions are supported (IE10+), we can add an opacity transition with a delay to the nav container, so if JS loads before the delay duration has elapsed, the nav will never appear.
	2. 




