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
    "https://fcm.googleapis.com/fcm/send/f32iX3u8NTk:APA91bHD-c8hpw8lZ-ByFlywZtg8N37wPXDisGm3EnlWxUlh4G38aIwQ-uWXFrCKIuvois_LRXvbFWEjRx8_-owIZwKCaKWAtJ6asHhsijdWc5nW3WvfN15kIcwGUundadNaVz7v7vZr",
  expirationTime: null,
  keys: {
    p256dh:
      "BNIxG626jwAlgUiiifWvC_M6BwMJDt8eUvJDMffk46cbw8Ho5JXZPF0UHH3YKI-7TonOw2ThJ0Y2_8_u3YFa__s",
    auth: "4zkVZAsyG-RRLXfQ_HJx_Q",
  },
};

push.sendNotification(sub, "test message");
