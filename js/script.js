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
}
//End navigation-------------------------------------------------------------------------------

//projects dropdown----------------------------------------------------------------------------
//document.getElementById("dropDownBox").addEventListener("mouseover", function () {
//    console.log('test');
//    document.getElementById("dropDownButton").classList.add("projects__dropdown--active");
//    let dropdownList = document.getElementsByClassName("projects__dropdown-item");
//    for (let x = 0; x < dropdownList.length; x++) {
//        dropdownList[x].classList.add("projects__dropdown-item--active");
//    }
//});

//document.getElementById("dropDownBox").addEventListener("mouseout", function () {
//    document.getElementById("dropDownButton").classList.remove("projects__dropdown--active");
    
//})

//Modal----------------------------------------------------------------------------------------

document.getElementById("rightArrowBox").addEventListener("mouseover", function () {
    console.log("test");
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

document.getElementById("modal").addEventListener('click', function () {
    document.getElementById("modalContainer").style.display = "block";
});