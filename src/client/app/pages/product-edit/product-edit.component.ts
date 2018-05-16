// Import Libraries
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { ProductService } from '../../services/product.service';

// Import Models
import { Product } from '../../domain/prova_db/product';

import { Order } from '../../domain/prova_db/order';

// START - USED SERVICES
/*
 *	ProductService.create
 *		PARAMS: 
 *		
 *
 *	ProductService.get
 *		PARAMS: 
 *		
 *
 *	ProductService.update
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * ProductService  
 */
// END - REQUIRED RESOURCES

/**
 * Edit component for ProductEdit
 */
@Component({
    selector: 'product-edit',
    templateUrl : './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

    item: Product;
    listProduct: Product[];
	externalOrder: Order[];
    model: Product;
    
    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init item
        this.item = new Product();
	   this.externalOrder = [];
    }

    ngOnInit(): void {
            this.route.params.subscribe(param => {
                let id: string = param['id'];
                if (id !== 'new') {
                    // Get item from server 
                    this.productService.get(id).subscribe(item => this.item = item);
                    
                    
                    this.orderService.findByProduct(id).subscribe(list => this.externalOrder = list);
                    
                }
            });
    }

    /**
     * Save Item
     */
    save (formValid:boolean, item: Product): void{
        if (formValid) {
            if(item._id){
                this.productService.update(item).subscribe(data => this.goBack());
            } else {
                this.productService.create(item).subscribe(data => this.goBack());
            }  
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }
    

}