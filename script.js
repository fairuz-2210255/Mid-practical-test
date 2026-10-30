var count = 0;

function addToCart(name) {
  count = count + 1;
  document.getElementById('cart').innerHTML = 'Cart: ' + count + ' item(s). Last added: ' + name;
}

function showOffer() {
  document.getElementById('offer').style.display = 'block';
}