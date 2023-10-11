let Form_1 = document.getElementsByClassName("form-1");
let Address = document.querySelector("#Address");
let Age = document.querySelector("#Age");
let Job = document.querySelector("#Job");
let Phone = document.querySelector("#Phone");
let Country = document.querySelector("#Country");
let Submit = document.querySelector("#Sumbit1");

try {
    Submit.addEventListener('click', () => {
        if (FullName.value && Address.value && Age.value > 17 && Job.value && Phone.value && Country.value) {
            let Form = {
                Name: FullName.value,
                Address: Address.value,
                Age: Age.value,
                Job: Job.value,
                Contact: Phone.value,
                Country: Country.value
            };

            localStorage.setItem("details", JSON.stringify(Form));

            window.location.reload();
        } else {
            throw "Your Age Must be Above 18";
        }

    });
} catch (error) {
    prompt(error);
}
