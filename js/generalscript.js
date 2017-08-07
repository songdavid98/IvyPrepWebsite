"use strict";

//    This sets an href to the element
//    for onclicks
//    Parameters: String location.
//    Return: none.
function locationLink(locationstring) {
    location.href = locationstring;
}

//    This function searches all elements with classname, makes them invisible,
//    except makes visible the element with the idname
//    Parameters: String classname, String idname
//    Return: none
function swap(classname, idname) {
    var sameclass = document.getElementsByClassName(classname);
    for (var i = 0; i < sameclass.length; i++) {
        if (sameclass[i].id == idname) {
            sameclass[i].style.display = 'block';
        } else {
            sameclass[i].style.display = 'none';
        }
    }
}
// this is for clicable buttons on buttom
$(".myBox").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

//this is for the carousel
$('.carousel').carousel({
        interval: 4500
});
