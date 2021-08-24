var btn = document.getElementById("btn");
if(btn) {
btn.addEventListener("click", Search);

function Search() {
    var query = document.getElementById("searchinput").value;
    localStorage.setItem("query", query);
}
}