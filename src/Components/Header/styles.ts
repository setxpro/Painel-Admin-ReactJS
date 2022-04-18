import styled from 'styled-components';

import { AiOutlineMail } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { FcTodoList } from 'react-icons/fc';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdOutlineLightMode } from 'react-icons/md';
import { MdOutlineNightlight } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineBell } from 'react-icons/ai';



export const AreaIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;
export const ContainerRight = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;
export const ContainerBtnTheme = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    div {
        span {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            background: red;
            border-radius: 1rem;
            width: 20px;
            height: 20px;
            color: #FFF;

            margin-top: -40px;
            margin-left: 18px;
        }
    }
`;
export const AreaAdmin = styled.div`

    display: flex;
    gap: 5px;
    > div {

       h3 {
        font-weight: 400;
        font-size: 14px;
       }
       p {
            font-weight: 400;
            font-size: 12px;
            text-align: end;
        }
    }

    
`;

export const ContainerAvarat = styled.div`
        img {
            width: 50px;
            height: 50px;
            border-radius: 50%; 
        }
        span {
            position: absolute;
            margin-left: -15px;
            margin-top: 33px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: #00fF00;
        }
`;

export const Mail = styled(AiOutlineMail)`
    color: ${props => props.theme.colors.icons};
    font-size: 1.5rem;
    cursor: pointer;
`;
export const Chat = styled(BsChatLeft)`
    color: ${props => props.theme.colors.icons};
    font-size: 1.5rem;
    cursor: pointer;
`;
export const Todo = styled(FcTodoList)`
    color: ${props => props.theme.colors.icons};
    font-size: 1.5rem;
    cursor: pointer;
`;
export const Calendar = styled(AiOutlineCalendar)`
    color: ${props => props.theme.colors.icons};
    font-size: 1.5rem;
    cursor: pointer;
`;
export const Light = styled(MdOutlineLightMode)`
    color: ${props => props.theme.colors.icons};
    font-size: 1.5rem;
    cursor: pointer;
`;
export const Dark = styled(MdOutlineNightlight)`
    color: ${props => props.theme.colors.icons};
    font-size: 2rem;
    cursor: pointer;
`;
export const Search = styled(AiOutlineSearch)`
    color: ${props => props.theme.colors.icons};
    font-size: 2rem;
    cursor: pointer;
`;
export const Cart = styled(AiOutlineShoppingCart)`
    color: ${props => props.theme.colors.icons};
    font-size: 2rem;
    cursor: pointer;
`;
export const Bell = styled(AiOutlineBell)`
    color: ${props => props.theme.colors.icons};
    font-size: 2rem;
    cursor: pointer;
`;