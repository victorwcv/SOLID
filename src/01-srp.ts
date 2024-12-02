interface Product {
  id: number;
  name: string;
}

class ProductService {

  getProduct(id: number) {
    // Realiza un proceso para obtener el producto y retornarlo
    console.log('Producto: ', { id, name: 'Producto X' });
  }

  saveProduct(product: Product) {
    // Realiza una peticion para guardar en base de datos
    console.log('Guardando en base de datos: ', product);
  }
}

class MailService {

  sendEmail(email: string, template: "product-added" | "product-updated") {
    console.log('Enviando correo a: ', email + ' template: ' + template);
  }
}

// Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
// Recuerden que podemos tener muchas vistan que realicen este mismo trabajo
class ProductBloc {

  private productService: ProductService;
  private mailService: MailService;

  constructor(productService: ProductService, mailService: MailService) {
    this.productService = productService;
    this.mailService = mailService;
  }

  
  
  
  loadProduct( id: number ) {
    this.productService.getProduct( id );
  }

  saveProduct(product: Product) {
    this.productService.saveProduct(product);
  }

  notifyClients() {
    this.mailService.sendEmail('m0V3e@example.com', "product-added");
  }

}

class CartBloc {
  addToCart( productId: number ) {
    // Agregar al carrito de compras
    console.log('Producto: ', productId);
  }
}

const productService = new ProductService();
const mailService = new MailService();

const product = new ProductBloc( productService, mailService );
product.loadProduct(10);
product.saveProduct({ id: 10, name: 'Producto X' });
product.notifyClients();

const cart = new CartBloc();
cart.addToCart(10);