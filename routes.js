const express = require("express");
const router = express.Router();
const rsvpObject = require("./models");

router.post("/addRSVP", [], async (request, response) => {
  console.log(request.body);
  const rsvp = new rsvpObject({
    name: request.body.name,
    uniqueCode: request.body.uniqueCode,
    isAttending: request.body.isAttending,
    mealChoice: request.body.mealChoice,
    isInterestedShuttle: request.body.isInterestedShuttle,
    isAllergic: request.body.isAllergic,
    restriction: request.body.restriction,
  });

  await rsvp.save();
  response.sendStatus(201);
});

router.get("/rsvps", [], async (request, response) => {
  const rsvpList = await rsvpObject.find({});
  const usedCodes = [];
  for (rsvp of rsvpList) {
    usedCodes.push(rsvp.uniqueCode);
  }
  response.json({ usedCodes });
});

module.exports = router;
