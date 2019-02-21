const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// @ts-ignore
exports.testOne = functions.https.onRequest((req, res) => {
  res.send("Hello vchain.us");
});

// @ts-ignore
exports.testTwo = functions.https.onRequest((req, res) => {
  res.send("Hellooo vchain.us");
});

// @ts-ignore
exports.countTasks = functions.https.onRequest((req, res) => {
  let db = admin.database();
  let ref = db.ref("/tasks");

  // @ts-ignore
  ref.once("value", function(snapshot) {
    let count = snapshot.numChildren();
    res.status(200).json({ count: count });
  });
});
