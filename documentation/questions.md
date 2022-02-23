# Technical Questions

## How can you guarantee 100% uptime for your application?

Answer: Deploying the application to a network of servers such as a CDN would account for servers going down with caching. In reality all services can only garenty 99.9% uptime.

## What would you do to scale up this application to handle 10,000 requests a second?

Answer: Breaking the UI down into microservices would allow each concern to be isolated and all resources allocated to a single business subdomain. The todo application could be broken down into the create, update and delete actions. CDN for caching allows for caching close to request location.

## How would you record stats about user activity? (eg. Logins, to-do items created and completed.)

Answer: Google analytics, Google Tags and Hotjar would help track a user's actions.

## How can this task be split apart to be done as efficiently as possible by a team of developers?

Answer: Seperate this project by technology and front-end/back-end.

## What technology stack do you choose for your proposed solution, and why?

Answer: My solution is built in React using Typescript. Using these two in conjunction reduces the error rate while in development. Using strict typing ensures the correctness of input and output of functions.

## How will you deploy your solution?

Answer: CI/CD with actions running build and tests. If all complete correctly the project can then be pushed to a hosting platform.

## How will you ensure that user data is secure?

Answer: The first consideration is to keep as little as possible of the user data stored in the front-end application. 
Ensure all data is transferred over a secure HTTPS network.
Keep all authentication business logic in the auth API.

## What potential risks can you see during the development and deployment of this system?

Answer: Any handling of user data. In this case, a person's tasks can be at risk if cached in the front-end application.
The task list was implemented without an upper limit on the number of tasks a person can have. This could lead to malicious behavior of a person creating an infinite amount of tasks and filling up storage. The no-limit could also lead to a slower response time for UX as the system needs to iterate through the tasks to update or delete a task.

## Is there anything you think the requirements have overlooked?

Answer: As the consumption of an API is a big part of front-end web development I believe needing to utilize one would be a good example of skills.
