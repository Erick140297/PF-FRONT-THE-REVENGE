const filter = (products, {brand = '', price = ''}) => {
    let filteredProducts = [...products];
    if (brand) {
        filteredProducts = filteredProducts.filter(product => product.brand === brand);
    }
    if (price) {
        const comparePrices = (a, b) => {
        if (price === 'highest') {
            return b.price - a.price;
        }
        return a.price - b.price;
        }
        filteredProducts = filteredProducts.sort(comparePrices);
    }
    return filteredProducts;
}

export default filter;