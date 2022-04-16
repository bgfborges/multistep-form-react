import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from "react";

const FormStepThree = () => {
    const navigate = useNavigate();
    const { state, dispatch  } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    }, [dispatch])

    const handleNextStep = () => {
        if(state.email !== '' || state.github !== ''){
            console.log(state);
        } else {
            alert('Preencha os dados');
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

    const handleBeforeStep = () => {
        navigate('/step2');
    }

    return(
        <Container>
            <p>Step {state.currentStep}/3 - {state.name}</p>
            <h2>{state.name}, where we find you?</h2>
            <p>Write your contact infos.</p>
            <hr />
            <label>
                Email
                <input type="email" autoFocus value={state.email} onChange={handleEmailChange} />
            </label>
            
            <label>
                Github
                <input type="url" autoFocus value={state.github} onChange={handleGithubChange} />
            </label>

            <button onClick={handleBeforeStep}>Voltar</button>
            <button onClick={handleNextStep}>Next</button>
        </Container>
    );
}

export { FormStepThree };