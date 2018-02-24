function summary() {

    var firstName = document.getElementById("FirstName").value;
    var lastName = document.getElementById("LastName").value;
    var age = document.getElementById("Age").value;

    var summary = firstName + " " + lastName + " is " + age + " years old."
    document.getElementById("summary").innerText = summary;
}