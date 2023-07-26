const ProductManager = [];

class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }

    addProduct() {
        console.log("agregue un producto")
    }

    getPrducts() {
        console.log("Tome un producto");
    }

    getProductsById() {
        console.log("id de product");
    }
}
