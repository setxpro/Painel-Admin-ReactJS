import React from 'react';
import { useForm } from '../../Context/FormContext';
import { LayoutFormLogin } from '../../styles/Layout/styles';
import { ChildrenProps } from '../../types';
import HeaderLogin from './HeaderLogin';
import SidebarItem from './SidebarItem';

import * as C from './styles';

const Login: React.FC<ChildrenProps> = ({children}) => {

    const { state } = useForm();

  return (
      <LayoutFormLogin>
          <C.Container>
                <HeaderLogin/>
                <C.Steps>
                    <C.SideBar>
                    <SidebarItem
                                title="Pessoal"
                                description="Se identifique!"
                                icon="profile"
                                path="/"
                                active={state.currentStep === 1}
                            />

                            <SidebarItem
                                title="Profissional"
                                description="Seu nível!"
                                icon="book"
                                path="/step2"
                                active={state.currentStep === 2}
                            />

                            <SidebarItem
                                title="Contatos"
                                description="Como te achar ?"
                                icon="mail"
                                path="/step3"
                                active={state.currentStep === 3}
                            />

                    </C.SideBar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
          </C.Container>
      </LayoutFormLogin>
  );
}

export default Login;