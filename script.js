document.getElementById('addProductForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const imagem = document.getElementById('imagem').value;

    addProduct(nome, preco, imagem);
    this.reset();
});

document.getElementById('resetForm').addEventListener('click', function() {
    document.getElementById('addProductForm').reset();
    clearProducts();
});

document.getElementById('clearProducts').addEventListener('click', function() {
    clearProducts();
});

function addProduct(nome, preco, imagem) {
    const productContainer = document.getElementById('productsContainer');

    const productItem = document.createElement('div');
    productItem.className = 'product-item';

    const productImage = document.createElement('img');
    productImage.src = imagem;
    productItem.appendChild(productImage);

    const productName = document.createElement('p');
    productName.textContent = nome;
    productItem.appendChild(productName);

    const productPrice = document.createElement('p');
    productPrice.textContent = `$ ${preco}`;
    productItem.appendChild(productPrice);

    productContainer.appendChild(productItem);
}

function clearProducts() {
    const productContainer = document.getElementById('productsContainer');
    productContainer.innerHTML = '';
}
