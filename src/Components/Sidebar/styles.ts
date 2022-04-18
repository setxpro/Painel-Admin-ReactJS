import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;
`;
export const AreaLogo = styled.div`
    position: fixed;
    top: 0;
    background: ${props => props.theme.colors.secondary};
    padding-top: 10px;
    padding-bottom: 5px;
    width: 259px;
    margin-left: -25px;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s ease;

    img {
        height: 70px;
    }
`;
export const ContainerScroll = styled.div`
    margin-top: 6rem;
    
`;
