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
}
//End navigation-------------------------------------------------------------------------------
//Experience page dropdown button 
// on dropdown click
document.getElementById('projectsDropDownButton').addEventListener('click', projectsDropDown);
document.getElementById('techAcadDropDownButton').addEventListener('click', techAcadDropDown);
// on mouseout
document.getElementById('projectsDropDown').addEventListener('mouseleave', clearDropdowns);
document.getElementById('techAcadDropDown').addEventListener('mouseleave', clearDropdowns);

//ons
function projectsDropDown() { 
    document.getElementById('projectsDropDownContainer').classList.toggle('button-dropdown__container--active');
    document.getElementById('projectsDropDownButton').classList.toggle('button-dropdown__item-top--activated');
}

function techAcadDropDown() { 
    document.getElementById('techAcadDropDownContainer').classList.toggle('button-dropdown__container--active');
    document.getElementById('techAcadDropDownButton').classList.toggle('button-dropdown__item-top--activated');
}

function clearDropdowns() { 
    document.getElementById('techAcadDropDownContainer').classList.remove('button-dropdown__container--active');
    document.getElementById('techAcadDropDownButton').classList.remove('button-dropdown__item-top--activated');
    document.getElementById('projectsDropDownContainer').classList.remove('button-dropdown__container--active');
    document.getElementById('projectsDropDownButton').classList.remove('button-dropdown__item-top--activated');
}

