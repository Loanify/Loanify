#Loanify

##Project Explaination
Loanify is a solution for General Assembly's Frontlines personal to keep track of loanable equipment. With Loanify, an employee can create new equipment entries, edit those entries and delete them. Employees can also check a piece of equipment out to a student or teacher for loan. Loanify will automatically send an email to the recipient as a reminder that they are in posession of GA property and when it should be returned. When a recipient returns an item, an GA employee can check the item back into the system.

##Github
[Github](https://github.com/Loanify/Loanify)

##Trello
[Trello](https://trello.com/b/M9OykCOz/loanify)

##Heroku
[Heroku](https://ga-frontlines-loanify.herokuapp.com)

##Installation
* Fork over and git clone on your local.
* Npm install.
* In another tab, release the mongod.
* In another tab, nodemon.
* In browser, type Localhost:3000.
* You can also visit the Heroku Link above
* Then, give us jobs.

##Technologies used
* Node.js
* Express
* MongoDB
* Mongoose
* Node Mailer
* Bootstrap
* Heroku
* Morgan
* Passport
* Cron

##Initial Start
* Started off with axure flow charts
* We then made our slack and trello board.
* Just added the user stories to trello.
* Then we tackled the schemas for our three models.
* Following that we researched node mailer and tried to understand how we would email students.
* All wireframes, flowcharts, and user stories can be seen in the Trello board link above.

##Unsolved Problems and hurdles
* cron-job functionality not working correctly. Marrying the functionality of Node Mailer with a Cron Job functionality proved unwieldy and difficult to think through. We got close, tho.
* Getting the main list functionality proved difficult. It took all four of us taking multiple approachs to get it working right, but we did!
* Node Mailer proved to be difficult as well, mostly because it caused us to create a redundency in how we collect data and how it's used in email situations. Something we may be able to solve in the future.

##General Approach
The overall approach to this project centered on the ability for the user to make and manage a list of equipement. All other functionalities hinge on the existence and operation of the list itself, so that was the most important piece. Each member was responsible for complete sets of functionality, however all of us provided support for getting the listing functionality up and running. Once that was completed, it was very clear how to break down additional goals.

