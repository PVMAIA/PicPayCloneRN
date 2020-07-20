import React from "react";

import {
  PaymentMethodsContainer,
  PaymentMethodsTitle,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
} from "./styles";

import { MaterialCommunityIcons } from '@expo/vector-icons';

import CardPaymentMethods from '../../components/CardPaymentMethods/index';

const PaymentMethods = () => {
  return (
    <>
      <PaymentMethodsContainer>
        <PaymentMethodsTitle>Forma de pagamento</PaymentMethodsTitle>

        <CardPaymentMethods />

        <UseTicketContainer>
          <UseTicketButton>
            <MaterialCommunityIcons
              name="ticket-outline"
              size={20}
              color="#0DB060"
            />
            <UseTicketLabel>Usar código promocional</UseTicketLabel>
          </UseTicketButton>
        </UseTicketContainer>
      </PaymentMethodsContainer>
    </>
  );
};

export default PaymentMethods;
