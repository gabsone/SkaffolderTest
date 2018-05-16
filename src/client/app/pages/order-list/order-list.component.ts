// Import Libraries
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ModalRemoveComponent } from '../../components/modal-remove.component';


// Import Services
import { OrderService } from '../../services/order.service';

// Import Models
import { Order } from '../../domain/prova_db/order';
import { Product } from '../../domain/prova_db/product';import { User } from '../../domain/prova_db/user';
// START - USED SERVICES
/*
 *	OrderService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	OrderService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * OrderService  
 */
// END - REQUIRED RESOURCES

@Component({
    selector: "order-list",
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
    
    // Attributes
    list: Order[];
    search: any = {};
    idSelected: string;
    
    // Constructor
    constructor(
        private orderService: OrderService, 
        public dialog: MatDialog) {}

    // Functions
    ngOnInit(): void {
        this.orderService.list().subscribe(list => this.list = list);
    }

    openModal(id: string): void {
        let dialogRef = this.dialog.open(ModalRemoveComponent, {
            width: '250px',
            data: () => {
                // Execute on confirm
                this.orderService.remove(id).subscribe(() => {
                    dialogRef.close();
                });
                this.list = this.list.filter(item => item._id != id);
            }
        });
    }

}