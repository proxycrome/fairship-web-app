import {
    FETCH_RENTAL,
    FETCH_RENTAL_SUCCESSFUL,
    FETCH_RENTAL_ERROR,
    // FETCH_RENTAL2,
    // FETCH_RENTAL_SUCCESSFUL2,
    // FETCH_RENTAL_ERROR2,
    // FETCH_RENTAL3,
    // FETCH_RENTAL_SUCCESSFUL3,
    // FETCH_RENTAL_ERROR3,
  } from './actionTypes.js';

//Fetch Rental Id import
import {
  FETCH_RENTAL_RECOMMENDATION,
  FETCH_RENTAL_RECOMMENDATION_SUCCESSFUL,
  FETCH_RENTAL_RECOMMENDATION_ERROR,
  PUT_TENANT_RECOMMENDATION,
  PUT_TENANT_RECOMMENDATION_SUCCESSFUL,
  PUT_TENANT_RECOMMENDATION_ERROR,
  PUT_DATA_RECOMMENDATION,
  PUT_DATA_RECOMMENDATION_SUCCESSFUL,
  PUT_DATA_RECOMMENDATION_ERROR,
  DILIGENCE_RECOMMENDATION,
  DILIGENCE_RECOMMENDATION_SUCCESSFUL,
  DILIGENCE_RECOMMENDATION_ERROR
}  from './actionTypes';
  
  // Fetch Rental
  export const fetchRental = (payload) => {
    return {
      type: FETCH_RENTAL,
      payload
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

  // export const fetchRental2 = () => {
  //   return {
  //     type: FETCH_RENTAL2,
  //   };
  // };
  
  // export const fetchRentalSuccessful2 = (data) => {
  //   return {
  //     type: FETCH_RENTAL_SUCCESSFUL2,
  //     payload: data,
  //   };
  // };
  
  // export const fetchRentalError2 = (error) => {
  //   return {
  //     type: FETCH_RENTAL_ERROR2,
  //     payload: error,
  //   };
  // };


  // export const fetchRental3 = () => {
  //   return {
  //     type: FETCH_RENTAL3,
  //   };
  // };
  
  // export const fetchRentalSuccessful3 = (data) => {
  //   return {
  //     type: FETCH_RENTAL_SUCCESSFUL3,
  //     payload: data,
  //   };
  // };
  
  // export const fetchRentalError3 = (error) => {
  //   return {
  //     type: FETCH_RENTAL_ERROR3,
  //     payload: error,
  //   };
  // };

  //Fetch Rental id

  export const fetchRentalRecommendation = (rentalId) => {
    return {
      type: FETCH_RENTAL_RECOMMENDATION,
      rentalId
    };
  };
  
  export const fetchRentalRecommendationSuccessful = (data) => {
    console.log(data)
    return {
      type: FETCH_RENTAL_RECOMMENDATION_SUCCESSFUL,
      payload: data
    };
  };
  
  export const fetchRentalRecommendationError = (error) => {
    return {
      type: FETCH_RENTAL_RECOMMENDATION_ERROR,
      error
    };
  };

  //PutTenant Recommendation

  export const PutTenantRecommendation = (tenantId, data) => {
    // console.log(tenantId, data)
    return {
      type: PUT_TENANT_RECOMMENDATION,
      payload : {tenantId, data}
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

  ////Put data for review part of rejection

  export const PutDataRecommendation = (data) => {
    console.log(data)
    return {
      type: PUT_DATA_RECOMMENDATION,
      payload : {data}
    };
  };
  
  export const PutDataRecommendationSuccessful = (data) => {
    return {
      type: PUT_DATA_RECOMMENDATION_SUCCESSFUL,
      data
    };
  };
  
  export const PutDataRecommendationError = (error) => {
    return {
      type: PUT_DATA_RECOMMENDATION_ERROR,
      error
    };
  };

  //Diligence
  export const DiligenceRecommendation = (tenantId, data) => {
    console.log(data)
    return {
      type: DILIGENCE_RECOMMENDATION,
      payload : {tenantId, data}
    };
  };
  
  export const DiligenceRecommendationSuccessful = (data) => {
    return {
      type: DILIGENCE_RECOMMENDATION_SUCCESSFUL,
      data
    };
  };
  
  export const DiligenceRecommendationError = (error) => {
    return {
      type: DILIGENCE_RECOMMENDATION_ERROR,
      error
    };
  };