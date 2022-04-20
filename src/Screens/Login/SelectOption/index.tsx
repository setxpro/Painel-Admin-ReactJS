import React from 'react';
import { SelectOptionProps } from '../../../types';
import * as C from "./styles";

const SelectOption: React.FC<SelectOptionProps> = ({title, description, icon, selected, onClick }) => {
  return (
    <C.Container onClick={onClick} selected={selected}>
    <C.Icon>{icon}</C.Icon>
        <C.Info>
            <C.Title>{title}</C.Title>
            <C.Description>{description}</C.Description>
        </C.Info>
    </C.Container>
  );
}

export default SelectOption;