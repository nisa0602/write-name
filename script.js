let form = document.getElementById("form");
// let input = document.getElementById("input");
// let list = document.getElementById("list");
// let name1 = document.getElementById("name1");

//Retrieve the data
// function acceptData(){
//     let data = " ";
//     data["value"] = input.value;
//     return data;
// }

//submit function
// function formSubmit(e) {
//     event.preventDefault();
//     let data = acceptData();
//     console.log("clicked")
// }

// let showData = () => {
//     input.addEventListener("click", e => {
//         e.preventDefault();
//         document.getElementById("name1").innerHTML = data;

//         console.log("oke")
//         acceptData();
//     })
// }  

function showData(){
    let input = document.getElementById("input").value;
    alert(input);
}