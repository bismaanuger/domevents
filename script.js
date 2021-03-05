var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liSelected = document.querySelectorAll("li");

function inputLength() {
    return input.value.length;
}

function strikeThrough(li) {
    li.addEventListener("click", function () {
        li.classList.toggle("done");
    });
}

function deleteButton(li) {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    li.appendChild(btn);
    btn.addEventListener("click", function () {
        li.remove();
    });
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    strikeThrough(li);

    deleteButton(li);
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

for (let i = 0; i < liSelected.length; i++) {
    strikeThrough(liSelected[i]);

    deleteButton(liSelected[i]);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
