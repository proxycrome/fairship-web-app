import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPaymentGateways,
  initPartPayment,
  loadUser,
  notifyAdminWalkthrough,
  verifyTransaction,
} from "../../store/actions";
import { usePaystackPayment } from "react-paystack";
import { useHistory } from "react-router-dom";

const PaystackIntegration = ({
  amount,
  id,
  transactionRef,
  apartmentType,
  planType,
  paymentType,
  setShow
}) => {
  const { paymentData } = useSelector((state) => state.payment);
  const { user } = useSelector((state) => state.Account);
  const { noteLoading } = useSelector((state) => state.Properties);
  const { loading } = useSelector((state) => state.Maintenance);
  console.log(paymentData);

  const config = {
    reference: transactionRef,
    email: user?.email,
    amount: amount * 100,
    publicKey: paymentData && paymentData[0]?.publicKey.split(" ")[1],
  };
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getPaymentGateways());
    dispatch(loadUser());
  }, [dispatch]);
  

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    if (paymentType === "WALKTHROUGH") {
      if (reference?.reference) {
        const formData = {
          apartmentType,
          planType,
          propertyId: Number(id),
        };
        dispatch(notifyAdminWalkthrough(formData, setShow));
      }
    }

    if(paymentType === "PART") {
      dispatch(verifyTransaction(transactionRef, setShow));
    }
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);
  return (
    <>
      {paymentType === "WALKTHROUGH" ? (
        <button
        className="btn btn-success w-lg"
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        {noteLoading ? "LOADING..." : "Pay"}
      </button>
      ) : paymentType === "PART" ? (
        <button
        className="btn btn-success w-lg"
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        {loading ? "LOADING..." : "Pay"}
      </button>
      ) : null}
    </>
  );
};

export default PaystackIntegration;

