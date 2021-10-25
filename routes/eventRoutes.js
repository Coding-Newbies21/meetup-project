const router = require("express").Router();
const Event = require("../models/Event.model");
const User = require("../models/User.model");

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");


router.get("/events", (req, res, next) => {

 Event
    .find()
    .then(eventsFromDB => {
      const data = {
        eventsArr: eventsFromDB // stored in a obj with name data that we have from DB
      }

      res.render("events/event-list", data) // we are passing booklist from DB to our view
    })
    .catch((error) => {
      console.log("Error getting list of events from DB", error);
      next(error);
    });

});


router.get("/events/create", isLoggedIn, (req, res, next) => {
  res.render("events/event-create");
});


router.post("/events/create", isLoggedIn, (req, res, next) => {

  const {title, description, category, image } = req.body;
  const organisers = req.user._id

  const data = {
    title,
    description,
    category,
    organisers,
    image,
  }
  
  Event.create(data)
    .then(() => {
      res.redirect("/events");
    })
    .catch((error) => {
      //console.log("Error creating the event", error);
      res.re
    })
})



module.exports = router;