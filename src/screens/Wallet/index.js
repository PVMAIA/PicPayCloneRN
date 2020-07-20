import React, { useState } from "react";

import FocusAwareStatusBar from "../../components/FocusAwareStatusBar/index";

import { Switch } from "react-native";

import HeaderWallet from '../../components/HeaderWallet/index';
import PaymentMethods from "../../components/PaymentMethods/index";

import {
  Wrapper,
  Container,
  UserBalance,
  UserBalanceTitle,
} from "./styles";

const Wallet = () => {
  
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }

  return (
    <>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={useBalance ? "#52E78C" : "#D3D3D3"}
      />
      <Wrapper>
        <Container>
          <HeaderWallet value={useBalance}/>

          <UserBalance>
            <UserBalanceTitle>Usar saldo ao pagar</UserBalanceTitle>

            <Switch
              value={useBalance}
              onValueChange={handleToggleUseBalance}
              trackColor={{
                false: "#D3D3D3",
                true: "#52E78C",
              }}
              thumbColor={useBalance ? "#52E78C" : "#D3D3D3"}
            />
          </UserBalance>

          <PaymentMethods />
        </Container>
      </Wrapper>
    </>
  );
};

export default Wallet;
