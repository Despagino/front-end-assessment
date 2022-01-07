console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been successfully submitted")
}

getCompImage = event => {
	alert("You are nice")
}

let form = document.querySelector('form#contact');
let nyancat = document.querySelector("#nyancat")

form.addEventListener('submit', handleSubmit);

nyancat.addEventListener('mouseover', getCompImage)