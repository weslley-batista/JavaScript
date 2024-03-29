let button = document.querySelectorAll(".button");
var dataId = document.getElementById("dataId")
var dataName = document.getElementById("dataName")
var dataEmail = document.getElementById("dataEmail")
let dataBase;
let users;


for (var i = 0; i < button.length; i++) {

    button[i].addEventListener("click", async function (e) {
        let actionButton = this.innerHTML
        e.preventDefault()
        switch (actionButton){
            case 'Get':
                findUser(valueIndex());   
                break;
            case 'Post':
                postUsers();
                break;
            case 'Put':
                break;
            case 'Delete':
                break;
        }
    })
}

function getUsers () {
    fetch("https://reqres.in/api/users?page=2", {})
    .then((response) => response.json()).then((data) => dataBase = data.data);

    return dataBase
}

function postUsers () {
    fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: { name: "Lucas" },
    }).then((response) => response.json()).then((data) => console.log(data));
}

function valueIndex () {
    let inputIndex = document.getElementById("inputIndex");
    return parseInt(inputIndex.value);
}

function findUser ( index) {
    let users = getUsers();
    users.forEach( (user) => {
        if(index === user.id){
            dataName.innerHTML = "Nome: " + user.first_name;
            dataEmail.innerHTML = "Contato: " + user.email;
        }
    });
}