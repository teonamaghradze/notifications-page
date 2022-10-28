const allRead = document.querySelector(".all-read");

const notificationBox = document.querySelectorAll(".person");

const notificationTxt = document.querySelectorAll(".unread");

const notificationAmount = document.querySelector(".num");

//to make everything UNREAD
allRead.addEventListener("click", () => {
  notificationBox.forEach((notif) => {
    notif.style.backgroundColor = "#fff";
    notificationAmount.innerHTML = "0";
    notificationTxt.forEach((txt) => {
      txt.classList.remove("unread");
    });
  });
});

//To reduce amount of notifications and styles for each notific
console.log(notificationTxt.length);
notificationTxt.forEach((txt) => {
  txt.addEventListener("click", () => {
    txt.classList.remove("unread");
    console.log(document.querySelectorAll(".unread").length);

    notificationAmount.innerHTML = document.querySelectorAll(".unread").length;
  });
});
