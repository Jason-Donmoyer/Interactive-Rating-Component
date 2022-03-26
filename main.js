submitBtn = document.getElementById('submit-btn');



submitBtn.onclick = function() {
    const link = document.createElement('a');
			link.href = 'thank-you.html';
			// link.target = '_blank';
			document.body.appendChild(link);
			link.click();
			link.remove();
}