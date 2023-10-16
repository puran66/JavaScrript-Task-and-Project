let Input = document.querySelector('#input-box');
let Ul = document.querySelector('#list-container');
let Ul2 = document.querySelector('#myUL');
let Li2;
let Inputvalue;
let Leng;


function addTask() {
    if (Input.value == '') {
        alert('Please enter a task!');
    }
    else {
        //        console.log("Add Task");

        let Li = document.createElement("li");
        //        console.log(`<p>${Input.value}</p>`);
        Li.innerHTML = `${Input.value} &nbsp;&nbsp;&nbsp; <p id="Cancel">✖️</p> <hr>`;

        Li2 = Li.cloneNode(true);

        Ul.appendChild(Li);

        localStorage.setItem("Note",Input.value);

        Inputvalue = Input.value;

        Input.value = '';

        let cancelBtn = Li.querySelector('#Cancel');
        cancelBtn.addEventListener('click', () => {
            Ul.removeChild(Li);
        });

        Transfer = () => {
            Li2.innerHTML = `${Inputvalue}`;
            Ul2.appendChild(Li2);
            Li2.style.display = "none";
            console.log(Li2);
        };

        Transfer();
    }
}








