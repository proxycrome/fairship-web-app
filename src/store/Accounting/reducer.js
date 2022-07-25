import {
  CLEAR_MESSAGES,
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

const initialState = {
  loading: false,
  banks: null,
  banksError: null,
  message: null,
  errorMessage: null,
  accounts: null,
  accountsError: null,
  transactions: null,
  transactionsError: null,
  transMessage: null,
  transErrorMessage: null
};

const Accounting = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BANKS:
      state = {
        loading: true,
        banks: null,
        banksError: null,
      };
      break;

    case FETCH_BANKS_SUCCESSFUL:
      state = {
        loading: false,
        banks: action.payload,
        banksError: null,
      };
      break;

    case FETCH_BANKS_ERROR:
      state = {
        loading: false,
        banks: null,
        banksError: action.payload,
      };
      break;

    case POST_ACCOUNT:
      state = {
        loading: true,
        message: null,
        errorMessage: null,
      };
      break;

    case POST_ACCOUNT_SUCCESSFUL:
      state = {
        loading: false,
        message: action.payload,
        errorMessage: null,
      };
      break;

    case POST_ACCOUNT_ERROR:
      state = {
        loading: false,
        message: null,
        errorMessage: action.payload,
      };
      break;

    case GET_ACCOUNTS:
      state = {
        loading: true,
        accounts: null,
        accountsError: null,
      };
      break;

    case GET_ACCOUNTS_SUCCESSFUL:
      state = {
        loading: false,
        accounts: action.payload,
        accountsError: null,
      };
      break;

    case GET_ACCOUNTS_ERROR:
      state = {
        loading: false,
        accounts: null,
        accountsError: action.payload,
      };
      break;

    case GET_TRANSACTIONS:
        state = {
            loading: true,
            transactions: null,
            transactionsError: null,
        }
        break;
    
    case GET_TRANSACTIONS_SUCCESSFUL:
        state = {
            loading: false,
            transactions: action.payload,
            transactionsError: null,
        }
        break;
        
    case GET_TRANSACTIONS_ERROR:
        state = {
            loading: false,
            transactions: null,
            transactionsError: action.payload,
        }
        break;

    case POST_TRANSACTION:
        state = {
            loading: true,
            transMessage: null,
            transErrorMessage: null,
        }
        break;

    case POST_TRANSACTION_SUCCESSFUL:
        state = {
            loading: false,
            transMessage: action.payload,
            transErrorMessage: null,
        }
        break;

    case POST_TRANSACTION_ERROR:
        state = {
            loading: false,
            transMessage: null,
            transErrorMessage: action.payload,
        }
        break;

    case CLEAR_MESSAGES:
      state = {
        message: null,
        errorMessage: null,
        transMessage: null,
        transErrorMessage: null,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default Accounting;
