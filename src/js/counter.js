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
		if (parseInt(counter.innerText) > 0) {
			counter.innerText = --counter.innerText;
		}

		// checking for the item in the shopping cart
		if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 0) {
			// check cart value
			caltCartPrice();

			// remove item from cart
			event.target.closest('.cart-item').remove();

			// cart checkout
			toggleCartStatus();
		}
	}

	if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
		// check cart value
		caltCartPrice();
	}
});
