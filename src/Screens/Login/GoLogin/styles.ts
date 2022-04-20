import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: #161D31;

    display: flex;
    align-items: center;
    justify-content: center;
    

    color: #D0D2D6;
`;
export const AreaForm = styled.div`
    height: 70%;
    width: 50%;
    background: #283046;
    border-radius: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Form = styled.form`
    width: 60%;
    
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    position: relative;

    input {
        padding: 10px 0;
        font-size: 1rem;
        color: #D0D2D6;
        border: none;
        outline: none;
        border-bottom: 2px solid #DDd;
        background-color: transparent;
        margin-bottom: 30px;
    }

    input:focus ~ label {
            font-size: 12px;
            color: #00ffa9;
            top: -20px;
            left: 0;
        }
    
    label {
        position: absolute;
        top: 0;
        left: 0;
        transition: .5s ease;
        padding: 10px 0;
        pointer-events: none;
        font-size: 16px;
        color: rgba(255,255,255,0.3);

        
    }
`;

export const Button = styled.button`
    padding: 10px 1rem;
    border-radius: .6rem;
    border: none;
    cursor: pointer;
    transition: all 1s ease;
    margin-top: 2rem;
    &:hover {
        background-color: #D0D2D6;
    }
`;


