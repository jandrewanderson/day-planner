
//vars to select sections in the html
var body = $('#body');
var header = $('#header-child');
var planner = $('#planner'); 
var insertTimes = $('#insert-times'); //this is the section where the times of day will be inserted.
var insertEntries = $('#insert-entries'); //this is the section where the newSection areas will be inserted.
var insertSaves = $('#insert-saves'); //this is the section where the save buttons will be inserted.

//vars to popluate the body with the time, a box allowing the user to enter in their daily plans, and a save button
var newSection = $("<section>"); //made just in case it is needed later.
var setTime = $("<div>"); //creates an area where the time of day will be displayed
var eventForm = $("<form>"); //will create an area where to user will be able to enter in their plans
var saveBtn = $("<button>"); //this will create a button when clicked will save the plans to local storage

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
]