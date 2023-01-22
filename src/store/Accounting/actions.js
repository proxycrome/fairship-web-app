import {
    CLEAR_MESSAGES,
  DELETE_ACCOUNT,
  DELETE_ACCOUNT_ERROR,
  DELETE_ACCOUNT_SUCCESS,
  FETCH_BANKS,
  FETCH_BANKS_ERROR,
  FETCH_BANKS_SUCCESSFUL,
  GET_ACCOUNTS,
  GET_ACCOUNTS_ERROR,
  GET_ACCOUNTS_SUCCESSFUL,
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_ERROR,
  GET_TRANSACTIONS_SUCCESSFUL,
  POST_ACCOUNT,
  POST_ACCOUNT_ERROR,
  POST_ACCOUNT_SUCCESSFUL,
  POST_TRANSACTION,
  POST_TRANSACTION_ERROR,
  POST_TRANSACTION_SUCCESSFUL,
} from './actionTypes';

export const fetchBanks = () => {
  return {
    type: FETCH_BANKS,
  };
};

export const fetchBanksSuccessful = (data) => {
  return {
    type: FETCH_BANKS_SUCCESSFUL,
    payload: data,
  };
};

export const fetchBanksError = (error) => {
  return {
    type: FETCH_BANKS_ERROR,
    payload: error,
  };
};

export const postAccount = (formData) => {
  return {
    type: POST_ACCOUNT,
    payload: { formData },
  };
};

export const postAccountSuccessful = (data) => {
  return {
    type: POST_ACCOUNT_SUCCESSFUL,
    payload: data,
  };
};

export const postAccountError = (error) => {
  return {
    type: POST_ACCOUNT_ERROR,
    payload: error,
  };
};

export const getAccounts = () => {
  return {
    type: GET_ACCOUNTS,
  };
};

export const getAccountsSuccessful = (data) => {
  return {
    type: GET_ACCOUNTS_SUCCESSFUL,
    payload: data,
  };
};

export const getAccountError = (error) => {
  return {
    type: GET_ACCOUNTS_ERROR,
    payload: error,
  };
};

export const getTransactions = () => {
    return {
        type: GET_TRANSACTIONS,
    }
}

export const getTransactionsSuccessful = (data) => {
    return {
        type: GET_TRANSACTIONS_SUCCESSFUL,
        payload: data,
    }
}

export const getTransactionsError = (error) => {
    return {
        type: GET_TRANSACTIONS_ERROR,
        payload: error,
    }
}

export const postTransaction = (formData, closePage) => {
    return {
        type: POST_TRANSACTION,
        payload: {formData, closePage},
    }
}

export const postTransactionSuccessful = (data) => {
    return {
        type: POST_TRANSACTION_SUCCESSFUL,
        payload: data,
    }
}

export const postTransactionError = (error) => {
    return {
        type: POST_TRANSACTION_ERROR,
        payload: error,
    }
}

export const clearMessages = () => {
    return {
        type: CLEAR_MESSAGES,
    }
}

export const deleteAccount = (accountId) => {
  return {
    type: DELETE_ACCOUNT,
    payload: {accountId},
  }
}

export const deleteAccountSuccess = (data) => {
  return {
    type: DELETE_ACCOUNT_SUCCESS,
    payload: data,
  }
}

export const deleteAccountError = (error) => {
  return {
    type: DELETE_ACCOUNT_ERROR,
    payload: error,
  }
}