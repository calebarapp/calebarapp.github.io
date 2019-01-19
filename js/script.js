//Navigation---------------------------------------------------------------------------------
window.onload = function menu() {

    function dropDown() {
        document.getElementById('dropdownMenu').classList.toggle("dropdown__menu--triggered");
        document.getElementById('dropdownButton').classList.toggle("dropdown__button--triggered");
        document.getElementById('buttonTop').classList.toggle("top--triggered");
        document.getElementById('buttonMid').classList.toggle("mid--triggered");
        document.getElementById('buttonBottom').classList.toggle("bottom--triggered");
    }

    function exitButtonColorChange() {
        document.getElementById('buttonTop').classList.toggle("menuItemHovWhite");
        document.getElementById('buttonMid').classList.toggle("menuItemHovWhite");
        document.getElementById('buttonBottom').classList.toggle("menuItemHovWhite");
    }

    //transitions exit button to white when hovering on the first menu item-----------
    document.getElementById("menuItemFirst").addEventListener("mouseover", exitButtonColorChange);
    document.getElementById("menuItemFirst").addEventListener("mouseout", exitButtonColorChange);
    //---------------------------------------------------------------------------------

    document.getElementById('dropdownButton').addEventListener('click', dropDown);

    //----Disables highlight-------------------------------------------------------
    function disableSelect(el) {
        if (el.addEventListener) {
            el.addEventListener("mousedown", disabler, "false");
        } else {
            el.attachEvent("onselectstart", disabler);
        }
    }

    function enableSelect(el) {
        if (el.addEventListener) {
            el.removeEventListener("mousedown", disabler, "false");
        } else {
            el.detachEvent("onselectstart", disabler);
        }
    }

    function disabler(e) {
        if (e.preventDefault) { e.preventDefault(); }
        return false;
    }

    disableSelect(document.getElementById('buttonTop'));
    disableSelect(document.getElementById('buttonMid'))
    disableSelect(document.getElementById('buttonBottom'));

    disableSelect(document.getElementById('dropdownMenu'));
    disableSelect(document.getElementById('dropdownButton'));

    disableSelect(document.getElementById('leftArrowBox'));
    disableSelect(document.getElementById('rightArrowBox'));
    disableSelect(document.getElementById('exitModal'));

}
//End navigation-------------------------------------------------------------------------------

//Modal navigation----------------------------------------------------------------------------------------

document.getElementById("rightArrowBox").addEventListener("mouseover", function () {
    document.getElementById("rightArrow").style.fill= "white";
})

document.getElementById("rightArrowBox").addEventListener("mouseout", function () {
    console.log(document.getElementById("rightArrow").style.fill);
    document.getElementById("rightArrow").style.fill = "black";
})

document.getElementById("leftArrowBox").addEventListener("mouseover", function () {
    console.log("test");
    document.getElementById("leftArrow").style.fill = "white";
})


document.getElementById("leftArrowBox").addEventListener("mouseout", function () {
    console.log(document.getElementById("rightArrow").style.fill);
    document.getElementById("leftArrow").style.fill = "black";

})

document.getElementById("modalExit").addEventListener('click', function () {
    document.getElementById("modalContainer").style.display = "none";
});

//modal dropdown select----------------------------------------------------

document.getElementById("modalMessages").addEventListener('click', function () {
    document.getElementById("modalContainer").style.display = "block";
    //sets modal to first content object
    content.imgArr = message.imgArr;
    content.description = message.description;
    document.getElementById("modalDescription").innerHTML = content.description;
    document.getElementById("modalImg").src = content.imgArr[contentIndex];
});

document.getElementById("modalCalendar").addEventListener('click', function () {
    document.getElementById("modalContainer").style.display = "block";
    //sets modal to first content object
    content.imgArr = calendar.imgArr;
    content.description = calendar.description;
    document.getElementById("modalDescription").innerHTML = content.description;
    document.getElementById("modalImg").src = content.imgArr[contentIndex];
});
//Modal content-----------------------------------------------------------
let contentIndex = 0;

let content = {
    imgArr: [], 
    description: ""
};

document.getElementById("leftArrowBox").addEventListener("click", function () {
    if (contentIndex == 0) {
        contentIndex = (content.imgArr.length -1);
    } else {
        contentIndex--
    }
    document.getElementById("modalImg").src = content.imgArr[contentIndex];
})

document.getElementById("rightArrowBox").addEventListener("click", function () {
    if (contentIndex == (content.imgArr.length - 1)) {
        contentIndex = 0;
    } else {
        contentIndex++
    }
    document.getElementById("modalImg").src = content.imgArr[contentIndex];
})
//Modal=================================================================================

let message = {
    imgArr: ["../img/messages-inbox.png","../img/MessagesView.png"],
    description: `Implementation of a user messaging system. To achieve this I altered 
    the existing Entity model to store a list of recipients as a Json string.
    The controller method performs a query of all messages and checks if your name is on the recipient list.
    A list of all of your messages is then passed to the view and presented to the user.`
    };
let calendar = {
    imgArr: ["../img/Calendar-View.png", "../img/Calendar-Controller.png", "../img/Calendar-Js.png","../img/Calendar-Ui.png"] ,
    description: `Implementation of a calendar interface using FullCalender.js that displays Work
    days in a work schedule. To do this I queried the database for the schedule and passed those models
    to the view. I then used javascript to parse the models and populate the calendar.`
};

let login = {
    img: ["../img/Login-View.png","../img/Login.png"],
    description: `Utilization of MVC's Authentication Scaffolding to add login functionality to The Home View.
This required me to seperate the relevant controllers from MVC's Authentication scaffold and modify them 
to work with our existing home page. I then adapted our Home view to be compatible with the new controllers.`
};
