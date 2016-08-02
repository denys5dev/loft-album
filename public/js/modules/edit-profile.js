var btnSave = document.querySelector("#btn_save_modal"); // добавил к кнопке этот ID

btnSave.addEventListener("click", saveEditProfile);


function saveEditProfile() {
  var  // переменные для ввода
    firstName = document.querySelector("#user_name"),
    lastName = document.querySelector("#user_surname"),
    userAbout = document.querySelector("#user_about"),
    // ссылки
    socialVK = document.querySelector("#social__vk"),
    socialFB = document.querySelector("#social__fb"),
    socialEmail = document.querySelector("#social__email"),
    socialTW = document.querySelector("#social__tw");
}
