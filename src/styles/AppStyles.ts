import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
`;
export const ContainerGenerate = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
