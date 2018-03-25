package com.wemanity.bank.dao;


import com.wemanity.bank.model.Account;

/**
 * Created by mohamed on 2018/03/20
 */
public interface AccountDAO extends CrudService<Account, String> {

	/**
	 * DAO : fetch customer account by account number
	 * @param accountNumber : account number
	 * @return : {@link Account}
	 */
	public Account findByAccountNumber(String accountNumber); //throws Exception, ApplicationException;
}
