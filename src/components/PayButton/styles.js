import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Button = styled(LinearGradient)`
    width: 55px;
    height: 55px;
    border-radius: 27.5px;
    align-items: center;
    justify-content: center;
    margin-bottom: 6px;
`;

export const Label = styled.Text`
    font-size: 11px; 
    color: ${({ focused }) => focused ? '#fff' : '#fff'}
`;