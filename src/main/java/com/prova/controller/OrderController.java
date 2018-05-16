package com.prova.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.context.annotation.PropertySource;

import com.prova.controller.base.OrderBaseController;

@RestController
@PropertySource("classpath:${configfile.path}/Prova.properties")
@RequestMapping(value="${endpoint.api}", headers = "Accept=application/json")
public class OrderController extends OrderBaseController {

	//OVERRIDE HERE YOUR CUSTOM CONTROLLER

}
