function btn() {
    var lists = document.getElementById("list");
    var book = document.getElementById("book");
    var li = document.createElement("li");

    li.setAttribute('id', book.value);
    li.appendChild(document.createTextNode(book.value));
    lists.appendChild(li);

}

function del() {
    var listss = document.getElementById("list");
    var book = document.getElementById("book");
    var deleteitem = document.getElementById(book.value);
    listss.removeChild(deleteitem);
}