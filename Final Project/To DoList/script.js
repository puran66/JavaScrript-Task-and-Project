let Input = document.querySelector('#input-box');
let Ul = document.querySelector('#list-container');
let Search = document.querySelector("#Search");
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





ShowData = () => {
    let Data = document.querySelector("#myUL");
    let Data1 = Data.getElementsByTagName("li");
    // console.log(Data1[1]);

    let SearchValu = Search.value.toUpperCase();
    Leng = SearchValu.length;

    console.log(Leng);

    console.log(SearchValu);

    // console.log(SearchValu);
    for (let i = 0; i < Data1.length; i++) {
        let textData = Data1[i].textContent || Data1[i].innerHTML;
        console.log(`${textData}`);
        console.log(textData);

        if (textData.toUpperCase().indexOf(SearchValu) > -1) {
            //             console.log("True")
            Data1[i].style.display = "";
        }
        else {
            Data1[i].style.display = "none";
        }
    }
};



document.addEventListener('keypress', Count)

function Count(event){
    let backspaceCount = 0;
    if (event.key === 'Backspace') {
        backspaceCount++;
        console.log(`count backspace ${backspaceCount}`);

        console.log(Leng);

        if (backspaceCount == Leng) {
            console.log("delete");
        }
    }
};





