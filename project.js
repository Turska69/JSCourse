// getting info from local storage
const getLocalStorage = () => {
    let saved = localStorage.getItem('saved')
    if (saved) {
     return (saved = JSON.parse(localStorage.getItem('saved')))
    }
    else {
     return []
    }
   }
// limiting the characters
function change (el) {
    var max_len = 18;
    if (el.value.length > max_len) {
    el.value = el.value.substr(0, max_len);
    }
    document.getElementById('char_cnt').innerHTML = el.value.length;
    document.getElementById('chars_left').innerHTML = max_len - el.value.length;
    return true;
    }
// adding items to the list
function shoppinglist() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("item").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        document.getElementById("item").style.border = "5px solid #ff0000";
        alert("You must write something!");
        } else if (inputValue.length < 3) {
            document.getElementById("item").style.border = "5px solid #ff0000";
            alert("Minimum three letters, dude!");
        } else {
        document.getElementById("list").appendChild(li);
        document.getElementById("item").style.border = "none";
        localStorage.setItem('saved', JSON.stringify(list));
    }
    document.getElementById("item").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("x");
    span.className = "remove";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
  }
// remove button
var nodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < nodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("x");
    span.className = "remove";
    span.appendChild(txt);
    nodelist[i].appendChild(span);
}
// remove functionality
var remove = document.getElementsByClassName("remove");
var i;
for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
// to outline the completed items
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
// function to empty the whole list
function emptylist(){
    document.getElementById("list").innerHTML = "";
}
