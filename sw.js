self.addEventListener("push", (e) => {
  console.log(e);
  e.waitUntil(self.registration.showNotification("test message", {}));
});
