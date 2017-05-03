Competency Test
==============
A developer competency test to implement a basic user dashboard for a CMS. Frontend code is written in Typescript using Angular 2, and webpack to compile and deploy. Also includes a basic set of unit and e2e tests.

Installation
------------
Install angular-cli - this is best installed as a global dependency to make the necessary 'ng' commands available to your terminal:

`npm install -g angular-cli`

Also, having cloned the repo, cd into the app directory and install dependencies:

`cd app && npm install`

I've also included the server application which simulates the api endpoints (although you probably have your own version of this). If you wish to use the included version then cd into the 'api' directory and install dependencies:

`cd api && npm install`

Starting
--------
Start the api server if you need to by cd-ing into the api directory and running:

`node index.js`

And to start the app server, cd into the 'app' directory and run:

`ng serve`

(all subsequent commands listed should be executed from this directory)

Finally, navigate to the following url in your browser to view the app:

http://localhost:4200

Overview
--------
The application should implement all the features displayed in the example graphic, and works as I thought it should probably work, from the information provided - however, apologies if I have misinterpreted the information slightly.

It uses a component-based architecture, the dashboard header, file types and files list all being subcomponents of a larger dashboard component, which is itself a subcomponent of the main application component - this should easily allow further components / subcomponents to be added to implement new routes / features in future.

It has some basic configuration values for api endpoints, number of times to retry a failed request etc, which are located in app/src/config.json. The application will display a 500 error page if configured to not retry failed requests, or if the maximum number of retries has been exceeded.

Source code
-----------
Located in app/src/app

Contains typescript files, css and html files for each component, along with a spec file containing unit tests (see 'Testing' section). There are also classes to represent each data type (file, type, user), and a remote data service class for retrieving information from the api.

Testing
-------

The project contains a basic set of unit tests (using Jasmine, Karma etc) and end to end tests (using Protractor, webdriver etc).

To run unit tests, run the following command:

`ng test`

To run e2e tests, run the following command:

`ng e2e`

The unit tests, in particular, are not as comprehensive as I'd like - I did run into some difficulty instantiating subcomponents within the unit tests, due to their dependencies on parent components, so wasn't able to test all the areas I would have liked to, but I'm aware this is a shortcoming, and is something I'm going to go away and work on / figure out.

Tests for the RemoteDataService component use a mock backend (which supplies the same data each time) and tests the various endpoints, as well as slow responses etc ..
