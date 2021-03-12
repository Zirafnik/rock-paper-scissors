# Rock, Paper, Scissors!

https://zirafnik.github.io/rock-paper-scissors/

I made this project as a way to learn and practice DOM manipulations with event listeners. I added many more features than initially planned and am extremely proud of the end product.

The additional features I added are: clear button, scrollbar, number of wins changer, print option and more. I managed to make the scrollbar follow down with the results with .scrollIntoView, as well as having the latest round color orange by toggling child classes.

While adding icons to buttons I ran into the problem of not getting the button values when clicked. Instead of having and img element in the button itself, I discovered it is a lot better to have the image set as background, as that way you are still clicking the actual button not the inserted image.

The clear button just iterates through all the child elements and removes them && resets all counters. If you continue playing without clearing, some of the counters reset, while some stay the same (like game counter).

The latest feature I added was the print function. It was very frustrating trying to make it work with vanilla JS and CSS, however I found a clever solution. The goal was to print only the result log, not the whole page. I managed to do that by hiding the visibility of all other elements except this log div when using window.print. The additional challenge I had to solve was how to make it print all the results not just one page, by making overflow visible.

Additional challenge was making the lines break while using .textContent to add text to child elements. I could've used more child elements instead of cramming all the text into one, but I managed to solve this problem by using '\r\n' and white-space:pre to break lines.
