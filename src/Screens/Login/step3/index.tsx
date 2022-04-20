import React, { ChangeEvent, useEffect, useState } from 'react';
import { useForm, FormActions } from '../../../Context/FormContext';
import { useNavigate } from 'react-router-dom';

import Login from '../Login';

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
    if (state.email && state.github !== '') {
        alert(`Ok ${state.name} agora é com a empresa!`) // OBS React-toastFy
       
        navigate('/')
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
  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
     dispatch({
         type: FormActions.setGithub,
         payload: e.target.value 
     });
  }

  return (
      <Login>
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
                    Qual é o seu Github ?
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>
                 <C.BackButton to="/step2">Voltar</C.BackButton>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
      </Login>
  );
}

export default Step3;