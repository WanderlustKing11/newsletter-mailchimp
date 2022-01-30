# newsletter-mailchimp
Newsletter app powered by Mailchimp's API

Used HTML5, CSS, Bootstrap, JavaScript, Node, Express

Takes clients/users inputted data in our landing page and adds them as new subscribers in our Mailchimp database.

Right now the only thing you will see is the landing page, but will have to run with node (see Docs below). Full update coming soon.

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

You should see the Sign-up page. In the coming update this will be deployed with Heroku with an actual https. At that point, if you want to have access to the MailChimp API you will need to create a profile so that you can have your own API key, and then you'll have a working newsletter to communicate with all of your clients and followers.

Cheers!
