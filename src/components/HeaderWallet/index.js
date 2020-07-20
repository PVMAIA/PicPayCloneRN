import React, { useState } from "react";

import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

import {
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
} from "./styles";

const HeaderWallet = (props) => {
  const value = props.value;
  const [isVisible, setIsVisible] = useState(true);

  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }
  return (
    <>
      <Header colors={value ? ["#52E78C", "#1AB563"] : ["#D3D3D3", "#868686"]}>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? "0,00" : "----"}</Bold>
            </Value>

            <EyeButton onPress={handleToggleVisibility}>
              <Feather
                name={isVisible ? "eye" : "eye-off"}
                size={28}
                color="#fff"
              />
            </EyeButton>
          </BalanceContainer>

          <Info>Seu saldo está redendo 100% do CDI.</Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={28} color="#FFf" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>

            <Action>
              <FontAwesome name="bank" size={20} color="#FFf" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>
    </>
  );
};

export default HeaderWallet;
