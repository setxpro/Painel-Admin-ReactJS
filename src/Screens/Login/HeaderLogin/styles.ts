import styled from 'styled-components';

export const Container = styled.div`
    padding: 25px 0;
    border-bottom: 1px solid #494a7c;

    display: flex;
    align-items: center;
    gap: 3rem;
`;

export const AreaHeader = styled.div`
     h1 {
        margin: 0;
        padding: 0;
        font-size: 28;
    }
    p {
        font-size: 14px;
        color: #b8b8d4;
    }
`;
export const AreaButton = styled.div`
        

        a {
            text-decoration: none;
            background-color: #25CD89;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            padding: 20px 40px;
            border: 0;
            border-radius: 30px;
            cursor: pointer;
            margin-top: 30px;
        }
`;