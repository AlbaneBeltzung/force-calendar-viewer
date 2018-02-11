
var groupList;
$.getJSON("groups.json", function(json) {
    groupList = json;

    fillGroupList();
});

function fillGroupList(){
    console.log("My Group List: ", groupList);

    // Fills up the select options
    var select = document.getElementById('group-selection');
    for(var i = 0; i < groupList.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = groupList[i].name;
        opt.value = groupList[i].name;
        select.appendChild(opt);
    }

    // checks if there is a group that has been selected
    var activeGroup = select.options[select.selectedIndex].value;
    console.log("active ", activeGroup);

    // adds a new group card to the calendar view if selected
    if(activeGroup){
        var selectionCard = document.createElement("div");
        selectionCard.classList.add('selection-card');

        selectionCard.innerHTML = '<i onclick="this.parentNode.parentNode.removeChild(this.parentNode);" class="group-remove fas fa-times fa-xs"></i>';

        var selectionCardEntry = document.createTextNode(activeGroup);
        selectionCard.appendChild(selectionCardEntry);
        document.getElementById('groups').appendChild(selectionCard);
    }
}

/*
$(document).ready(function(){


    $.ajax({
        url: "http://localhost:8888/groups",
        type: "GET",
        dataType: "jsonp",
        jsonpCallback: "Groups",
        data: {

        },
        success: function(data){
            console.log("yay");

        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log("no");

        }
    });


});
*/