package com.prova.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.context.annotation.PropertySource;

import com.prova.controller.base.ProductBaseController;

@RestController
@PropertySource("classpath:${configfile.path}/Prova.properties")
@RequestMapping(value="${endpoint.api}", headers = "Accept=application/json")
public class ProductController extends ProductBaseController {

	//OVERRIDE HERE YOUR CUSTOM CONTROLLER

}
