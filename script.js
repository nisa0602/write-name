let form = document.getElementById("form");
let input = document.getElementById("input");
// let list = document.getElementById("list");
let name1 = document.getElementById("name1");

//Retrieve the data
function acceptData(){
    let data = {};
    data["text"] = input.value;
    return data;
}

//submit function
// function formSubmit(e) {
//     event.preventDefault();
//     let data = acceptData();
//     console.log("clicked")
// }