import styled from 'styled-components';

export const Layout = styled.div`
    width: 85%;
    height: 100%;
    border: 1px solid #f00;
    margin: auto;
    margin-left: 300px;
    transition: all .3s ease;
`;
export const HeaderContainer = styled.div`
    position: sticky;
    top: 1rem;

    padding: 1rem;
    width: 85%;
    height: 65px;
    transition: all .3s ease;
    margin: auto;
    margin-top: 1rem;
    border-radius: 8px;
    margin-left: 300px;
    margin-bottom: 1rem;
    background: ${props => props.theme.colors.secondary};

    display: flex;
    justify-content: space-between;
`;

export const SidebarContainer = styled.div`
    position: fixed;
    left: 0;
    width: 260px;
    height: 100vh;
    overflow-y: scroll;
    height: 100vh;
    background: ${props => props.theme.colors.secondary};
    transition: all .3s ease;

    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.text};;
    }

`;