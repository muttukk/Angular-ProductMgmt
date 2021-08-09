import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    //selector: "pm-product",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})

export class ProductListComponent implements OnInit,OnDestroy {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string = "";
    sub!:Subscription
    /* private _ProductService:ProductService;
     constructor(productService:ProductService) {
         this._ProductService=productService;
     } 
     SHORTHAND SYTAX IS MENTIONED BELOW
     */
    // protector level for productService can be public or protected
    constructor(private productService: ProductService) {

    }

    private _listFilter: string = "";

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filterdProducts = this.performFilter(value);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    filterdProducts: IProduct[] = [];

    products: IProduct[] = [];
    /*  [ {
           "productId": 1,
           "productName": "Leaf Rake",
           "productCode": "GDN-0011",
           "releaseDate": "March 19, 2021",
           "description": "Leaf rake with 48-inch wooden handle.",
           "price": 19.95,
           "starRating": 3.2,
           "imageUrl": "assets/images/leaf_rake.png"
       },
       {
           "productId": 2,
           "productName": "Garden Cart",
           "productCode": "GDN-0023",
           "releaseDate": "March 18, 2021",
           "description": "15 gallon capacity rolling garden cart",
           "price": 32.99,
           "starRating": 4.2,
           "imageUrl": "assets/images/garden_cart.png"
       }
   ];*/

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().includes(filterBy));
    }

    ngOnInit() {
        //console.log("Message From Product Component")
        //this.products=this.productService.getProducts();
       this.sub= this.productService.getProducts().subscribe({
            next: productsReturn => {
                this.products = productsReturn;
                this.filterdProducts=this.products;
            },
            error:err=>this.errorMessage=err
        });
        this.filterdProducts = this.products;
        /*console.log(this._listFilter);*/
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List :" + message;
    }
}