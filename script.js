function noDigits(event) {
    if ("1234567890".indexOf(event.key) != -1)
        event.preventDefault();
}
function onlyDigits(event) {
    if ("1234567890+".indexOf(event.key) == -1)
        event.preventDefault();
}
function validateForm() {
    var a = document.forms["Form"]["userName"].value;
    var b = document.forms["Form"]["userPhone"].value;
    if (a == null || a == "" || b == null || b == "") {
        alert("Необходимо заполнить все поля ввода");
        return false;
    }
}

const popupLinks = document.querySelectorAll('.popup-link');

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}


const popupCloseIcon = document.querySelectorAll('.popup-close');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    curentPopup.classList.add('open');
    curentPopup.addEventListener("click", function (e) {
        if (!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup'));
        }
    });
}

function popupClose(curentPopup) {
    curentPopup.classList.remove('open');
}


let menuBtn = document.querySelector('.header__menu-mobile-icon');
let menu = document.querySelector('.header__menu-mobile');
menuBtn.addEventListener('click', function () {
    menu.classList.add('active');
})

let menuCloseBtn = document.querySelector('.header__menu-mobile-close');
menuCloseBtn.addEventListener('click', function () {
    menu.classList.remove('active');
})
