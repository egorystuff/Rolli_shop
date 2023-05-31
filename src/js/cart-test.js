const cartWrapper = document.querySelector('.cart-wrapper');

// check clicks in whole window
window.addEventListener('click', function (event) {
	// clicked on the add to cart button
	if (event.target.hasAttribute('data-cart')) {
		const card = event.target.closest('.card');

		// create an object with information
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			itemsInBox: card.querySelector('[data-items-in-box]').innerText,
			weight: card.querySelector('.price__weight').innerText,
			price: card.querySelector('.price__currency').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		};

		// we substitute data from the object into the template
		const cartItemHTML = `
    <div class="cart-item" data-id="${productInfo.id}">
    <div class="cart-item__top">
      <div class="cart-item__img">
        <img src="${productInfo.imgSrc}" alt="${productInfo.title}" />
      </div>
      <div class="cart-item__desc">
        <div class="cart-item__title">${productInfo.title}</div>
        <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

        <div class="cart-item__details">
          <div class="items items--small counter-wrapper">
            <div class="items__control" data-action="minus">-</div>
            <div class="items__current" data-counter="">${productInfo.counter}</div>
            <div class="items__control" data-action="plus">+</div>
          </div>

          <div class="price">
            <div class="price__currency">${productInfo.price}</div>
          </div>
        </div>
        
      </div>
    </div>
  </div>`;

		cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
	}
});
