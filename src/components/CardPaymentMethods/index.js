import React from "react";

import {
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
} from "./styles";

import creditCard from '../../images/credit-card.png';

import { AntDesign } from '@expo/vector-icons';

const CardPaymentMethods = () => {
  return (
    <>
      <Card>
        <CardBody>
          <CardDetails>
            <CardTitle>Cadastre seu cartão de crédito</CardTitle>

            <CardInfo>
              Cadastre seu cartão de crédito para poder fazer pagamentos mesmo
              quando não tiver saldo no seu PicPay.
            </CardInfo>
          </CardDetails>

          <Img source={creditCard} resizeMode="contain" />
        </CardBody>

        <AddButton>
          <AntDesign name="pluscircleo" size={30} color="#0DB060" />
          <AddLabel>Adicionar cartão de crédito</AddLabel>
        </AddButton>
      </Card>
    </>
  );
};

export default CardPaymentMethods;
