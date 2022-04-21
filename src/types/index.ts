import { ReactNode } from "react";
import { FormActions } from "../Context/FormContext";

export type SidebarItemProps = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export type  State = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    password: string;
    github: string;
}   

export type Action =  {
    type: FormActions;
    payload: any;
}

export type ContextType = {
    state: State;
    dispatch: (action: Action) => void
}

export type FormProviderProps = {
    children: ReactNode;
}

export type ChildrenProps = {
    children: ReactNode;
}

export type SelectOptionProps = {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    onClick: () => void;
}

export type AuthContextProps = {
    authenticated: boolean;
    toggleAuthenticated: () => void;
}


export type User = {
    id: number;
    name: string;
    email: string;
    password?: string;
}