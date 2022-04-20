import styled from 'styled-components';

import { AiOutlineMail } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiTodoLine } from 'react-icons/ri';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdOutlineLightMode } from 'react-icons/md';
import { MdOutlineNightlight } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineBell } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

// icon Search close

export const CloseSearch = styled(AiOutlineClose)`
    color: ${props => props.theme.colors.text};
    font-size: 1.3rem;
    cursor: pointer;
`;

export const ShadowArea = styled.div<{mode: boolean}>`
    transition: all 0.5s ease;
   opacity: ${props => props.mode ? '1' : '0'};
   width: ${props => props.mode ? '100%' : '0px'};
`;
export const AreaIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 2.8rem;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
            position: absolute;
            margin-top: 2rem;
            border: 1px solid ${props => props.theme.colors.iconsidebar};
            background-color: rgba(0,0,0,0.2);
            color: ${props => props.theme.colors.text};
            padding: 3px;
            border-radius: 8px;
            opacity: 0;
        }

        a {
            text-decoration: none;
            &:hover ~ span {
                opacity: 1;
            }
            
        }
    }
`;

export const AraInputSearch = styled.div<{mode: boolean}>`
    display: flex;
    align-items: center;
    
    input {
        display: ${props => props.mode ? 'none' : 'block'};
        border: none;
        border-radius: 1rem;
        color: ${props => props.theme.colors.iconsidebar};
        outline: none;
        background-color: rgba(0,0 ,0 ,0.3);
        padding: 10px 1rem;
        font-size: 1.5rem;
        width: 600px;
    }
`;

export const AreaInput = styled.div<{mode: boolean}>`
    transition: all 1s ease-in-out;
    opacity: ${props => !props.mode ? '1' : '0'};
    width: ${props => !props.mode ? '650px' : '0px'};

    > div {
        transition: all 1s ease-in-out;
        display: flex;
        align-items: center;
    }
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
            background: #444ddd;
            border-radius: 1rem;
            width: 20px;
            height: 20px;
            color: #FFF;

            margin-top: -40px;
            margin-left: 18px;
        }
    }
`;
export const AreaAdmin = styled.div<{mode: boolean}>`
    transition: all 3s ease-in-out;
    opacity: ${props => props.mode ? '1' : '0'};

   > div {
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
   }

    
`;

export const ContainerAvarat = styled.div`
        img {
            width: 50px;
            height: 50px;
            border-radius: 50%; 
            cursor: pointer;
        }
        span {
            position: absolute;
            margin-left: -15px;
            margin-top: 33px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
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
export const Todo = styled(RiTodoLine)`
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


// Functions Dropdown


export const ContainerDropdown = styled.div<{mode: boolean}>`
    display: ${props => props.mode ? 'block' : 'none'};
`;

export const ContainerSettings = styled.div`
    position: absolute;
    margin-top: 10px;
    margin-left: -80px;
    width: 140px;
    background-color: ${props => props.theme.colors.secondary};
   

    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 1.2s ease;
   

    a {
        width: 140px;
        padding: 1rem 0;
        color: ${props => props.theme.colors.text};
        text-decoration: none;
        text-align: center;
        border-bottom: 1px solid #FFF;

        &:hover {
            background: rgba(20, 0, 255,01);
        }
    }
`;