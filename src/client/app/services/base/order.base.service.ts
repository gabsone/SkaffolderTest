/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  FOR CUSTOMIZE OrderBaseService PLEASE EDIT ../Order.service.ts
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT EASYDEV'S CODE GENERATION --
 * 
 */
 
//DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../../security/authentication.service';

// MODEL
import { Order } from '../../domain/prova_db/order';

// CONFIG
import { config } from "../../../config/properties";

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Order.service.ts
 */
 
/*
 * SCHEMA DB Order
 * 
	{
		date: {
			type: 'Date', 
			required : true
		},
		total: {
			type: 'Decimal'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		product: [{
			type: Schema.ObjectId,
			ref : "Order"
		}],
		user: {
			type: Schema.ObjectId,
			ref : "Order"
		},
		
	}
 * 
 */
@Injectable()
export class OrderBaseService {

    contextUrl:string = config.host + "/orders";
    constructor(
        protected http: Http,
        protected authenticationService: AuthenticationService) {
        
    }

//CRUD METHODS
	
	/**
     * Create new item
     */
     create(item: Order): Observable<Order> {
        return this.http
            .post(this.contextUrl, item)
            .map(response => response.json());
    }
	
	/**
     * Remove one item by id
     */
     remove(id: string): Observable<void> {
        return this.http
            .delete(this.contextUrl + "/" + id)
            .map(response => null);
    }
	
    /**
     * Get one item by id
     */
	
	get(id: string): Observable<Order> {
        return this.http
            .get(this.contextUrl + "/" + id)
            .map(response => response.json() as Order)
    }

	
    /**
     * Get list of items
     */
	
	list(): Observable<Order[]> {
        return this.http
            .get(this.contextUrl)
            .map(response => response.json() as Order[])
    }
	
    /**
     * Update item
     */
	update(item: Order): Observable<Order> {
        return this.http
            .post(this.contextUrl + '/' + item._id, item)
            .map(response => response.json())
    }




    /*
    Name: MakeOrder
    Description: crea un nuovo ordine
    Params: 
    	ciocio prod - 
    */
    
    MakeOrder(...params:any[]): Observable<any> {
        return this.http
            .post(this.contextUrl + "make", {})
            .map(response => response.json());
    }
		

    /*
    Name: MakeOrder
    Description: crea un nuovo ordine
    Params: 
    	ciocio prod - 
    */
    
    MakeOrder(...params:any[]): Observable<any> {
        return this.http
            .post(this.contextUrl + "/make", {})
            .map(response => response.json());
    }
		
}
