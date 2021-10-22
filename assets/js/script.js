$(document).ready(function() {
  //retrieves the current date
  var dateParagraph = $("#currentDay");
  var todayDate = moment().format('dddd, MMMM Do YYYY');
      dateParagraph.text(todayDate);
});
  
  //saves user input for each time slot

  var input_textarea1 = document.querySelector('#event1');
  var save_button1 = document.querySelector('#saveEvent1');
  //retrieves previously saved text
  input_textarea1.value = localStorage.getItem('content1');
  //stores text area input when save button is clicked
  saveEvent1.addEventListener('click', updateOutput1);
  //saves text area input to local storage
  function updateOutput1() {
      localStorage.setItem('content1', input_textarea1.value);
  };

  var input_textarea2 = document.querySelector('#event2');
  var save_button2 = document.querySelector('#saveEvent2');
  //retrieves previously saved text
  input_textarea2.value = localStorage.getItem('content2');
  //stores text area input when save button is clicked
  saveEvent2.addEventListener('click', updateOutput2);
  //saves text area input to local storage
  function updateOutput2() {
      localStorage.setItem('content2', input_textarea2.value);
  };
  
  var input_textarea3 = document.querySelector('#event3');
  var save_button3 = document.querySelector('#saveEvent3');
  //retrieves previously saved text
  input_textarea3.value = localStorage.getItem('content3');
  //stores text area input when save button is clicked
  saveEvent3.addEventListener('click', updateOutput3);
  //saves text area input to local storage
  function updateOutput3() {
      localStorage.setItem('content3', input_textarea3.value);
  };
  
  var input_textarea4 = document.querySelector('#event4');
  var save_button4 = document.querySelector('#saveEvent4');
  //retrieves previously saved text
  input_textarea4.value = localStorage.getItem('content4');
  //stores text area input when save button is clicked
  saveEvent4.addEventListener('click', updateOutput4);
  //saves text area input to local storage
  function updateOutput4() {
      localStorage.setItem('content4', input_textarea4.value);
  };
  
  var input_textarea5 = document.querySelector('#event5');
  var save_button5 = document.querySelector('#saveEvent5');
  //retrieves previously saved text
  input_textarea5.value = localStorage.getItem('content5');
  //stores text area input when save button is clicked
  saveEvent5.addEventListener('click', updateOutput5);
  //saves text area input to local storage
  function updateOutput5() {
      localStorage.setItem('content5', input_textarea5.value);
  };
  
  var input_textarea6 = document.querySelector('#event6');
  var save_button6 = document.querySelector('#saveEvent6');
  //retrieves previously saved text
  input_textarea6.value = localStorage.getItem('content6');
  //stores text area input when save button is clicked
  saveEvent6.addEventListener('click', updateOutput6);
  //saves text area input to local storage
  function updateOutput6() {
      localStorage.setItem('content6', input_textarea6.value);
  };
  
  var input_textarea7 = document.querySelector('#event7');
  var save_button7 = document.querySelector('#saveEvent7');
  //retrieves previously saved text
  input_textarea7.value = localStorage.getItem('content7');
  //stores text area input when save button is clicked
  saveEvent7.addEventListener('click', updateOutput7);
  //saves text area input to local storage
  function updateOutput7() {
      localStorage.setItem('content7', input_textarea7.value);
  };
  
  var input_textarea8 = document.querySelector('#event8');
  var save_button8 = document.querySelector('#saveEvent8');
  //retrieves previously saved text
  input_textarea8.value = localStorage.getItem('content8');
  //stores text area input when save button is clicked
  saveEvent8.addEventListener('click', updateOutput8);
  //saves text area input to local storage
  function updateOutput8() {
      localStorage.setItem('content8', input_textarea8.value);
  };
  
  var input_textarea9 = document.querySelector('#event9');
  var save_button9 = document.querySelector('#saveEvent9');
  //retrieves previously saved text
  input_textarea9.value = localStorage.getItem('content9');
  //stores text area input when save button is clicked
  saveEvent9.addEventListener('click', updateOutput9);
  //saves text area input to local storage
  function updateOutput9() {
      localStorage.setItem('content9', input_textarea9.value);
  };
  
  //add colors to show past, present, future events
  var now= new Date().getHours();
  
  if (now > 9) {
      $("#event1").addClass("past");
      }	
      else if (now >= 9 && now < 10) {
          $("#event1").addClass("present");
      }
      else if (now < 9) {
          $("#event1").addClass("future");
      }
  
  if (now > 10) {
      $("#event2").addClass("past");
      }
      else if (now >= 10 && now < 11) {
          $("#event2").addClass("present");
      }
      else if (now < 10) {
          $("#event2").addClass("future");
      }
  
  if (now > 11) {
      $("#event3").addClass("past");
      }
      else if (now >= 11 && now < 12) {
          $("#event3").addClass("present");
      }
      else if (now < 11) {
          $("#event3").addClass("future");
      }
  
  if (now > 12) {
      $("#event4").addClass("past");
      }
      else if (now >= 12 && now < 13) {
          $("#event4").addClass("present");
      }
      else if (now < 12) {
          $("#event4").addClass("future");
      }
  
  if (now > 13) {
      $("#event5").addClass("past");
      }
      else if (now >= 13 && now < 14) {
          $("#event5").addClass("present");
      }
      else if (now < 13) {
          $("#event5").addClass("future");
      }
  
  if (now > 14) {
      $("#event6").addClass("past");
      }
      else if (now >= 14 && now < 15) {
          $("#event6").addClass("present");
      }
      else if (now < 14) {
          $("#event6").addClass("future");
      }
  
  if (now > 15) {
      $("#event7").addClass("past");
      }
      else if (now >= 15 && now < 16) {
          $("#event7").addClass("present");
      }
      else if (now < 15) {
          $("#event7").addClass("future");
      }
  
  if (now > 16) {
      $("#event8").addClass("past");
      }
      else if (now >= 16 && now < 17) {
          $("#event8").addClass("present");
      }
      else if (now < 16) {
          $("#event8").addClass("future");
      }
  
  if (now > 17) {
      $("#event9").addClass("past");
      }
      else if (now >= 17 && now < 18) {
          $("#event9").addClass("present");
      }
      else if (now < 17) {
          $("#event9").addClass("future");
      }

$("#clear").click(function() {
  localStorage.clear();
  location.reload()

});