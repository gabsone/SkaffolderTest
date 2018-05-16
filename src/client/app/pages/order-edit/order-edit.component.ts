// Import Libraries
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { OrderService } from '../../services/order.service';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';

// Import Models
import { Order } from '../../domain/prova_db/order';
import { Product } from '../../domain/prova_db/product';import { User } from '../../domain/prova_db/user';
// START - USED SERVICES
/*
 *	OrderService.create
 *		PARAMS: 
 *		
 *
 *	OrderService.get
 *		PARAMS: 
 *					ObjectId id - Id 
 *		
 *
 *	ProductService.list
 *		PARAMS: 
 *		
 *
 *	UserService.list
 *		PARAMS: 
 *		
 *
 *	OrderService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * OrderService  
 * ProductService  
 * UserService  
 */
// END - REQUIRED RESOURCES

/**
 * Edit component for OrderEdit
 */
@Component({
    selector: 'order-edit',
    templateUrl : './order-edit.component.html',
    styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

    item: Order;
    listProduct: Product[];
    listUser: User[];
    model: Order;
    
    constructor(
        private orderService: OrderService,
        private productService: ProductService,
        private userService: UserService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init item
        this.item = new Order();
    }

    ngOnInit(): void {
            this.route.params.subscribe(param => {
                let id: string = param['id'];
                if (id !== 'new') {
                    // Get item from server 
                    this.orderService.get(id).subscribe(item => this.item = item);
                    
                    
                }
                this.productService.list().subscribe(list => this.listProduct = list);
                this.userService.list().subscribe(list => this.listUser = list);
            });
    }

    /**
     * Save Item
     */
    save (formValid:boolean, item: Order): void{
        if (formValid) {
            if(item._id){
                this.orderService.update(item).subscribe(data => this.goBack());
            } else {
                this.orderService.create(item).subscribe(data => this.goBack());
            }  
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }
    
    /**
     * Product Relations utils functions
     */
    containProduct(id: string){
        if(!this.item.product) return false;
        return this.item.product.indexOf(id) != -1;
    }
    
    addProduct(id: string) {
        if(!this.item.product)
            this.item.product = [];
        this.item.product.push(id);
    }
    
    removeProduct(index: number) {
        this.item.product.splice(index,1);
    }

}