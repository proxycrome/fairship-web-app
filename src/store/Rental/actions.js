import {
    FETCH_RENTAL,
    FETCH_RENTAL_SUCCESSFUL,
    FETCH_RENTAL_ERROR,
  } from './actionTypes.js';

//Fetch Rental Id import
import {
  FETCH_RENTAL_RECOMMENDATION,
  FETCH_RENTAL_RECOMMENDATION_SUCCESSFUL,
  FETCH_RENTAL_RECOMMENDATION_ERROR,
  PUT_TENANT_RECOMMENDATION,
  PUT_TENANT_RECOMMENDATION_SUCCESSFUL,
  PUT_TENANT_RECOMMENDATION_ERROR
}  from './actionTypes';
  
  // Fetch Rental
  export const fetchRental = () => {
    return {
      type: FETCH_RENTAL,
    };
  };
  
  export const fetchRentalSuccessful = (data) => {
    return {
      type: FETCH_RENTAL_SUCCESSFUL,
      payload: data,
    };
  };
  
  export const fetchRentalError = (error) => {
    return {
      type: FETCH_RENTAL_ERROR,
      payload: error,
    };
  };

  //Fetch Rental id

  export const fetchRentalRecommendation = (rentalId) => {
    return {
      type: FETCH_RENTAL_RECOMMENDATION,
      rentalId
    };
  };
  
  export const fetchRentalRecommendationSuccessful = (data) => {
    return {
      type: FETCH_RENTAL_RECOMMENDATION_SUCCESSFUL,
      data
    };
  };
  
  export const fetchRentalRecommendationError = (error) => {
    return {
      type: FETCH_RENTAL_RECOMMENDATION_ERROR,
      error
    };
  };

  //PutTenant Recommendation

  export const PutTenantRecommendation = (rentalId, data) => {
    return {
      type: PUT_TENANT_RECOMMENDATION,
      payload : {rentalId, data}
    };
  };
  
  export const PutTenantRecommendationSuccessful = (data) => {
    return {
      type: PUT_TENANT_RECOMMENDATION_SUCCESSFUL,
      data
    };
  };
  
  export const PutTenantRecommendationError = (error) => {
    return {
      type: PUT_TENANT_RECOMMENDATION_ERROR,
      error
    };
  };

  