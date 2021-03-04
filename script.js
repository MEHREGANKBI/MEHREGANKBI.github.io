document.getElementById('btn1').onclick = function() {
  document.getElementById('notif').innerHTML = "your input is: " + document.getElementById('inp1').value 
  document.getElementById('notif').style.color = '#9649b8'
}

document.getElementById('btn2').onclick = function() {
  var count = document.getElementById('count').innerHTML
  var color = [ '#0094d6', '#2dba1e', '#c6007c', '#e24800', ]
  document.getElementById('count').innerHTML = +count + 1
  document.getElementById('count').style.color = color[~~count%4]
}
