import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

import { AiOutlineMail } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiTodoLine } from 'react-icons/ri';
import { AiOutlineCalendar } from 'react-icons/ai';

import { IoDocumentTextOutline } from 'react-icons/io5';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';

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

    details[open] summary {
        list-style-type: ' ';
        margin-left: 5px;
    }
    
    details {
        display: flex;
        
        summary {
           font-size: 1rem;
           cursor: pointer;
           list-style-type: ' ';

           display: flex;
           align-items: center;
           gap: 1rem;
           transition: all 1s ease;

           /* .word-w {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
           } */
        }
        

        a {
            margin-top: 1rem;
            text-align: center;
            text-decoration: none;
            padding: .5rem;
            margin-bottom: 10px;
            color: ${props => props.theme.colors.text};
            &:hover, &:focus {
                color: #FFF;
                background-color: #444DDD;
                box-shadow: 2px 2px 20px #444DDD;
                border-radius: 8px;
            }

            

            span {
                position: absolute;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                margin-left: -20px;
                margin-top: 4px;
                border: 1px solid ${props => props.theme.colors.iconsidebar};
            }
        }
    }

    h2 {
        font-weight: 200;
        font-size: 16px;
        margin-top: 1.5rem;
        margin-bottom: 1.2rem;
    }


    nav {

        ul {
            a {
                   text-decoration: none;
                }

            li {
                    list-style: none;
                    margin-top: 1rem;
                    color: ${props => props.theme.colors.text};
                    text-align: center;
                    
                    padding: .5rem;
                    margin-bottom: 10px;

                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    
                    
                    &:hover {
                        color: #FFF;
                        background-color: #444DDD;
                        box-shadow: 2px 2px 20px #444DDD;
                        border-radius: 8px;
                    }
                
                }
        }
    }
`;

export const DropDown = styled.div`
    margin-bottom: 2rem;
`;

// Icons

export const ArrowDown = styled(IoIosArrowDown)`
    color: #444DDD;

    animation: 1s s linear;

    @keyframes s {
        0% {
            transform: rotate(-190deg);
        }
    }
`;
export const ArrowUp = styled(IoIosArrowUp)`
    color: #444DDD;
    animation: 1s s linear;

    @keyframes s {
        0% {
            transform: rotate(-190deg);
        }
    }
`;
export const Mail = styled(AiOutlineMail)`
    color: ${props => props.theme.colors.iconsidebar};
`;
export const Chat = styled(BsChatLeft)`
    color: ${props => props.theme.colors.iconsidebar};
`;
export const Todo = styled(RiTodoLine)`
    color: ${props => props.theme.colors.iconsidebar};
`;
export const Invoice = styled(IoDocumentTextOutline)`
    color: ${props => props.theme.colors.iconsidebar};
`;
export const Calendar = styled(AiOutlineCalendar)`
    color: ${props => props.theme.colors.iconsidebar};
`;
export const Paper = styled(AiOutlineSafetyCertificate)`
    color: ${props => props.theme.colors.iconsidebar};
`;
