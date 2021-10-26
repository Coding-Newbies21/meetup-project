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
- [X] Event model (title, description, participants, organiser, category)

## Step 2: display a form to create an account

- [X] Route (GET `/register`) (inside `auth.routes.js`)
- [X] Create a view (`auth/register.hbs`)
- [-] Update `layout.hbs` and `style.css`

## Step 3: process the form and create an account

- [X] Route (POST `/signup`)
- [x] Generate the hash/digest
- [x] Query DB (`User.create()`)
- [x] Redirect to `/userProfile` (we created the view `users/user-profile.hbs` and a route GET `/userProfile` )



GOAL2: functionality to Create, Read, Update, and Delete Events

# Step 4: creating events

- [x] Route Get (‘/user-profile/events/event-create)
- [x] Route Post

# Step 5: reading events

- [x] Route Get (‘/user-profile/events/:eventId/event-details)


# Step 6: updating events

- [x] Route Get (‘/user-profile/events/:eventId/event-edit)
- [x] Route Post


# Step 7: deleting events
- [.] Route Get (‘/user-profile/events/:eventId/delete)


# Step 8: authorization

- [X] Only logged in users can create an event
- [-] Only organiser of the event can delete and edit the event



GOAL3: validation

## Step 9: validation

- [X] Basic Client-side validation (HTML required)
- [X] Some Server-side validation for the critical parts (ex. create account)

GOAL 4: functionality to login and log out

## Step 10: functionality to login

- [X] Add link to login (`layout.hbs`)

- [X] Route (GET `/login`)
- [X] View (`views/auth/login.hbs`)

- [X] Route (POST `/login`)
  - [X] Query DB (`User.findOne()`)
  - [X] Check credentials (`bcryptjs.compareSync`)
  - [X] If successful, redirect to `/userProfile`

- [X] Send information to the view and display it (ex. the username)
  `res.render('users/user-profile', { user });`


## Step 11: sesion persistance

- [X] Session persistance with `express-session` and `connect-mongo`

## Step 12: logout
- [X] Route (POST `/logout`)
- [X] Add button to nav menu


## Wishlist
- Image
- Like button
- Event Category from a list of choices (mongoose enum)
- Display username if logged in