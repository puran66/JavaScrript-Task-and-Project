let FullName = document.querySelector("#FullName");
let Address = document.querySelector("#Address");
let Age = document.querySelector("#Age");
let Job = document.querySelector("#Job");
let Phone = document.querySelector("#Phone");
let Country = document.querySelector("#Country");
let Sumbit = document.querySelector("#Sumbit");




StoreChcek=()=>{
    if(FullName && Address && Age>17 && Job && Phone && Country){
        
    }
    else{
        throw error("")
    }
}

Sumbit.addEventListener('click',StoreChcek)

