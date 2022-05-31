self.addEventListener("push", () => {
  self.registration.showNotification("Hello world!", {});
  console.log("it works from server");
  //   need check github
});
