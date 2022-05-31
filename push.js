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

push.sendNotification(sub, "test message");
