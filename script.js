document.getElementById('btn1').onclick = function() {
  document.getElementById('notif').innerHTML = "your input is: " + document.getElementById('inp1').value 
}

document.getElementById('btn2').onclick = function() {
  var count = document.getElementById('count').innerHTML
  document.getElementById('count').innerHTML = +count + 1
}
