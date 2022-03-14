
//vars to select sections in the html
var body = $('#body');
var header = $('#header-child');
var planner = $('#planner'); 
var mainChild = $('#main-child');
var insertPlanner = $('#insert-planner');
var insertTimes = $('#insert-times'); //this is the section where the times of day will be inserted.
var insertEntries = $('#insert-entries'); //this is the section where the newSection areas will be inserted.
var insertSaves = $('#insert-saves'); //this is the section where the save buttons will be inserted.
var newSection = $("<section>"); //made just in case it is needed later.

//TODO: make the save buttons store what is written to the local storage independantly of the other lines.
    //perhaps make a function that will turn entered items into an <li>.

//TODO: add the time function that will display passed times in grey, current time in red and time to come in green.
    //build classes in css for each of these 3 scenarios. still need red and green.

//array for the times of day
var times = [
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm',
    '9pm',
];


    
//function to add each of the sections
function addSections(){
    //vars to popluate the body with the time, a box allowing the user to enter in their daily plans, and a save button
    var nextRow = $('<form>');
    var setTime = $("<div>"); //creates an area where the time of day will be displayed
    var eventForm = $("<input>"); //will create an area where to user will be able to enter in their plans
    var saveBtn = $("<button>"); //this will create a button when clicked will save the plans to local storage
    var col1 = $('<div>');
    var col2 = $('<div>');
    var br = $('<br>');
    // for (var i = 0; i < times.length; i++) {
        nextRow.addClass('row');
        nextRow.attr('id', 'insert-planner');
        setTime.addClass('col-1 insert-times');
        eventForm.addClass('col-8 insert-entries');
        eventForm.attr('type=text');
        saveBtn.addClass('col-1 insert-saves');
        col1.addClass('col-1');
        col2.addClass('col-1');
        setTime.html('8am');
        // setTime.text(times[i]);
        saveBtn.text('💾');
        mainChild.append(nextRow);
        nextRow.append(col1);
        nextRow.append(setTime);
        nextRow.append(eventForm);
        nextRow.append(saveBtn);
        nextRow.append(col2);
        nextRow.append(br);
    // }
    function formSubmit() {
        // var liEl = $('<li>');
        // event.preventDefault();
        eventForm.append($('<li>').append(eventForm.val()));

    }
    nextRow.on('submit', formSubmit)
}
addSections()


// for (var i = 0; i < 15; i++) {
//     addSections();
// }



//JUST IN CASE!


function addSections2(){
    var nextRow = $('<form>');
    var setTime = $("<div>"); //creates an area where the time of day will be displayed
    var eventForm = $("<input>"); //will create an area where to user will be able to enter in their plans
    var saveBtn = $("<button>"); //this will create a button when clicked will save the plans to local storage
    var col1 = $('<div>');
    var col2 = $('<div>');
    var br = $('<br>');
    // for (var i = 0; i < times.length; i++) {
        nextRow.addClass('row');
        nextRow.attr('id', 'insert-planner');
        setTime.addClass('col-1 insert-times');
        eventForm.addClass('col-8 insert-entries');
        saveBtn.addClass('col-1 insert-saves');
        col1.addClass('col-1');
        col2.addClass('col-1');
        setTime.html('9am');
        // setTime.text(times[i]);
        saveBtn.text('💾');
        mainChild.append(nextRow);
        nextRow.append(col1);
        nextRow.append(setTime);
        nextRow.append(eventForm);
        nextRow.append(saveBtn);
        nextRow.append(col2);
        nextRow.append(br);
    // }
}
addSections2()

function addSections3(){
    var nextRow = $('<form>');
    var setTime = $("<div>"); //creates an area where the time of day will be displayed
    var eventForm = $("<input>"); //will create an area where to user will be able to enter in their plans
    var saveBtn = $("<button>"); //this will create a button when clicked will save the plans to local storage
    var col1 = $('<div>');
    var col2 = $('<div>');
    var br = $('<br>');
    // for (var i = 0; i < times.length; i++) {
        nextRow.addClass('row');
        nextRow.attr('id', 'insert-planner');
        setTime.addClass('col-1 insert-times');
        eventForm.addClass('col-8 insert-entries');
        saveBtn.addClass('col-1 insert-saves');
        col1.addClass('col-1');
        col2.addClass('col-1');
        setTime.html('10am');
        // setTime.text(times[i]);
        saveBtn.text('💾');
        mainChild.append(nextRow);
        nextRow.append(col1);
        nextRow.append(setTime);
        nextRow.append(eventForm);
        nextRow.append(saveBtn);
        nextRow.append(col2);
        nextRow.append(br);
    // }
}
addSections3()

function addSections4(){
    var nextRow = $('<form>');
    var setTime = $("<div>"); //creates an area where the time of day will be displayed
    var eventForm = $("<input>"); //will create an area where to user will be able to enter in their plans
    var saveBtn = $("<button>"); //this will create a button when clicked will save the plans to local storage
    var col1 = $('<div>');
    var col2 = $('<div>');
    var br = $('<br>');
    // for (var i = 0; i < times.length; i++) {
        nextRow.addClass('row');
        nextRow.attr('id', 'insert-planner');
        setTime.addClass('col-1 insert-times');
        eventForm.addClass('col-8 insert-entries');
        saveBtn.addClass('col-1 insert-saves');
        col1.addClass('col-1');
        col2.addClass('col-1');
        setTime.html('11am');
        // setTime.text(times[i]);
        saveBtn.text('💾');
        mainChild.append(nextRow);
        nextRow.append(col1);
        nextRow.append(setTime);
        nextRow.append(eventForm);
        nextRow.append(saveBtn);
        nextRow.append(col2);
        nextRow.append(br);
    // }
}
addSections4()

function addSections5(){
    var nextRow = $('<form>');
    var setTime = $("<div>"); //creates an area where the time of day will be displayed
    var eventForm = $("<input>"); //will create an area where to user will be able to enter in their plans
    var saveBtn = $("<button>"); //this will create a button when clicked will save the plans to local storage
    var col1 = $('<div>');
    var col2 = $('<div>');
    var br = $('<br>');
    // for (var i = 0; i < times.length; i++) {
        nextRow.addClass('row');
        nextRow.attr('id', 'insert-planner');
        setTime.addClass('col-1 insert-times');
        eventForm.addClass('col-8 insert-entries');
        saveBtn.addClass('col-1 insert-saves');
        col1.addClass('col-1');
        col2.addClass('col-1');
        setTime.html('12pm');
        // setTime.text(times[i]);
        saveBtn.text('💾');
        mainChild.append(nextRow);
        nextRow.append(col1);
        nextRow.append(setTime);
        nextRow.append(eventForm);
        nextRow.append(saveBtn);
        nextRow.append(col2);
        nextRow.append(br);
    // }
}
addSections5()

function addSections6(){
    var nextRow = $('<form>');
    var setTime = $("<div>"); //creates an area where the time of day will be displayed
    var eventForm = $("<input>"); //will create an area where to user will be able to enter in their plans
    var saveBtn = $("<button>"); //this will create a button when clicked will save the plans to local storage
    var col1 = $('<div>');
    var col2 = $('<div>');
    var br = $('<br>');
    // for (var i = 0; i < times.length; i++) {
        nextRow.addClass('row');
        nextRow.attr('id', 'insert-planner');
        setTime.addClass('col-1 insert-times');
        eventForm.addClass('col-8 insert-entries');
        saveBtn.addClass('col-1 insert-saves');
        col1.addClass('col-1');
        col2.addClass('col-1');
        setTime.html('1pm');
        // setTime.text(times[i]);
        saveBtn.text('💾');
        mainChild.append(nextRow);
        nextRow.append(col1);
        nextRow.append(setTime);
        nextRow.append(eventForm);
        nextRow.append(saveBtn);
        nextRow.append(col2);
        nextRow.append(br);
    // }
}
addSections6()

function addSections7(){
    var nextRow = $('<form>');
    var setTime = $("<div>"); //creates an area where the time of day will be displayed
    var eventForm = $("<input>"); //will create an area where to user will be able to enter in their plans
    var saveBtn = $("<button>"); //this will create a button when clicked will save the plans to local storage
    var col1 = $('<div>');
    var col2 = $('<div>');
    var br = $('<br>');
    // for (var i = 0; i < times.length; i++) {
        nextRow.addClass('row');
        nextRow.attr('id', 'insert-planner');
        setTime.addClass('col-1 insert-times');
        eventForm.addClass('col-8 insert-entries');
        saveBtn.addClass('col-1 insert-saves');
        col1.addClass('col-1');
        col2.addClass('col-1');
        setTime.html('2pm');
        // setTime.text(times[i]);
        saveBtn.text('💾');
        mainChild.append(nextRow);
        nextRow.append(col1);
        nextRow.append(setTime);
        nextRow.append(eventForm);
        nextRow.append(saveBtn);
        nextRow.append(col2);
        nextRow.append(br);
    // }
}
addSections7()

function addSections8(){
    var nextRow = $('<form>');
    var setTime = $("<div>"); //creates an area where the time of day will be displayed
    var eventForm = $("<input>"); //will create an area where to user will be able to enter in their plans
    var saveBtn = $("<button>"); //this will create a button when clicked will save the plans to local storage
    var col1 = $('<div>');
    var col2 = $('<div>');
    var br = $('<br>');
    // for (var i = 0; i < times.length; i++) {
        nextRow.addClass('row');
        nextRow.attr('id', 'insert-planner');
        setTime.addClass('col-1 insert-times');
        eventForm.addClass('col-8 insert-entries');
        saveBtn.addClass('col-1 insert-saves');
        col1.addClass('col-1');
        col2.addClass('col-1');
        setTime.html('3pm');
        // setTime.text(times[i]);
        saveBtn.text('💾');
        mainChild.append(nextRow);
        nextRow.append(col1);
        nextRow.append(setTime);
        nextRow.append(eventForm);
        nextRow.append(saveBtn);
        nextRow.append(col2);
        nextRow.append(br);
    // }
}
addSections8()

function addSections9(){
    var nextRow = $('<form>');
    var setTime = $("<div>"); //creates an area where the time of day will be displayed
    var eventForm = $("<input>"); //will create an area where to user will be able to enter in their plans
    var saveBtn = $("<button>"); //this will create a button when clicked will save the plans to local storage
    var col1 = $('<div>');
    var col2 = $('<div>');
    var br = $('<br>');
    // for (var i = 0; i < times.length; i++) {
        nextRow.addClass('row');
        nextRow.attr('id', 'insert-planner');
        setTime.addClass('col-1 insert-times');
        eventForm.addClass('col-8 insert-entries');
        saveBtn.addClass('col-1 insert-saves');
        col1.addClass('col-1');
        col2.addClass('col-1');
        setTime.html('4pm');
        // setTime.text(times[i]);
        saveBtn.text('💾');
        mainChild.append(nextRow);
        nextRow.append(col1);
        nextRow.append(setTime);
        nextRow.append(eventForm);
        nextRow.append(saveBtn);
        nextRow.append(col2);
        nextRow.append(br);
    // }
}
addSections9()

function addSections10(){
    var nextRow = $('<form>');
    var setTime = $("<div>"); //creates an area where the time of day will be displayed
    var eventForm = $("<input>"); //will create an area where to user will be able to enter in their plans
    var saveBtn = $("<button>"); //this will create a button when clicked will save the plans to local storage
    var col1 = $('<div>');
    var col2 = $('<div>');
    var br = $('<br>');
    // for (var i = 0; i < times.length; i++) {
        nextRow.addClass('row');
        nextRow.attr('id', 'insert-planner');
        setTime.addClass('col-1 insert-times');
        eventForm.addClass('col-8 insert-entries');
        saveBtn.addClass('col-1 insert-saves');
        col1.addClass('col-1');
        col2.addClass('col-1');
        setTime.html('5pm');
        // setTime.text(times[i]);
        saveBtn.text('💾');
        mainChild.append(nextRow);
        nextRow.append(col1);
        nextRow.append(setTime);
        nextRow.append(eventForm);
        nextRow.append(saveBtn);
        nextRow.append(col2);
        nextRow.append(br);
    // }
}
addSections10()

function addSections11(){
    var nextRow = $('<form>');
    var setTime = $("<div>"); //creates an area where the time of day will be displayed
    var eventForm = $("<input>"); //will create an area where to user will be able to enter in their plans
    var saveBtn = $("<button>"); //this will create a button when clicked will save the plans to local storage
    var col1 = $('<div>');
    var col2 = $('<div>');
    var br = $('<br>');
    // for (var i = 0; i < times.length; i++) {
        nextRow.addClass('row');
        nextRow.attr('id', 'insert-planner');
        setTime.addClass('col-1 insert-times');
        eventForm.addClass('col-8 insert-entries');
        saveBtn.addClass('col-1 insert-saves');
        col1.addClass('col-1');
        col2.addClass('col-1');
        setTime.html('6pm');
        // setTime.text(times[i]);
        saveBtn.text('💾');
        mainChild.append(nextRow);
        nextRow.append(col1);
        nextRow.append(setTime);
        nextRow.append(eventForm);
        nextRow.append(saveBtn);
        nextRow.append(col2);
        nextRow.append(br);
    // }
}
addSections11()

function addSections12(){
    var nextRow = $('<form>');
    var setTime = $("<div>"); //creates an area where the time of day will be displayed
    var eventForm = $("<input>"); //will create an area where to user will be able to enter in their plans
    var saveBtn = $("<button>"); //this will create a button when clicked will save the plans to local storage
    var col1 = $('<div>');
    var col2 = $('<div>');
    var br = $('<br>');
    // for (var i = 0; i < times.length; i++) {
        nextRow.addClass('row');
        nextRow.attr('id', 'insert-planner');
        setTime.addClass('col-1 insert-times');
        eventForm.addClass('col-8 insert-entries');
        saveBtn.addClass('col-1 insert-saves');
        col1.addClass('col-1');
        col2.addClass('col-1');
        setTime.html('7pm');
        // setTime.text(times[i]);
        saveBtn.text('💾');
        mainChild.append(nextRow);
        nextRow.append(col1);
        nextRow.append(setTime);
        nextRow.append(eventForm);
        nextRow.append(saveBtn);
        nextRow.append(col2);
        nextRow.append(br);
    // }
}
addSections12()

function addSections13(){
    var nextRow = $('<form>');
    var setTime = $("<div>"); //creates an area where the time of day will be displayed
    var eventForm = $("<input>"); //will create an area where to user will be able to enter in their plans
    var saveBtn = $("<button>"); //this will create a button when clicked will save the plans to local storage
    var col1 = $('<div>');
    var col2 = $('<div>');
    var br = $('<br>');
    // for (var i = 0; i < times.length; i++) {
        nextRow.addClass('row');
        nextRow.attr('id', 'insert-planner');
        setTime.addClass('col-1 insert-times');
        eventForm.addClass('col-8 insert-entries');
        saveBtn.addClass('col-1 insert-saves');
        col1.addClass('col-1');
        col2.addClass('col-1');
        setTime.html('8pm');
        // setTime.text(times[i]);
        saveBtn.text('💾');
        mainChild.append(nextRow);
        nextRow.append(col1);
        nextRow.append(setTime);
        nextRow.append(eventForm);
        nextRow.append(saveBtn);
        nextRow.append(col2);
        nextRow.append(br);
    // }
}
addSections13()

function addSections14(){
    var nextRow = $('<form>');
    var setTime = $("<div>"); //creates an area where the time of day will be displayed
    var eventForm = $("<input>"); //will create an area where to user will be able to enter in their plans
    var saveBtn = $("<button>"); //this will create a button when clicked will save the plans to local storage
    var col1 = $('<div>');
    var col2 = $('<div>');
    var br = $('<br>');
    // for (var i = 0; i < times.length; i++) {
        nextRow.addClass('row');
        nextRow.attr('id', 'insert-planner');
        setTime.addClass('col-1 insert-times');
        eventForm.addClass('col-8 insert-entries');
        saveBtn.addClass('col-1 insert-saves');
        col1.addClass('col-1');
        col2.addClass('col-1');
        setTime.html('9pm');
        // setTime.text(times[i]);
        saveBtn.text('💾');
        mainChild.append(nextRow);
        nextRow.append(col1);
        nextRow.append(setTime);
        nextRow.append(eventForm);
        nextRow.append(saveBtn);
        nextRow.append(col2);
        nextRow.append(br);
    // }
}
addSections14()
