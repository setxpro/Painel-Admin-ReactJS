import React, { ChangeEvent, useEffect } from 'react';
import { useForm, FormActions } from '../../../Context/FormContext';
import { useNavigate } from 'react-router-dom';

import Register from '../Register';

import * as C from './styles';

const Step3: React.FC= () => {

  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {

    if (state.name === '') {
        navigate('/step1');
    }
    else {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    }
    
  },[dispatch]);

  const handleNextStep = () => {
    if (state.email !== '' && state.password !== '') {
        alert(`Ok ${state.name} agora é com a empresa!`) // OBS React-toastFy
        navigate('/login')
    }
    else {
        navigate('/step1');
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
     dispatch({
         type: FormActions.setEmail,
         payload: e.target.value 
     });
  }
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
     dispatch({
         type: FormActions.setPassword,
         payload: e.target.value 
     });
  }

  return (
      <Register>
          <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Legal {state.name}, onde te achamos ?</h1>
                <p>Preencha os campos para entrarmos em contato quando houver um Job.</p>

                <hr/>

                <label>
                    Qual é o seu E-mail ?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Insira uma Senha
                    <input
                        type="password"
                        value={state.password}
                        onChange={handlePassword}
                    />
                </label>
                 <C.BackButton to="/step2">Voltar</C.BackButton>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
      </Register>
  );
}

export default Step3;