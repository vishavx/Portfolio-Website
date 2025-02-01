import { LightningElement,wire } from 'lwc';
import getAllProducts from '@salesforce/apex/ggproducts.getAllProducts';
import BackgroundImg from '@salesforce/resourceUrl/portfolioPictures'

export default class Gg extends LightningElement {

    products = [];
    filteredProducts = [];
    // image= Image_Url + '/PortfolioProjectPics/bg.png'
    imageUrl = BackgroundImg + '/PortfolioProjectPics/bg.png' ;

    connectedCallback() {
        // Dynamically set the style for the background image using a custom property
        this.template.host.style.setProperty('--background-image', `url(${this.imageUrl})`);
    }
    
    @wire(getAllProducts)
    ggproducts({ data, error }) {
        if (data) {
            this.products = data;
            console.log(this.products);
        } else if (error) {
            console.error('Error retrieving products:', error);
        }
    }

    handleClick1() {
        console.log("hello1");
        this.filteredProducts = this.products.filter(
            product => product.Category__c === "Handicrafts"
        );
    }
    handleClick2() {
        this.filteredProducts = this.products.filter(
            product => product.Category__c === "Curtain"
        );
    }
    handleClick3() {
        this.filteredProducts = this.products.filter(
            product => product.Category__c === "Bedsheet"
        );
    }
    
    // to implement image and product for guest user do these steps
    // public pages on builder
    // general setting access on builder
    // Relaxed Permit Access to Inline Scripts and Allowed Hosts- on builder
    // on workspace administrator give 2 permissions for guest user
    // give apex class permission
    // on guest user profile give object read, field read permission for document,product object
    // make sharing rule for guest user profile on product object
}