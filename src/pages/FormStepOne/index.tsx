import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from "react";

const FormStepOne = () => {
    const navigate = useNavigate();
    const { state, dispatch  } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [])

    const handleNextStep = () => {
        if(state.name !== ''){
            navigate('/step2');
        } else {
            alert('Preencha os dados');
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value 
        });
    }

    return(
        <Container>
            <p>Step {state.currentStep}/3 - {state.name}</p>
            <h2>Let's start with your Name</h2>
            <p>Write your full name.</p>
            <hr />
            <label>
                Full name
                <input type="text" autoFocus value={state.name} onChange={handleNameChange} />
            </label>
            <button onClick={handleNextStep}>Next</button>
        </Container>
    );
}

export { FormStepOne };