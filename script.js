var timeSlots = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];

$(".saveEvent").on("click", function() {
    var buttonPressed = $(this).val();
    alert("You pressed the " + buttonPressed + " Save Button.")
    
    switch(buttonPressed)
    {
        case "1":
            alert("You pressed the " + buttonPressed + " Save Button.")
            var textEntered = $(".textone").val();
            alert(textEntered);
            break;
        case "2":
            alert("You pressed the " + buttonPressed + " Save Button.")
            var textEntered = $(".textTwo").val();
            alert(textEntered);
            break;
        case "3":
            alert("You pressed the " + buttonPressed + " Save Button.")
            var textEntered = $(".textThree").val();
            alert(textEntered);
            break;
        case "4":
            alert("You pressed the " + buttonPressed + " Save Button.")
            var textEntered = $(".textFour").val();
            alert(textEntered);
            break;
        case "5":
            alert("You pressed the " + buttonPressed + " Save Button.")
            var textEntered = $(".textFive").val();
            alert(textEntered);
            break;
        case "9": 
            alert("You pressed the " + buttonPressed + " Save Button.")
            var textEntered = $(".textNine").val();
            alert(textEntered);
            break;
        case "10":
            alert("You pressed the " + buttonPressed + " Save Button.")
            var textEntered = $(".textTen").val();
            alert(textEntered);
            break;    
        case "11":
            alert("You pressed the " + buttonPressed + " Save Button.")
            var textEntered = $(".textEleven").val();
            alert(textEntered);
            break;    
        case "12":
            alert("You pressed the " + buttonPressed + " Save Button.")
            var textEntered = $(".textTwelve").val();
            alert(textEntered);
            break;
        
    }    
});

$(document).ready(function(){
    var currentDayEl = $("#currentDay");
    var currDate = moment().format('MMMM Do YYYY');
    var currDay = moment().format('dddd');
    currentDayEl.text(currDay + " , " + currDate);
 });
// loadTimeslots();

/*
function loadTimeslots() 
{
// Creating the div which will be the row
    var rowA = $("<div>");
    rowA.addClass("row");
    $(".container").append(rowA);
    console.log(rowA);
    alert("You have just done the row");
    var colDiv1 = $("<div>");
    colDiv1.addClass("col time-block");
    colDiv1.text(timeSlots[0]);
    $(".container").append(colDiv1);
    var colDiv2 = $("<div>");
    var textArea = $("<textarea>");
    colDiv2.addClass("col-sm-11");
    $(".container").append(colDiv2);
    $(".container").append(textArea);
    var colDiv3 = $("<div>");
    var saveButton = $("<button></button>");
    colDiv3.addClass("col");
    saveButton.addClass("saveBtn");
    saveButton.text("Save");
    $(".container").append(colDiv3);
    $(".container").append(saveButton);
    $(".container").append("</div>");
}

$(document).ready(function(){
    var currentDayEl = $("#currentDay");
    var datePortion = moment().format('MMMM Do YYYY');
    var dayPortion = moment().format('dddd');
    currentDayEl.text(dayPortion + " , " + datePortion);
    
 });

*/ 