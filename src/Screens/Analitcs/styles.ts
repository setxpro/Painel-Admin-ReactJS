import styled from 'styled-components';

import { FiSend } from 'react-icons/fi';
import { AiOutlineEye } from 'react-icons/ai';
import { CgMoreVertical } from 'react-icons/cg';
import { GiConfirmed } from 'react-icons/gi';
import { RiAlarmWarningLine } from 'react-icons/ri';
import { AiOutlineWarning } from 'react-icons/ai';
import { MdShowChart } from 'react-icons/md';

//user
import { FiUsers } from 'react-icons/fi';
import { FiCodesandbox } from 'react-icons/fi';

export const User = styled(FiUsers)`
    color: #00f;
    background: rgba(0, 0, 255, .2);
    font-size: 3rem;
    padding: 10px;

    border-radius: 50%;
    position: absolute;
    margin-top: -90px;
    margin-left: 20px;
`;
export const Box = styled(FiCodesandbox)`
    color: #E39043;
    background: #664F45;
    font-size: 3rem;
    padding: 10px;

    border-radius: 50%;
    position: absolute;
    margin-top: -90px;
    margin-left: 20px;
`;
export const ChartLine = styled(MdShowChart)`
    color: ${props => props.theme.colors.text};
    font-size: 1.2rem;
`;
export const Send = styled(FiSend)`
    color: ${props => props.theme.colors.text};
    font-size: 1.2rem;
`;
export const Eye = styled(AiOutlineEye)`
    color: ${props => props.theme.colors.text};
    font-size: 1.2rem;
`;
export const More = styled(CgMoreVertical)`
    color: ${props => props.theme.colors.text};
    font-size: 1.2rem;
`;

export const Success = styled(GiConfirmed)`
    font-size: 1.5rem;
    border-radius: 50%;
    padding: 3px;
    background-color: #28424A;
    color: #286a4a;
`;
export const Warning = styled(AiOutlineWarning)`
   font-size: 1.5rem;
    border-radius: 50%;
    padding: 3px;
    background-color: #664F45;
    color: #E39043;
`;
export const Danger = styled(RiAlarmWarningLine)`
    font-size: 1.5rem;
    border-radius: 50%;
    padding: 3px;
    background-color: #693C4A;
    color: #CF3D48;
`;



export const Container = styled.div`
    height: 100%;
    padding-bottom: 1.5rem;
`;
export const MessageArea = styled.div`
   display: grid;
   grid-template-rows: 1fr 1fr 1fr;
   gap: 1.3rem;
`;
export const ContentArea = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
`;
export const ContentAreaMiddle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`;
export const AreaMessage = styled.div`
    height: 240px;
    width: 505px;
    border-radius: 1rem;
    background: ${props => props.theme.colors.secondary};


    display: flex;
    justify-content: center;
    align-items: center;
`;
export const DashboardArea = styled.div`
    width: 245px;
    height: 240px;
    border-radius: 1rem;
    background: ${props => props.theme.colors.secondary};

    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        width: 245px;
        border-radius: 1rem;
    }

    span {
        font-size: 2rem;
        font-weight: bold;
        margin-top: 60px;
        margin-left: 20px;
    }

    p {
        font-size: 16px;
        margin-top: 20px;
        margin-left: 20px;
    }
`;

export const AreaContentPrice = styled.div`
    /* height: 300px; */
    width: 505px;
    border-radius: 1rem;
    background: ${props => props.theme.colors.secondary};


    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 505px;
        height: 228px;
        border-radius: 1rem;
        margin-top: 15px;
    }
`;

export const AreaUserTimeLine = styled.div`
    /* height: 545px; */
    width: 325px;
    border: 1px solid #fff;
    border-radius: 1rem;
    background: ${props => props.theme.colors.secondary};
    
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const AreaSales = styled.div`
    /* height: 545px; */
    width: 325px;
    border: 1px solid #fff;
    border-radius: 1rem;
    background: ${props => props.theme.colors.secondary};

    display: flex;
    justify-content: center;
    align-items: center;
`;
export const AreaAppDesign = styled.div`
    /* height: 545px; */
    width: 325px;
    border: 1px solid #fff;
    border-radius: 1rem;
    background: ${props => props.theme.colors.secondary};

    display: flex;
    justify-content: center;
    align-items: center;
`;


export const InputAreaTab = styled.div`
    width: 95%;
    margin: auto;
    margin-bottom: 1rem;

    input {
        width: 100%;
        padding: .5rem;
        border-radius: .5rem;

        border: none;
        outline: none;
        background-color: ${props => props.theme.colors.table};
        color: ${props => props.theme.colors.text};
        font-size: 1rem;
    }
`;

export const TabArea = styled.div`
    height: 545px;
    width: 100%;
    background: ${props => props.theme.colors.secondary};
    margin-top: 1rem;
    border: 1px solid #fff;
    border-radius: 1rem;
    padding: 1rem;


    table {
       
        width: 95%;
        margin: auto;

        tr {
            th {
                background: ${props => props.theme.colors.table};
                padding: 10px;
            }

            td {
                border-bottom: 1px solid ${props => props.theme.colors.text};
                text-align: center;
                padding: 5px;

                > div {
                    display: flex;
                    justify-content: space-around;
                    padding: 0 10px;

                    button {
                        border: none;
                        background-color: transparent;
                        cursor: pointer;
                    }
                }

                span {
                    color: #286a4a;
                    background-color: #28424A;
                    padding: 5px;
                    border-radius: 40%;
                }
            }
        }
    }

`;