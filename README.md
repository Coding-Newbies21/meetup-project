Project 2

## Step 0: Initial SETUP (on Sunday)

- [X] npx ironhacker projectName --auth
- [X] Git init
- [X] Upload to GitHub
- [X] Give access
- [X] Clone, NO FORK
- [X] Create the following files:


GOAL1: allow users to create, and edit an account

## Step 1: Create the models
- [X] User model (name, email, password, guest, admin, manager)
- [X] Event model (title, description, participants, organisers, category)

## Step 2: display a form to create an account

- [X] Route (GET `/register`) (inside `auth.routes.js`)
- [X] Create a view (`auth/register.hbs`)
- [-] Update `layout.hbs` and `style.css`

## Step 3: process the form and create an account

- [] Route (POST `/signup`)
- [] Generate the hash/digest
- [] Query DB (`User.create()`)
- [] Redirect to `/userProfile` (we created the view `users/user-profile.hbs` and a route GET `/userProfile` )



GOAL2: functionality to Create, Read, Update, and Delete Events

# Step 4: creating events

- [] Route Get (‘/user-profile/events/event-create)
- [] Route Post

# Step 5: reading events

- [] Route Get (‘/user-profile/events/:eventId/event-details)

# Step 6: updating events

- [] Route Get (‘/user-profile/events/:eventId/event-edit)
- [] Route Post


# Step 7: deleting events
- [] Route Get (‘/user-profile/events/:eventId/delete)


GOAL3: validation

## Step 4: validation

- [] Basic Client-side validation (HTML required)
- [] Some examples of Server-side validation

GOAL 4: functionality to login and log out

## Step 5: functionality to login

- [] Add link to login (`layout.hbs`)

- [] Route (GET `/login`)
- [] View (`views/auth/login.hbs`)

- [] Route (POST `/login`)
  - [] Query DB (`User.findOne()`)
  - [] Check credentials (`bcryptjs.compareSync`)
  - [] If successful, redirect to `/userProfile`

- [] Send information to the view and display it (ex. the username)
  `res.render('users/user-profile', { user });`


## Step 6: sesion persistance

- [] Session persistance with `express-session` and `connect-mongo`


## Step 7: logout
- [] Route (POST `/logout`)
- [] Add button to nav menu


