const router = require("express").Router();
const Event = require("../models/Event.model");



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


router.get("/events/create", (req, res, next) => {
  res.render("events/event-create");
});


router.post("/events/create", (req, res, next) => {

  const { title, description, category } = req.body;

  console.log(req.body);
  Event.create({ title, description, category })
    .then(() => {
      res.redirect("/events");
    })
    .catch((error) => {
      console.log("Error creating the event", error);
    })
})



module.exports = router;