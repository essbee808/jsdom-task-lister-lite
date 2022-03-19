document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.addEventListener("submit", function(e) {
    e.preventDefault()
    let str = document.getElementById('new-task-description').value;
    document.getElementById('tasks').innerHTML = str
  });

  // function displayTask() {
  //   let str = document.getElementById('new-task-description').value;
  //   document.getElementById('tasks').innerHTML = str
  // }
  // document.addEventListener("click", function(e) {
  //  let str = document.getElementById('new-task-description').value
  //  document.getElementById('tasks').innerHTML = str 
  // })
});

// Type a task into input field
// Click some form of a submit button
// My string should appear on the DOM after submit button was activated