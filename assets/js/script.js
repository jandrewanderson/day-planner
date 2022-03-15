//vars to select sections in the html
var body = $('#body');
var header = $('#header-child');
var planner = $('#planner'); 
var mainChild = $('#main-child');
//this is the main id for inserting the tables
var insertPlanner = $('#insert-planner');

//show todays date at the top
window.setInterval(function () {
    $('#date').html(moment().format('ddd MM/DD/y H:mm:ss'))
}, 1000);

//TODO: make the save buttons store what is written to the local storage independantly of the other lines.
    //perhaps make a function that will turn entered items into an <li>.

//array for the times of day
var times = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
];

    // '8am',
    // '9am',
    // '10am',
    // '11am',
    // '12pm',
    // '1pm',
    // '2pm',
    // '3pm',
    // '4pm',
    // '5pm',
    // '6pm',
    // '7pm',
    // '8pm',
    // '9pm',

// var plannerTable = `

//     <form id="insert-planner" class="row">

//         <div id="insert-times" class="col-2"><p class="time">${addTable(tid)}</p></div>

//         <input id="insert-entries" class="col-9 input" type="text" name="enter-plans" placeholder="Type Plans Here"></input>

//         <button id="insert-saves" class="col-1">💾</button>

//     </form>
// `
var plannerTable;
function addTable(){
    for (var i=0; i<times.length; i++){
    plannerTable = `

    <form id="insert-planner" class="row">

        <div id="insert-times" class="col-2"><p class="time">${times[i]}</p></div>

        <input id="insert-entries" class="col-9 input" type="text" name="enter-plans" placeholder="Type Plans Here"></input>

        <button id="insert-saves" class="col-1">💾</button>

    </form>
    `
        mainChild.append(plannerTable);
    }
    //this function will change the class to display the colors to red if current time matches the hour displayed, green if current time is before number dispalyed, and grey if current time is after number displayed.
    function beforeAfter(){
        var currentTime = moment().hour();
        console.log(currentTime);
        var parseTimes = parseInt(times);
        console.log(parseTimes);
        if (parseInt(times) === parseInt(moment().hour())){
            $('#insert.entries').addClass('now');
        } else if(parseInt(times) > moment().hour()){
            $('#insert.entries').addClass('later');
        } else if (parseInt(times) < moment().hour()){
            $('#insert.entries').addClass('before');
        }
    }
    beforeAfter();
}
addTable();
saveTask();

function saveTask(){
    
    $('#insert-saves').on('click', function(event){
        event.preventDefault();
        var entry = $('#insert-entries').val();
        console.log(entry)
        localStorage.setItem('entry', entry);
        localStorage.getItem(entry);
    })
}

function savedTasks(){
    for (var i=0; i<localStorage.length; i++){

    }
}

// function addTable(tid){
//     for (var i=0; i<times.length; i++){
//         mainChild.append(plannerTable);
//         $('.time').text(times[i]);
//         console.log(times[i]);
//         var time = times[i];
//     }
//     return time;
//     timerBlock();
//     // times.forEach(time=>{
//     //     console.log(time);
//     //     mainChild.append(plannerTable);
//     //     $('.time').text(time)
//     // })
// }
// // addTable(tid);

// // tid++
// function timerBlock(){
    
//     for (var i=0; i<times.length; i++){
//         tid+=1
//         console.log(tid);
//     }
// }



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




