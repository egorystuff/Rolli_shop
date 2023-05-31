// check clicks in whole window
window.addEventListener('click', function (event) {
	let counter;

	// check the click on the plus and minus buttons
	if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		const counterWrapper = event.target.closest('.counter-wrapper');
		counter = counterWrapper.querySelector('[data-counter]');
	}

	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;
	}

	if (event.target.dataset.action === 'minus') {
		if (parseInt(counter.innerText) > 0) counter.innerText = --counter.innerText;
	}
});


