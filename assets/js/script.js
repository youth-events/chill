// push
function start () {
	Push.create("Уведомление от chill-vn", {
		body: "Новое мероприятие 16_07_2023",
		icon: 'https://youth-events.github.io/chill/images/coffee_icon.png',
		timeout: 4000
	});
}
document.querySelector('#btn').addEventListener('click', () => start());


//
// function notifyMe () {
//   var notification = new Notification ("Уведомление от chill-vn", {
//     tag: "ache-mail",
//     body: "Новое мероприятие намечается",
//     icon: "https://youth-events.github.io/chill/images/coffee_icon.png"
//   });
// }
//
//
//
// function notifset () {
//   if (!("Notification" in window))
//   alert ("Ваш браузер не поддерживает уведомления!");
//   else if (Notification.permission === "granted")
//   setTimeout(notifyMe, 2000);
//   else if (Notification.permission !== "denied") {
//     Notification.requestPermission (function (permission)) {
//       if (!('permission' in Notification))
//       Notification.permission = permission;
//       if (permission == "granted"),
//       setTimeout(notifyMe, 2000);
//     });
//   }
// }
