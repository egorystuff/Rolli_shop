function caltCartPrice() {
	const cartItems = document.querySelectorAll('.cart-item');
	const priceTotal = document.querySelector('.total-price');
	const deliveryCost = document.querySelector('.delivery-cost');
	const cartDelivery = document.querySelector('[data-cart-delivery]');

	let totalPrice = 0;

	cartItems.forEach(function (item) {
		const amountEl = item.querySelector('[data-counter]');
		const priceEl = item.querySelector('.price__currency');

		const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

		totalPrice += currentPrice;
	});

	// Displaying the price on the page
	priceTotal.innerText = totalPrice;

	// hide or show the delivery block
	if (totalPrice > 0) {
		cartDelivery.classList.remove('none');
	} else {
		cartDelivery.classList.add('none');
	}

	// indicate the cost of delivery
	if (totalPrice >= 600) {
		deliveryCost.classList.add('free');
		deliveryCost.innerText = 'бесплатно';
	} else {
		deliveryCost.classList.remove('free');
		deliveryCost.innerText = '250 ₽';
	}
}
