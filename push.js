var push = require("web-push");

let vapidkeys = {
  publicKey:
    "BBtFGAArTqX2_C4mKoEvLdOpEyZ77NyyLYrTgTxWAXsFw1jCUrJ3lFyESXZ6nyJP3zbdKhXcOOSz1ixyEXR3MZA",
  privateKey: "TIFcZrhUjiKYc8T-h4RekHC-l5gUicpoosy-rtkh_eA",
};

push.setVapidDetails(
  "mailto:ivanov@gmail.com",
  vapidkeys.publicKey,
  vapidkeys.privateKey
);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dDEmR8f0RAI:APA91bHs7xs05pK0rOguY6aGJXjdtr93zFlDTesHDb31yg89dwytqz6KbcS1pkcZfX8Z4Yy9Q50OZH15aH3fYZBGvdeDdRK4zNeiOgC0-9AjGtCDnA6I3cJEhUv6aFfcJ83uaFtKWXjG",
  expirationTime: null,
  keys: {
    p256dh:
      "BM2SlnLoR9OIGkEEVcvngGlEnHe1lsUrtj2eLQjxrhorB9gAV-u2Gzc-_PPZSDeOszcJbImJaBRAgljqknjkLN0",
    auth: "y79nfF9QpDWQjPLYQGZrqA",
  },
};

push.sendNotification(sub, "test message");
