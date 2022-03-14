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


var inputvalue, inputText;

$(document).ready(function(){
    $('#insert-saves').on('click', function(){
        // event.preventDefault();
        inputvalue = $(this).siblings('.insert-entries').val();
        console.log(inputvalue);
        // console.log($(this).val());
        localStorage.setItem('text', inputvalue);
    })
})
    
    



function savedTasks(event){
    
    $('#insert-saves').on('click', function(event){
        event.preventDefault();
        $('#8am').val(localStorage.getItem('8am'));
    });
}
