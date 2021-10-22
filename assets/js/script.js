$(document).ready(function() {
//retrieves the current date
var dateParagraph = $("#currentDay");
var todayDate = moment().format('dddd, MMMM Do YYYY');
    dateParagraph.text(todayDate);
});

//saves user input for each time slot

var input_textarea1 = document.querySelector('#event1');
var save_button1 = document.querySelector('#saveEvent1');
//retrieves previously save text to display
input_textarea1.value = localStorage.getItem('content1');
//when the Save button is clicked, store the input of the textarea
saveEvent1.addEventListener('click', updateOutput1);
//sets the input of text area into local storage
function updateOutput1() {
    localStorage.setItem('content1', input_textarea1.value);
};

var input_textarea2 = document.querySelector('#event2');
var save_button2 = document.querySelector('#saveEvent2');
//retrieves previously save text to display
input_textarea2.value = localStorage.getItem('content2');
//when the Save button is clicked, store the input of the textarea
saveEvent2.addEventListener('click', updateOutput2);
//sets the input of text area into local storage
function updateOutput2() {
	localStorage.setItem('content2', input_textarea2.value);
};

var input_textarea3 = document.querySelector('#event3');
var save_button3 = document.querySelector('#saveEvent3');
//retrieves previously save text to display
input_textarea3.value = localStorage.getItem('content3');
//when the Save button is clicked, store the input of the textarea
saveEvent3.addEventListener('click', updateOutput3);
//sets the input of text area into local storage
function updateOutput3() {
	localStorage.setItem('content3', input_textarea3.value);
};

var input_textarea4 = document.querySelector('#event4');
var save_button4 = document.querySelector('#saveEvent4');
//retrieves previously save text to display
input_textarea4.value = localStorage.getItem('content4');
//when the Save button is clicked, store the input of the textarea
saveEvent4.addEventListener('click', updateOutput4);
//sets the input of text area into local storage
function updateOutput4() {
	localStorage.setItem('content4', input_textarea4.value);
};

var input_textarea5 = document.querySelector('#event5');
var save_button5 = document.querySelector('#saveEvent5');
//retrieves previously save text to display
input_textarea5.value = localStorage.getItem('content5');
//when the Save button is clicked, store the input of the textarea
saveEvent5.addEventListener('click', updateOutput5);
//sets the input of text area into local storage
function updateOutput5() {
	localStorage.setItem('content5', input_textarea5.value);
};

var input_textarea6 = document.querySelector('#event6');
var save_button6 = document.querySelector('#saveEvent6');
//retrieves previously save text to display
input_textarea6.value = localStorage.getItem('content6');
//when the Save button is clicked, store the input of the textarea
saveEvent6.addEventListener('click', updateOutput6);
//sets the input of text area into local storage
function updateOutput6() {
	localStorage.setItem('content6', input_textarea6.value);
};

var input_textarea7 = document.querySelector('#event7');
var save_button7 = document.querySelector('#saveEvent7');
//retrieves previously save text to display
input_textarea7.value = localStorage.getItem('content7');
//when the Save button is clicked, store the input of the textarea
saveEvent7.addEventListener('click', updateOutput7);
//sets the input of text area into local storage
function updateOutput7() {
	localStorage.setItem('content7', input_textarea7.value);
};

var input_textarea8 = document.querySelector('#event8');
var save_button8 = document.querySelector('#saveEvent8');
//retrieves previously save text to display
input_textarea8.value = localStorage.getItem('content8');
//when the Save button is clicked, store the input of the textarea
saveEvent8.addEventListener('click', updateOutput8);
//sets the input of text area into local storage
function updateOutput8() {
	localStorage.setItem('content8', input_textarea8.value);
};

var input_textarea9 = document.querySelector('#event9');
var save_button9 = document.querySelector('#saveEvent9');
//retrieves previously save text to display
input_textarea9.value = localStorage.getItem('content9');
//when the Save button is clicked, store the input of the textarea
saveEvent9.addEventListener('click', updateOutput9);
//sets the input of text area into local storage
function updateOutput9() {
	localStorage.setItem('content9', input_textarea9.value);
};