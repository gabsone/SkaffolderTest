package com.prova.db.prova_db.service.base;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.prova.db.prova_db.entity.Order;

//IMPORT RELATIONS
import com.prova.db.prova_db.entity.Product;
import com.prova.db.prova_db.entity.User;

@Service
public class OrderBaseService {

	
	@Autowired
	private Datastore datastore;


    //CRUD METHODS
    
    	
        	
        //CRUD - CREATE
    	
	public Order insert(Order obj) {
		datastore.save(obj);
		return obj;
	}
	
    	
    //CRUD - REMOVE
    
	public void delete(String id) {
		Query<Order> query = datastore.createQuery(Order.class).field("_id").equal(new ObjectId(id));
		datastore.delete(query);
	}

    	
    //CRUD - GET ONE
    	
	public Order get(String id) {
		return datastore.find(Order.class).field("_id").equal(new ObjectId(id)).get();
	}

    	
        	
    //CRUD - GET LIST
    	
	public List<Order> getList() {
		return (ArrayList<Order>) datastore.find(Order.class).asList();
	}

    	
    //CRUD - EDIT
    	
	public Order update(Order obj) {
		datastore.save(obj);
		return obj;
	}
	
    	
    
    

    
    /*
     * CUSTOM SERVICES
     * 
     *	These services will be overwritten and implemented in OrderService.java
     */
    
    
    /*
    
    YOU CAN COPY AND MODIFY THIS METHOD IN OrderService.java
    
    Name: MakeOrder
    Description: crea un nuovo ordine
    Params: 
    	ciocio prod - 
    */
	public Object MakeOrder () {
		
        return null;
        
	}
	
	
    
    /*
    
    YOU CAN COPY AND MODIFY THIS METHOD IN OrderService.java
    
    Name: MakeOrder
    Description: crea un nuovo ordine
    Params: 
    	ciocio prod - 
    */
	public Object MakeOrder () {
		
        return null;
        
	}
	
	


}
