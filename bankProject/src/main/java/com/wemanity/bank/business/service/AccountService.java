package com.wemanity.bank.business.service;

import java.util.List;

import com.wemanity.bank.model.Account;

/**
 * Created by mohamed on 2018/03/20
 */
public interface AccountService {

	/**
	 * this method aims to retrieve Account by account number
	 * 
	 * @author mohamed
	 * @param accountNumber
	 *            : the account number
	 * @return {@link Account}
	 */
	public Account findByAccountNumber(String accountNumber);

	/**
	 * saving new account
	 * 
	 * @author mohamed
	 * @param account
	 *            :{@link Account} account form to save
	 * @return {@link Account}
	 */
	public Account save(Account account);

	/**
	 * update account
	 * 
	 * @author mohamed
	 * @param account:
	 *            {@link Account} account form to save
	 * @return {@link Account}
	 */
	public Account update(Account acoount);

	/**
	 * Delete customer account
	 * 
	 * @author mohamed
	 * @param accountNumber:
	 *            account number
	 * @return {@link Boolean} status
	 */
	public Boolean delete(String accountNumber);

	/**
	 * Retrieve accounts list
	 * 
	 * @author mohamed
	 * @return {@link List<Account>} accounts list
	 */
	public List<Account> getAllAccounts();

}
