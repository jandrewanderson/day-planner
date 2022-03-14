//vars to select sections in the html
var body = $('#body');
var header = $('#header-child');
var planner = $('#planner'); 
var mainChild = $('#main-child');
//this is the main id for inserting the tables
var insertPlanner = $('#insert-planner');


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

var plannerTable = `

    <form id="insert-planner" class="row">

        <div class="col-1"></div>

        <div id="insert-times" class="col-1"><p></p></div>

        <input id="insert-entries" class="col-8 input" type="text" name="enter-plans" placeholder="Type Plans Here"></input>

        <button id="insert-saves" class="col-1">💾</button>

        <div class="col-1"></div>

    </form>
`

function addTable(){
    for (var i=0; i<times.length; i++)
    mainChild.append(plannerTable);
    $('p').text(times[i]);
}
addTable();



// //function to add each of the sections
// function addSections(){
//     //vars to popluate the body with the time, a box allowing the user to enter in their daily plans, and a save button
//     var nextRow = $('<form>');
//     var setTime = $("<div>"); //creates an area where the time of day will be displayed
//     var eventForm = $("<input>"); //will create an area where to user will be able to enter in their plans
//     var saveBtn = $("<button>"); //this will create a button when clicked will save the plans to local storage
//     var col1 = $('<div>');
//     var col2 = $('<div>');
//     var br = $('<br>');
//     // for (var i = 0; i < times.length; i++) {
//         nextRow.addClass('row');
//         nextRow.attr('id', 'insert-planner');
//         setTime.addClass('col-1 insert-times');
//         eventForm.addClass('col-8 insert-entries');
//         eventForm.attr('type=text');
//         saveBtn.addClass('col-1 insert-saves');
//         col1.addClass('col-1');
//         col2.addClass('col-1');
//         setTime.html('8am');
//         // setTime.text(times[i]);
//         saveBtn.text('💾');
//         mainChild.append(nextRow);
//         nextRow.append(col1);
//         nextRow.append(setTime);
//         nextRow.append(eventForm);
//         nextRow.append(saveBtn);
//         nextRow.append(col2);
//         nextRow.append(br);
//     // }
//     function formSubmit() {
//         // var liEl = $('<li>');
//         // event.preventDefault();
//         eventForm.append($('<li>').append(eventForm.val()));

//     }
//     nextRow.on('submit', formSubmit)
// }
// addSections()




