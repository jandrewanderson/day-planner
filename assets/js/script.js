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
    var form = $("<form></form>")
        .attr("id", "insert-planner")
        .addClass("row")
    var HourContainer = $("<div></div>")
        .attr("id", "insert-times")
        .addClass("col-2");
    var HourP = $("<p></p>").text(times[i])
        .addClass("time");
    
    var input = $("<input/>")
        .attr("id", "insert-entries")
        .attr("id", times[i])
        .addClass("col-9")
        .addClass("input");
    var saveBtn = $("<button></button>").text("💾")
        .attr("id", "insert-saves")
        .attr("inputVal", times[i])
        .addClass("col-1");
    HourContainer.append(HourP);
    form.append(HourContainer);
    form.append(input);
    form.append(saveBtn);
    mainChild.append(form);
    
}
$('button').on('click', function(event){
    event.preventDefault();
    inputVal = $(this).attr("inputVal");
    console.log(inputVal);
    inputtedTask = $(document.getElementById(inputVal))
    console.log(inputtedTask.val());
    localStorage.setItem(`${inputVal}`, inputtedTask.val())
    savedTasks();
})
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





