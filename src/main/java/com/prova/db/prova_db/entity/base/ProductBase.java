package com.prova.db.prova_db.entity.base;

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
 *  FOR CUSTOMIZE ProductBase PLEASE EDIT ../Product.java
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER CODE GENERATION --
 * 
 */
 

/**
 * This is the model of Product object
 * 
 */
 
import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.Entity;
import java.util.Date;
import java.util.List;

import org.mongodb.morphia.annotations.Id;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import com.prova.utils.ObjectIdListSerializer;


//IMPORT RELATIONS
import com.prova.db.prova_db.entity.Product;

@Entity("Product")
public class ProductBase {
	
	@Id
	@JsonSerialize(using = ToStringSerializer.class)
	private ObjectId _id;
	
	// Attributes
	private String  name;
	private   price;
	
	
	
	
	

    // GETTER AND SETTER
    
	public ObjectId get_id() {
		return _id;
	}

	public void set_id(ObjectId id) {
		this._id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}
	public  getPrice() {
		return price;
	}


	public void setPrice( price) {
		this.price = price;
	}

	
    
    
    
    
}