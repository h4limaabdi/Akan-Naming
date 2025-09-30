const form = document.getElementById('Form');
const birthDate = document.getElementById('birthDate');
const gender = getElementById('gender');
const output = getElementById('output');

//Akan name arrays
const maleNames = ["Kwasi" , "Kwadwo" , "Kwabena" , "Kwaku", "Yaw", "Kofi" , "Kwame"];
const femaleNames = ["Akosua" , "Adwoa" , "Abenaa" , "Akua" , "Yaa" , "Afua" , "Ama"];

form.addEventListener('Get Name', function(e) {
    e.preventDefault(); 

//Input values
const dateValue = birthDate.ariaValueMax;
const genderValue = gender.value;

//convert string date to object and get day of week
const objDate = new Date(dateValue);
const dayOfWeek = objDate.getDay();

//Get name
let akanName = "";
if (genderValue === "Male"){
    akanName = maleNames[dayOfWeek];
} else
    if (genderValue === "Female") {
        akanName = femaleNames[dayOfWeek]
    }

    //Result 
    output.textContent = 'Your Akan name is: ${akanName}';
});
