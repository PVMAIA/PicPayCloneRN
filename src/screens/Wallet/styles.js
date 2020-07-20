import styled from 'styled-components/native';

export const Wrapper = styled.View`
    background: #000;
    flex: 1;
`;

export const Container = styled.ScrollView.attrs(() => ({
    showsVerticalScrollIndicator: false,
}))`

`;

export const UserBalance = styled.View`
    background: #1c1c1e;
    height: 60px;
    flex-direction: row;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
`;

export const UserBalanceTitle = styled.Text` 
    color: #fff;
    font-size: 16px;
    font-weight: 500;
`;


