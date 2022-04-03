// Variables
const ratingBtns = document.getElementsByClassName('rating-btn');
const submitBtn = document.getElementById('submit-btn');
let ratingNumber = '';


// Event Listeners for rating buttons
for (let i = 0; i < ratingBtns.length; i++) {
	// Loop through buttons to add event listeners
	ratingBtns[i].addEventListener('click', () => {
		// Remove active class from any button previously selected
		for (let j= 0; j < ratingBtns.length; j++) {
			ratingBtns[j].classList.remove('active');
		}
		// Store number of button clicked
		ratingNumber = ratingBtns[i].innerText;
		localStorage.setItem('rating', ratingNumber);
		// Add active class to button clicked
		ratingBtns[i].classList.add('active');
	});	
}


// Submit Button
submitBtn.onclick = function() {
	// If no rating selected show alert and do not open thank you page
	if (ratingNumber === '') {
		alert('Please select a rating to continue');
	} else {
		// Open thank you page
		const link = document.createElement('a');
		link.href = 'thank-you.html';
		document.body.appendChild(link);
		link.click();
		link.remove();
	}   
	
}