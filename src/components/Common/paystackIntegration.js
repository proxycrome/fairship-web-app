import React, { useEffect } from 'react';
import { PaystackButton } from 'react-paystack';
import { useDispatch, useSelector } from 'react-redux';
import { getPaymentGateways, loadUser, notifyAdminWalkthrough } from '../../store/actions';
import { useHistory } from 'react-router-dom';

const PaystackIntegration = ({amount, id, apartmentType, planType}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {paymentData} = useSelector(state => state.payment);
  const { user } = useSelector(state => state.Account)
  console.log(paymentData);

  const componentProps = {
    email: user?.email,
    amount: amount * 100,
    publicKey: paymentData && paymentData[0]?.publicKey.split(" ")[1],
    text: "Pay",
    onSuccess: (transaction) => {
        // window.location.href(`https://api.paystack.co/transaction/verify/${transaction.reference}`)
        // alert(`${transaction.reference}`);
        if(transaction?.reference) {
            const formData = {
                apartmentType,
                planType,
                propertyId: Number(id),
            }
            dispatch(notifyAdminWalkthrough(formData, history, id))
        }    
    }, 
    onClose: () => {},
  }


  useEffect(() => {
    dispatch(getPaymentGateways());
    dispatch(loadUser())
  }, [dispatch])

  return (
    <div>
      <PaystackButton {...componentProps} />
    </div>
  );
};

export default PaystackIntegration;