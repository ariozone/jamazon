const app = {

  view: 'catalog',
  catalog: {
    items: [
      {
        itemId: 1,
        brand: 'Ludwig',
        name: 'Black Beauty',
        price: 749.99,
        description: 'A snare drum for people with too many drumsticks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/ubY0QA'
      },
      {
        itemId: 2,
        name: 'Darbuka',
        brand: 'Vatan',
        price: 79.99,
        description: 'A hand drum for people who like belly dancing.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Turkey',
        imageUrl: 'https://www.mydukkan.com/media/image/33108/Vatan.Vatan3025K33108.jpg'
      },
      {
        itemId: 3,
        name: 'Djembe',
        brand: 'Remo',
        price: 49.99,
        description: 'A hand drum for people with dreadlocks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'West Africa',
        imageUrl: 'https://goo.gl/iKtU8x'
      },
      {
        itemId: 4,
        name: 'Hi-Hats',
        brand: 'Paiste',
        price: 400,
        description: 'A set of hats for people who spare no expense.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Switzerland',
        imageUrl: 'https://goo.gl/LV9l8O'
      },
      {
        itemId: 5,
        name: 'Giant Step',
        brand: 'Sonor',
        price: 599,
        description: 'A pedal for metal drummers with only one foot.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Germany',
        imageUrl: 'https://goo.gl/zsFo1q'
      },
      {
        itemId: 6,
        name: 'Travis Barker Signature',
        brand: 'Zildjian',
        price: 24.99,
        description: 'A set of drumsticks from the 90s.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/Cro3tL'
      },
      {
        itemId: 7,
        name: 'Bodhran',
        brand: 'Meinl',
        price: 129.99,
        description: 'A frame drum for people who like to jig.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Ireland',
        imageUrl: 'https://goo.gl/YNb74O'
      },
      {
        itemId: 8,
        name: 'TR-09',
        brand: 'Roland',
        price: 399,
        description: 'A drum machine for people with no desk space.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Japan',
        imageUrl: 'https://goo.gl/gJYUxz'
      }
    ]
  },
  details: {
    item: null
  },
  cart: []
}

function singleCardBuilder(info) {
  const card = document.createElement('div')
  card.setAttribute('class', 'card item-card p-3 mt-2 mx-1')
  card.setAttribute('data-item-id', info.itemId)
  const cardBody = document.createElement('div')
  cardBody.setAttribute('class', 'card-body item-card-body')
  const $brand = document.createElement('h5')
  $brand.textContent = info.brand
  $brand.setAttribute('class', 'card-text')
  const $name = document.createElement('h3')
  $name.setAttribute('class', 'card-title')
  $name.textContent = info.name
  const $price = document.createElement('h6')
  $price.setAttribute('class', 'card-text')
  $price.textContent = 'Price: $' + info.price
  const $image = document.createElement('img')
  $image.setAttribute('class', 'card-img-top card-img')
  $image.setAttribute('src', info.imageUrl)
  card.appendChild($image)
  card.appendChild(cardBody)
  cardBody.appendChild($brand)
  cardBody.appendChild($name)
  cardBody.appendChild($price)

  return card
}

function catalogBuilder(data) {
  const $container = document.createElement('div')
  $container.setAttribute('class', 'container')
  const $heading = document.createElement('h1')
  $heading.classList.add('p-5')
  $heading.classList.add('text-center')
  $heading.textContent = 'Jamazon'
  const $deck = document.createElement('div')
  $deck.setAttribute('class', 'card-deck')
  const rowDiv = document.createElement('div')
  rowDiv.setAttribute('class', 'row no-gutters')
  for (let i = 0; i < data.items.length; i++) {
    const $col = document.createElement('div')
    $col.setAttribute('class', 'col col-sm-3 col-md-3 col-sm-4 col-sm-6')
    $col.appendChild(singleCardBuilder(data.items[i]))
    rowDiv.appendChild($col)
  }
  $container.appendChild($heading)
  $container.appendChild($deck)
  $deck.appendChild(rowDiv)
  return $container
}

function renderApp(state) {
  const $view = document.querySelector('[data-view="' + state.view + '"]')
  if (state.view === 'catalog') {
    $view.innerHTML = ''
    $view.appendChild(catalogBuilder(state.catalog))
    $view.appendChild(shoppingCart(state.cart))
  }

  if (state.view === 'details') {
    $view.innerHTML = ''
    $view.appendChild(renderCatalogItem(state.details.item))
    $view.appendChild(shoppingCart(state.cart))
  }
  if (state.view === 'cart') {
    $view.innerHTML = ''
    $view.appendChild(renderCardItems(state.cart))
  }
  showView(state.view)
}
renderApp(app)

function renderCatalogItem(catalogItem) {
  const styledCard = document.createElement('div')
  styledCard.setAttribute('class', 'container my-5')
  const $row = document.createElement('row')
  $row.setAttribute('class', 'row')
  const $shadow = document.createElement('div')
  $shadow.setAttribute('class', 'card shadow-sm')
  $row.appendChild($shadow)
  const $row1 = document.createElement('div')
  $row1.setAttribute('class', 'row no-gutters')
  const $imgCol = document.createElement('div')
  $imgCol.setAttribute('class', 'col-lg-4')
  const $img = document.createElement('img')
  $img.setAttribute('class', 'img-responsive w-100')
  $img.setAttribute('src', catalogItem.imageUrl)
  const $col = document.createElement('div')
  $col.setAttribute('class', 'col')
  const body = document.createElement('div')
  body.setAttribute('class', 'card-body')
  const $h1 = document.createElement('h1')
  $h1.setAttribute('class', 'card-title')
  $h1.textContent = catalogItem.name
  const $h3 = document.createElement('h3')
  $h3.setAttribute('class', 'card-subtitle')
  $h3.textContent = catalogItem.brand
  const description = document.createElement('p')
  description.setAttribute('class', 'card-text')
  description.textContent = catalogItem.description
  const $details = document.createElement('p')
  $details.setAttribute('class', 'card-text')
  $details.textContent = catalogItem.details
  const $origin = document.createElement('h6')
  $origin.setAttribute('class', 'card-text')
  $origin.textContent = catalogItem.origin
  const $h6 = document.createElement('h6')
  $h6.setAttribute('class', 'card-subtitle')
  $h6.textContent = 'Price: $' + catalogItem.price
  const $button = document.createElement('button')
  $button.setAttribute('class', 'btn btn-primary')
  $button.setAttribute('id', 'add')
  $button.textContent = 'ADD TO CART'
  const $backButton = document.createElement('button')
  $backButton.setAttribute('class', 'btn btn-secondary')
  $backButton.setAttribute('id', 'back')
  $backButton.textContent = 'GO BACK'

  body.appendChild($h1)
  body.appendChild($h3)
  body.appendChild(description)
  body.appendChild($details)
  body.appendChild($origin)
  $col.appendChild(body)
  $imgCol.appendChild($img)
  $row1.appendChild($col)
  $row1.appendChild($imgCol)
  $shadow.appendChild($row1)
  styledCard.appendChild($row)
  body.appendChild($h6)
  body.appendChild($button)
  body.appendChild($backButton)
  return styledCard
}

function match(id, items) {
  for (let i = 0; i < items.length; i++) {
    if (id === items[i].itemId) {
      return items[i]
    }
  }
}
const $catalog = document.querySelector('[data-view = "catalog"]')
$catalog.addEventListener('click', function (e) {
  const drum = e.target.closest('[data-item-id]')
  if (!drum) return
  app.view = 'details'
  const $itemId = drum.getAttribute('data-item-id')
  const id = parseInt($itemId, 10)
  const selectedDrum = match(id, app.catalog.items)
  app.details.item = selectedDrum
  renderApp(app)
}
)
const $details = document.querySelector('[data-view = "details"]')
$details.addEventListener('click', function (e) {
  const add = e.target.closest('#add')
  if (!add) return
  app.cart.push(app.details.item)
  app.view = 'cart'
  renderApp(app)
}
)
$details.addEventListener('click', function (e) {
  const back = e.target.closest('#back')
  if (!back) return
  app.view = 'catalog'
  renderApp(app)
})
const $cart = document.getElementById('app')
$cart.addEventListener('click', function (e) {
  const shop = e.target.closest('#cart')
  if (!shop) return
  app.view = 'cart'
  renderApp(app)
})
$cart.addEventListener('click', function (e) {
  const continueShopping = e.target.closest('#cont')
  if (!continueShopping) return
  app.view = 'catalog'
  renderApp(app)
})
$cart.addEventListener('click', function (e) {
  const checkout = e.target.closest('#checkout')
  if (!checkout) return
  app.view = 'checkout'
  renderApp(app)
})

function showView(view) {
  const views = document.querySelectorAll('[data-view]')
  for (let i = 0; i < views.length; i++) {
    const $view = views[i]
    if (view !== views[i].getAttribute('data-view')) {
      $view.classList.add('hidden')
    }
    else {
      $view.classList.remove('hidden')
    }
  }
}

function shoppingCart(cartObj) {
  const cart = document.createElement('div')
  cart.setAttribute('id', 'cart')
  const counter = cartObj.length
  cart.textContent = 'Cart (' + counter + ')'
  return cart
}

function renderSingleCartItem(cartItem) {
  const card = document.createElement('div')
  card.setAttribute('class', 'card item-card p-3 mt-2 mx-1')
  card.setAttribute('data-item-id', cartItem.itemId)
  const cardBody = document.createElement('div')
  cardBody.setAttribute('class', 'card-body item-card-body')
  const $brand = document.createElement('h5')
  $brand.textContent = cartItem.brand
  $brand.setAttribute('class', 'card-text')
  const $name = document.createElement('h3')
  $name.setAttribute('class', 'card-title')
  $name.textContent = cartItem.name
  const $price = document.createElement('h6')
  $price.setAttribute('class', 'card-text')
  $price.textContent = 'Price: $' + cartItem.price
  const $image = document.createElement('img')
  $image.setAttribute('class', 'card-img-top card-img')
  $image.setAttribute('src', cartItem.imageUrl)
  card.appendChild($image)
  card.appendChild(cardBody)
  cardBody.appendChild($brand)
  cardBody.appendChild($name)
  cardBody.appendChild($price)

  return card
}
let total = 0
function renderCardItems(cartObject) {

  const $container = document.createElement('div')
  $container.setAttribute('class', 'container')
  const $heading = document.createElement('h1')
  $heading.classList.add('p-5')
  $heading.classList.add('text-center')
  $heading.textContent = 'Jamazon'
  const $col = document.createElement('div')
  $col.setAttribute('class', 'col col-sm-12 col-md-12')
  for (let i = 0; i < app.cart.length; i++) {
    const $row = document.createElement('div')
    $row.setAttribute('class', 'row')
    $row.appendChild(renderSingleCartItem(app.cart[i]))
    total += app.cart[i].price
    $col.appendChild($row)
  }

  const count = document.createElement('div')
  count.textContent = app.cart.length + ' Items'

  const $total = document.createElement('div')
  $total.textContent = 'Total: $' + total
  $container.appendChild($heading)
  $container.appendChild($col)
  $container.appendChild(count)
  $container.appendChild($total)

  const checkout = document.createElement('button')
  checkout.setAttribute('class', 'btn btn-primary')
  checkout.setAttribute('id', 'checkout')
  checkout.textContent = 'Check Out'
  $container.appendChild(checkout)

  const cont = document.createElement('button')
  cont.setAttribute('class', 'btn btn-secondary')
  cont.setAttribute('id', 'cont')
  cont.textContent = 'Continue Shopping'
  $container.appendChild(cont)

  return $container
}
