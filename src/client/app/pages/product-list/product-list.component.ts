// Import Libraries
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ModalRemoveComponent } from '../../components/modal-remove.component';


// Import Services
import { ProductService } from '../../services/product.service';

// Import Models
import { Product } from '../../domain/prova_db/product';

import { Order } from '../../domain/prova_db/order';

// START - USED SERVICES
/*
 *	ProductService.delete
 *		PARAMS: 
 *		
 *
 *	ProductService.list
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

@Component({
    selector: "product-list",
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    
    // Attributes
    list: Product[];
    search: any = {};
    idSelected: string;
    
    // Constructor
    constructor(
        private productService: ProductService, 
        public dialog: MatDialog) {}

    // Functions
    ngOnInit(): void {
        this.productService.list().subscribe(list => this.list = list);
    }

    openModal(id: string): void {
        let dialogRef = this.dialog.open(ModalRemoveComponent, {
            width: '250px',
            data: () => {
                // Execute on confirm
                this.productService.remove(id).subscribe(() => {
                    dialogRef.close();
                });
                this.list = this.list.filter(item => item._id != id);
            }
        });
    }

}