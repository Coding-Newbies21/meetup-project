const router = require("express").Router();
const Event = require("../models/Event.model");
const User = require("../models/User.model");
const fileUploader = require('../config/cloudinary.config');
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");


router.get("/events", (req, res, next) => {

  Event
    .find()
    .then(eventsFromDB => {
      const data = {
        eventsArr: eventsFromDB // stored in a obj with name data that we have from DB
      }
      console.log("DATA", data)
      res.render("events/event-list", data) // we are passing booklist from DB to our view
    })
    .catch((error) => {
      console.log("Error getting list of events from DB", error);
      next(error);
    });

});

router.get("/events/user-events", isLoggedIn, (req, res, next)=>{
  res.render("users/user-events")
})

router.get("/events/create", isLoggedIn, (req, res, next) => {
  res.render("events/event-create");

});


router.post("/events/create", isLoggedIn, (req, res, next) => {

  const { title, description, category, image } = req.body;
  const organiser = req.user._id;

  const data = {
    title,
    description,
    category,
    organiser,
    image,
  }

  Event.create(data)
    .then((data) => {
      res.redirect("/events")
    })
    .catch((error) => {
      console.log("Error creating the event", error);
      next(error);
    })
})

router.get("/events/:eventId", isLoggedIn, (req, res, next) => {
  Event.findById(req.params.eventId)
    .populate('organiser')
    .then((eventFromDB) => {

      res.render("events/event-details", eventFromDB)
    })
    .catch((error) => {
      console.log("Error getting event details from DB", error);
      next(error);
    })
})

router.get('/events/:eventId/edit', isLoggedIn, (req, res, next) => {
  const { eventId } = req.params;
  Event.findById(eventId)
    .populate('organiser')
    .then(eventToEdit => {
      res.render("events/event-edit", eventToEdit)
    })
    .catch((error) => {
      console.log("Error updating details", error);
      next(error);
    })

});

router.post("/events/:eventId/edit", isLoggedIn, (req, res, next) => {

  const { title, description, category } = req.body;

  const newDetails = {
    title,
    description,
    category
  };

  Event.findByIdAndUpdate(req.params.eventId, newDetails, { new: true })
    .then((evFromDB) => {

      res.redirect('/events');
    })
    .catch((error) => {
      console.log("Error updating details", error);
      next(error);
    })
});

router.get("/events/other-events", (req, res, next) => {
  res.redirect("/events")

});

router.post("/events/:eventId/delete", isLoggedIn, (req, res, next) => {
  Event.findByIdAndRemove(req.params.eventId)
    .then(() => {
      res.redirect('/events');
    })
    .catch((error) => {
      console.log("Error deleting details from DB", error);
      next(error);
    })
})
module.exports = router;