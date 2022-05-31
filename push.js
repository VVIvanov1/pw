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
    "https://fcm.googleapis.com/fcm/send/cVFM8Y8N9dw:APA91bG-nIZJS8VZyn_7uGbGAiGMam8x_kym6Wx-7S3fAA8nt2OOA_lQmau6kVWTbg6DfTLyn4FpzPhs9c3cq1DVoaIhjTk7HmNzYzvRTTv3P7nl-7BgEaCg9hw82S0QAMwzpLzTn_2t",
  expirationTime: null,
  keys: {
    p256dh:
      "BOyndrhvvRP3ra5CzVCtfd3bTB8vEIy9CpP36E4lCHing333xdkwADMKB7ukFCK-ri0CnGbzuVHEeysPZ7cshGk",
    auth: "hb7QqZ3c4JJGObVRXnQmoQ",
  },
};

push.sendNotification(sub, "KMON!");
