package com.wemanity.bank.dao;


import com.wemanity.bank.model.Customer;

/**
 * Created by mohamed on 2018/03/20
 */
public interface CustomerDAO extends CrudService<Customer, String> {

	/**
	 * This method aims to find customer by customer number
	 * @param customerNumber : customer number
	 * @return {@link Customer}
	 */
	public Customer findByCustomerNumber(String customerNumber); //  throws Exception, ApplicationException;	;
}
