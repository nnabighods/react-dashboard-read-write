# Seeder React Dashboard
This is a project exploring React and Firebase using conditional rendering, nested routes, and protected routes. The firebase RTD has also been integrated.


## Install Scripts
``` npm
    npm start
```


## Conditional Rendering
With conditional rendering, we can change components based on whether or not a user is signed in.


## Nested Routes
In some cases, only a certain component within the page needs to be changed based on what is being requested by the user. Child inks can be nested within a parent link, adding onto the pre-existing path.


## Protected Routes
These pages can only be seen if a user is logged in using Firebase authentication. If they're not signed in, they're inaccessible and will lead the user to the login page.

## Read/write from Firebase RTD
The user can now view all products from the RTD and also upload products to the RTD along with product name, price, image, and description.

## What I learned
Adding onto the previous project, I feel more comfortable using React. Seeing how easily Firebase is integrated into the application is very satisfying. A prior mistake I made was not adding the redirects file to the public folder, which I made sure to do this time.
