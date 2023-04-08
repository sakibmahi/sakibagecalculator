function calculateAge() {
	// Get the input values
	var birthdateInput = document.getElementById("birthdate").value;
	var dateInput = document.getElementById("date").value;

	// Calculate the difference in milliseconds
	var birthdate = new Date(birthdateInput);
	var date = new Date(dateInput);
	var difference = date - birthdate;

	// Calculate the difference in years, months, and days
	var ageDate = new Date(difference);
	var years = ageDate.getUTCFullYear() - 1970;
	var months = ageDate.getUTCMonth();
	var days = ageDate.getUTCDate() - 1;

	// Display the result
	var resultElement = document.getElementById("result");
	resultElement.innerHTML = "You are " + years + " years, " + months + " months, and " + days + " days old.";
}
