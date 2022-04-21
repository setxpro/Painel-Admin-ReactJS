import styled from 'styled-components';

export const Container = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 100vh;
    width: 100%;

    background: #161D31;
    
    /* filter: blur(8px);
    -webkit-filter: blur(8px); */
`;

export const AreaContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    width: 70%;
    height: 50%;
    border-radius: 1rem;
    background: #283046;

`;

export const AreaTitle = styled.div`
  
    h1 {
        font-size: 3em;
        color: #DDD;
        mix-blend-mode: overlay;
    }
`;
export const ContentArea = styled.div`
    display: flex;
    gap: 1rem;
    a {
           
            text-decoration: none;
            padding: 1rem;
            border-radius: 1rem;
            font-weight: bold;
            border: 1px dashed #FFF;
            color: #FFF;
            background: #161D31;
            transition: all 1s ease;

            &:hover {
                background: #283046;
            }
    }
`;