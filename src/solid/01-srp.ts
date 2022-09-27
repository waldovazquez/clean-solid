(() => {

    interface Product {
        id: number;
        name: string;
    }

    class ProductService {
        getProduct(id: number) {
            console.log('Producto: ', { id, name: 'OLED Tv' });
        }
        saveProduct(product: Product) {
            console.log('Guardando en base de datos', product);
        }
    }

    class Mailer {
        private masterEmail: string = 'waldovazquezdev@gmail.com';

        sendEmail(emailList: Array<string>, template: 'to-clients' | 'to-admins') {
            console.log('emailList: ', emailList);
            console.log('template', template);
            console.log('Enviando correo a los clientes');
        }
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct(id: number) {
            this.productService.getProduct(id);
        }

        saveProduct(product: Product) {
            this.productService.saveProduct(product);
        }

        notifyClients(emailList: Array<string>, template: 'to-clients' | 'to-admins') {
            this.mailer.sendEmail(emailList, template);
        }

    }

    class CartBloc {
        private itemsInCart: Array<Object> = [];
        addToCart(productId: number) {
            console.log('Agregando al carrito ', productId);
        }
    }

    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients(['fernando@google.com'], 'to-admins');
    cartBloc.addToCart(10);


})();