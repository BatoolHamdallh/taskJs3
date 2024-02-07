async function getProducts() {
  const responce = await fetch("https://dummyjson.com/products");
  const data = await responce.json();
  //console .log (data);
  const products = data.products;
  // const products = data.products[0].description;
  // console.log(products);
  const result = products
    .map(function (product) {
      return `
        <div class="product">
        <div class="image">
        <img src="${product.thumbnail}" alt="phone"/>
        </div>
        <div class="info">
        <h3>${product.title}</h3>
        <span>${product.price}</span>
        </div>
        </div>
        `;
    })
    .join("");
  document.querySelector(".products").innerHTML = result;
}

getProducts();
