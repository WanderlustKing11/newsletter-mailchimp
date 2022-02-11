# newsletter-mailchimp
Newsletter app powered by Mailchimp's API

Used HTML5, CSS, Bootstrap, JavaScript, Node, Express

Takes clients/users inputted data in our landing page and adds them as new subscribers in our Mailchimp database.

This program runs on Node, so you will have to install and follow directions below. Also, I do not provide API Key. Sign up at Mailchimp now and create an account to get API Key.

## How to run

- Node will have to be installed for this to work.
- Once you have Node, inside your command line go to your directory that holds these files (assuming you downloaded the files and placed them in a folder).
- Type: npm init
- Hit Enter (yes) to all the defaults, which will create your JSON package inside of your directory.
- Install "Express": Still in the command line, Type: npm i express
- Install "body-parser": Type: npm i body-parser
- ("body-parser" is depreciated, might no longer be required)
- Install "request": Type: npm i request 
- ("request" is depreciated, might no longer be required)
- Type: node app.js
- Should get a return "Server is running on port 3000."
- Open your browser and type: localhost:3000

You should see the Sign-up page.

You can use this newsletter for yourself. If you already understand Node, then it should be really simple once you create your own account at Mailchimp, and then you will have a working newsletter.

Cheers!
