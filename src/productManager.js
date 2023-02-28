// importacion de fs from promise
import fs from 'fs/promises'
import { randomUUID } from 'crypto';

class ProductManager {
    constructor(route) {
        this.route = route
        this.products = []
    }
    // mostrar array de productos
    getProducts() {
        return this.products
    }
    // cargando datos en formato JSON de los productos
    async loadData() {
        const json = await fs.readFile(this.route, 'utf-8')
        this.products = JSON.parse(json)
    }
    // actualizando datos de los productos
    async uploadFiles() { // convertir array de productos en formato json y enviarlos a products.txt
        const json = JSON.stringify(this.products, null, 2)
        await fs.writeFile(this.route, json) 
    }
    // agregar producto
    addProduct(product) {
        // 1- buscar en el array si el objeto ingresado existe.
        let findId = this.products.filter(e => e.code === product.code) /* retorna un array vacio, si el objeto no existe. */
        // 2- condicional
        if (findId.length === 0) { // si el producto no existe: agregar un producto y actualizar 
            this.products.push(product)
            this.uploadFiles()
        } else {
            console.log('el id esta registrado.');
        }
    }
    // buscar un producto por su id.
    getProductById(codeID) {
        // 1-
        let findCode = this.products.find(e => e.code === codeID) /*  */
        // 2-
        if (findCode == undefined) {
            console.log('Error: Not found');
        } else {
            console.log(findCode); /* mostrar en consola el producto */
        }
    }
    // agregar iva a un produto
    updateProduct(updatePrice) { 
        // 1- buscar un producto en el array de productos y compararlo con los datos que ingresan en la funcion
        let findProd = this.products.find(e => e.title === updatePrice)
        // 2- calcular iva
        let iva = findProd.price * 21 / 100 + findProd.price;
        findProd.price = iva;
        // 4- mostrar el precio actualizado del producto.
        console.log(`precio final del producto: ${findProd.price}`);
    }
    // 
    async deleteProduct(id) {
        this.products = this.products.filter((element) => { return element.code !== id})
        console.log(this.products);
        await this.uploadFiles()
        let verif = this.products.find(e => e.code === id) // si el elemento no existe, devuelve "undefined"
        if (verif === undefined) {
           console.log('el producto se a eliminado correctamente.');
        }
    }
}

const newProd = new ProductManager('./static/products.json')
// agregar 2 productos
newProd.addProduct({ title: "producto1", desc: "lorem lorem", price: 200, img: 'img not found', code: "50215eec-e9e5-4de2-a7f5-5b93e6dfbf8a", stock: 2 })
newProd.addProduct({ title: "producto2", desc: "lorem lorem", price: 120, img: 'img not found', code: "3bd1ed5c-9aeb-4fc1-811b-b45fb9add327", stock: 2 })
// mostrar productos
newProd.getProducts()
// agregra un producto duplicado
newProd.addProduct({ title: "producto2", desc: "lorem lorem", price: 120, img: 'img not found', code: "3bd1ed5c-9aeb-4fc1-811b-b45fb9add327", stock: 2 }) /* id duplicado */
// mostrar productos
newProd.getProducts()
// devolver un id del producto
newProd.getProductById("3bd1ed5c-9aeb-4fc1-811b-b45fb9add327")

// modificar propiedades de los productos
newProd.updateProduct('producto1')

// eliminar un producto
newProd.deleteProduct("3bd1ed5c-9aeb-4fc1-811b-b45fb9add327") /* producto 2 */
