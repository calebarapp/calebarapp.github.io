//Navigation---------------------------------------------------------------------------------
var isADropDownActive = false;
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
    disableSelect(document.getElementById('modalExit'));

}
//End navigation-------------------------------------------------------------------------------

//projects dropdown toggles---------------------------------------------------------------------


document.getElementById("techAcadDropDownButton").addEventListener("click", techAcadDropDown);
document.getElementById("scheduleDropDownButton").addEventListener("click", scheduleDropDown);
function techAcadDropDown() {
    //make modal appearFirst.
    document.getElementById("techAcadDropDownButton").classList.toggle("dropdown-top--activated");
    document.getElementById("techAcadOne").classList.toggle("dropdown-middle--activated");
    document.getElementById("techAcadTwo").classList.toggle("dropdown-bottom--activated");
}
function scheduleDropDown() {
    document.getElementById("scheduleDropDownButton").classList.toggle("dropdown-top--activated");
    document.getElementById("modalMessages").classList.toggle("dropdown-middle--activated");
    document.getElementById("modalPayPeriod").classList.toggle("dropdown-middle--activated");
    document.getElementById("modalCalendar").classList.toggle("dropdown-bottom--activated");
}


//Modal navigation----------------------------------------------------------------------------------------

document.getElementById("rightArrowBox").addEventListener("mouseover", function () {
    document.getElementById("rightArrow").style.fill= "white";
})

document.getElementById("rightArrowBox").addEventListener("mouseout", function () {
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
    document.getElementsByTagName("BODY")[0].classList.remove("stop-scrolling");

});

//modal dropdown select----------------------------------------------------

document.getElementById("modalMessages").addEventListener('click', function () {
    document.getElementById("modalContainer").style.display = "block";
    document.getElementsByTagName("BODY")[0].classList.add("stop-scrolling");
    //sets modal to first content object
    content.imgArr = message.imgArr;
    content.labelArr = message.labelArr;
    content.description = message.description;
    document.getElementById("modalDescription").innerHTML = content.description;
    document.getElementById("modalImg").src = content.imgArr[contentIndex];
    document.getElementById("modalLabel").innerHTML = content.labelArr[contentIndex];
});

document.getElementById("modalCalendar").addEventListener('click', function () {
    document.getElementById("modalContainer").style.display = "block";
    document.getElementsByTagName("BODY")[0].classList.add("stop-scrolling");
    //sets modal to first content object
    content.imgArr = calendar.imgArr;
    content.labelArr = calendar.labelArr;
    content.description = calendar.description;
    document.getElementById("modalDescription").innerHTML = content.description;
    document.getElementById("modalImg").src = content.imgArr[contentIndex];
    document.getElementById("modalLabel").innerHTML = content.labelArr[contentIndex];
});
document.getElementById("modalPayPeriod").addEventListener('click', function () {
    //sets modal to first content object
    content.imgArr = payPeriod.imgArr;
    content.labelArr = payPeriod.labelArr;
    content.description = payPeriod.description;
    document.getElementById("modalDescription").innerHTML = content.description;
    document.getElementById("modalImg").src = content.imgArr[contentIndex];
    document.getElementById("modalLabel").innerHTML = content.labelArr[contentIndex];
    document.getElementById("modalContainer").style.display = "block";
    document.getElementsByTagName("BODY")[0].classList.add("stop-scrolling");
});
//Modal content-----------------------------------------------------------
let contentIndex = 0;

let content = {
    imgArr: [], 
    labelArr: [],
    description: ""
};

document.getElementById("leftArrowBox").addEventListener("click", function () {
    if (contentIndex == 0) {
        contentIndex = (content.imgArr.length -1);
    } else {
        contentIndex--
    }
    document.getElementById("modalImg").src = content.imgArr[contentIndex];
    document.getElementById("modalLabel").innerHTML = content.labelArr[contentIndex];
})

document.getElementById("rightArrowBox").addEventListener("click", function () {
    if (contentIndex == (content.imgArr.length - 1)) {
        contentIndex = 0;
    } else {
        contentIndex++
    }
    document.getElementById("modalImg").src = content.imgArr[contentIndex];
    document.getElementById("modalLabel").innerHTML = content.labelArr[contentIndex];

})
//Modal=================================================================================

let message = {
    imgArr: ["../img/messages-inbox.png", "../img/MessagesView.png","../img/Messages-Model.png"],
    labelArr: ["Messages Inbox Controller","Messages Inbox View","Messages recipient list property and method."],
    description: `Implementation of a user messaging system. To achieve this I altered 
    the existing Entity model to store a list of recipients as a Json string.
    The controller method performs a query of all messages and checks if your name is on the recipient list.
    A list of all of your messages is then passed to the view and presented to the user.`
    };
let calendar = {
    imgArr: ["../img/Calendar-View.png", "../img/Calendar-Controller.png", "../img/Calendar-Js.png", "../img/Calendar-Ui.png"],
    labelArr: ["Calendar View","Calendar Controller","Calendar Javascript", "Calendar UI"],
    description: `Implementation of a calendar interface using FullCalender.js that displays Work
    days in a work schedule. To do this I queried the database for the schedule and passed those models
    to the view. I then used javascript to parse the models and populate the calendar.`
};

let payPeriod = {
    imgArr: ["../img/PayPeriod-View.png", "../img/PayPeriod-Controller.png"],
    labelArr: ["PayPeriod view","PayPeriod details controller"],
    description: `Pay period details view for administrators. 
    This view displays every day worked for each user and their total hours for the pay period.
    I queried the data base for all work days within a certain pay period and seperated them by user. In the view 
    I displayed each of the pay period ViewModels returned from the controller. `
};
