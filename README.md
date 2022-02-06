# Mail App

## Story

A group of investors want to launch a new mail app.
They are searching for a front end developer who can make a quick prototype for the web client.
They already have the backend ready so this is your opportunity to show your skills!

## What are you going to learn?

- Working with cookies
- Authenticate by cookies
- Protect urls from access without authentication
- react routing
- react components

## Tasks

1. Create a navbar with 4 links: `SignUp`, `Login`, `Log OUT`, `Dashboard`
    - When the user clicks on the `SignUp` link the browser url is changed to `localhost:3000/#/register` and only the register form is shown
    - When the user clicks on the `Login` link the browser url is changed to `localhost:3000/#/login` and only the login form is shown
    - When the user clicks on the `Logout` link the browser url is changed to `localhost:3000/#/logout` and only the logout alert is shown
    - When the user clicks on the `Autumn Offer` link the browser url is changed to `localhost:3000/#/dashboard` and only dashboard alert is shown

2. When the user is on the `localhost:3000/#/register` route there is a form through which a new user can register by a `POST` fetch to the ulr `http://localhost:6789/login` with the body `{ mail: [mail], password: [password] }` where `mail` is the content from the `Enter mail` input box and `password` is the content from the `Password` input box
    - When a new user is registered successfully the entered email and password can be found inside the `back-end/db.json` file
    - The `Register` button is `disabled` if the password is less then `6` characters long and the content of the `Enter email` is empty

3. When the user is on the `localhost:3000/#/login` route there is a form through which an existing user can login by a `POST` fetch to the ulr `http://localhost:6789/login` with the body `{ mail: [mail], password: [password] }` where `mail` is the content from the `Enter mail` input box and `password` is the content from the `Password` input box
    - When entering the user `user1mail.com` and the password `lorem1` in the browser developer tools under the tab `Storage/Cookies (firefox)` or `Application/Cookies` (chrome) 2 cookies are set from the backend with the name `token` and `user`
    - When entering the user `user1mail.com` and the password `lorem1` the page route is changed to `http://localhost:3000/#/dashboard`
    - When the entering the user `user1mail.com` with the password `wrong_password` an error message with the text `Wrong User & Password` is displayed for 2 seconds after which it disappears

4. When the user navigates to the url `localhost:3000/#/logout` the cookies are cleared by making a `GET` fetch to `http://localhost:6789/logout`
    - After navigating to `localhost:3000/#/logout` in the browser developer tools under the tab `Storage/Cookies (firefox)` or `Application/Cookies` (chrome) the `user` and `token` cookies are deleted

5. When the user navigates to the url `localhost:3000/#/dashboard` without being logged in the url of the browser is automatically set to `localhost:3000/#/login`
    - After navigating to the url `localhost:3000/#/logout` when the user navigates to `localhost:3000/#/dashboard` the url of the browser is automatically redirected to `localhost:3000/#/login`
    - When navigating to the url `localhost:3000/#/login` and entering the user `user1mail.com` and the password `lorem1` the user is successfully redirected to the url `localhost:3000/#/dashboard`

6. The dashboard shows the email received for the logged in user via a `GET` fetch to `http://localhost:6789/mails`
    - The dashboard displays a welcome message to the logged in email address by reading the `user` cookie
    - When logging in with the email `user1mail.com` and password `lorem1` there are at least 3 emails received from the user `user2mail.com`.
    - The emails are displayed in a `bootstrap` table

7. The dashboard allows to send email via a `POST` fetch to `http://localhost:6789/mails` with the body `{ text: [email_subject], to: [email_sender], subject: [email_subject]}`
    - The dashboard has a bootstrap form where the user enters an email subject, description and sender.
    - When an email is sent to `user2mail.com` that email is received when `user2mail.com`, password `lorem2` logs in
    - When the email subject is longer then 10 characters the `send email` button is disabled

## General requirements

None

## Hints

- once you start the project you first need to install the react library with `npm install` inside the folder `front-end`
- once all the react libraries are installed, you can start the project with `npm start` inside the folder `front-end`
- you need to start the server if you want to get data from it
- you can do that by going into the `back-end` folder in a terminal and typing `npm install`
- once all the server libraries are installed, you can start the server with `npm start` inside the folder `back-end`

## Background materials

- <i class="far fa-exclamation"></i> [Reading cookies](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
- <i class="far fa-exclamation"></i> [Devtools cookies](https://developers.google.com/web/tools/chrome-devtools/storage/cookies)
- <i class="far fa-exclamation"></i> [React routes management](https://reactrouter.com/web/guides/quick-start)
- <i class="far fa-book-open"></i> [Web cookies overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- <i class="far fa-book-open"></i> [All about cookies](https://www.allaboutcookies.org/)
- <i class="far fa-book-open"></i> [Functional Components](https://www.robinwieruch.de/react-function-component#react-stateless-function-component)
- <i class="far fa-book-open"></i> [React Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
