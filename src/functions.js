const admin = require("firebase-admin");
const functions = require("firebase-functions");
const appServer = require("../server");

admin.initializeApp();

const app = functions.https.onRequest(appServer);

exports.app = app;
