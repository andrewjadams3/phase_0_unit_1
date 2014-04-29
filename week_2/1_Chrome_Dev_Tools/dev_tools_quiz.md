#### Include an inline screenshot of your codeschool's points from the profile page:

![Code School Points](http://i.imgur.com/KjrySYp.png "Code School Points")

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS
    * **Elements**: The elements tab shows a representation of the DOM, and users can edit/add attributes. The CSS for each element can also be viewed and modified to the right.
  * Javascript Debugging
    * **Sources**: The sources tab shows you all the scripts that are running on a page, as well as where any exceptions have occurred.
  * Performance Optimization
    * **PageSpeed**: When installed, the PageSpeed tab will run an analysis on the current page and provide suggestions for improving performance.

* What's the quick key for your OS to spawn the Dev Tools inspector?
  * **Option-Command-I**

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
    * **#0b0f11**
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
* **Screenshot**: ![Postmachina screenshot](http://i.imgur.com/DoHuoy2.png "Postmachina screenshot")

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
  * **You can!!** Inside the main div, there is a paragraph that contains this text, but the text-indent is set to -9999 in the CSS file so it is not shown on the page. If you disable this in devtools, the text appears over the background image. However, you cannot change the large text that is visible by default because it is part of a background image that is set in the CSS file.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website?
    * **92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png**
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
    * **Network Tab**: Open this tab, and hit shift-refresh to reload the page. Sort by size. The largest image listed above is 316kb.

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?
  * **Optimize Images**: Optimizing just one image could save around 80KiB. There is a loooong list of images that should be compressed that would save much more than that in the long run.