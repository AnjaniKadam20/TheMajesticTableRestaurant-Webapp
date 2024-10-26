function submitcontact(){
    event.preventDefault();

    let inputs = document.querySelectorAll('.contact-form input, .contact-form select');
    for (let input of inputs) {
        if (input.value === '') {
            alert("Please fill in all fields.");
            return; // Stop the form submission
        }
    }

    let finalmessage= "Thank you" ;
    alert(finalmessage);
}