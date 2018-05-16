package com.prova.controller.base;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.bson.types.ObjectId;
import org.springframework.security.access.annotation.Secured;
import org.springframework.beans.factory.annotation.Autowired;
import com.prova.db.prova_db.service.OrderService;
import com.prova.db.prova_db.entity.Order;

//IMPORT RELATIONS
import com.prova.db.prova_db.entity.Product;
import com.prova.db.prova_db.entity.User;

public class OrderBaseController {
    
    @Autowired
	OrderService orderService;



//CRUD METHODS


    //CRUD - CREATE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/orders",method = RequestMethod.POST, headers = "Accept=application/json")
	public Order insert(@RequestBody Order obj) {
		 return orderService.insert(obj);
	}

	
    //CRUD - REMOVE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/orders/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
	public void delete(@PathVariable("id") String id) {
		orderService.delete(id);
	}
	
	
    //CRUD - GET ONE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/orders/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
	public Order get(@PathVariable String id) {
		return orderService.get(id);
	}
	
	
    //CRUD - GET LIST
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/orders", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Order> getList() {
		return orderService.getList();
	}
	
	

    //CRUD - EDIT
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/orders/{id}", method = RequestMethod.POST, headers = "Accept=application/json")
	public Order update(@RequestBody Order obj) {
		return orderService.update(obj);
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


    /*
    Name: MakeOrder
    Description: crea un nuovo ordine
    Params: 
    	ciocio prod - 
    
    
    @RequestMapping(value = "/ordersmake", method = RequestMethod.POST, headers = "Accept=application/json")
    public Object MakeOrder() {
		return new HashMap<String, String>();
    }
    */
    		

    /*
    Name: MakeOrder
    Description: crea un nuovo ordine
    Params: 
    	ciocio prod - 
    
    
    @RequestMapping(value = "/orders/make", method = RequestMethod.POST, headers = "Accept=application/json")
    public Object MakeOrder() {
		return new HashMap<String, String>();
    }
    */
    		

	
}
