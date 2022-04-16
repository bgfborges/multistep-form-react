import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { useForm, FormActions } from '../../contexts/FormContext'
import { useEffect } from "react";
import { SelectOption } from "../../components/SelectOption";
import { BsEmojiLaughingFill, BsEmojiSunglassesFill } from 'react-icons/bs'

const FormStepTwo = () => {
    const navigate = useNavigate();
    const { state, dispatch  } = useForm();

    useEffect(() => {
        if(state.name === ''){
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, [dispatch, navigate, state.name])

    const handleNextStep = () => {
        navigate('/step3');
    }
    const handleBeforeStep = () => {
        navigate('/');
    }

    const setLevel = (level: 0 | 1) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return(
        <Container>
            <p>Step {state.currentStep}/3 - {state.level === 0 ? "I'm a Beginner" : "I'm a Programmer" }</p>
            <h2>{state.name}, what describes you better?</h2>
            <p>Choose your level.</p>
            <hr />
            <div>
                <SelectOption 
                    title="I'm a beginner"
                    description="I started programming less than one year ago"
                    icon={<BsEmojiLaughingFill color="yellow" size={25} />}
                    selected={state.level === 0}
                    onClick={ () => setLevel(0) }
                />
                
                <SelectOption 
                    title="I'm a Programmer"
                    description="I already code 2 or more years ago"
                    icon={<BsEmojiSunglassesFill color="yellow" size={25} />}
                    selected={state.level === 1}
                    onClick={ () => setLevel(1) }
                />
            </div>
            <button onClick={handleBeforeStep}>Voltar</button>
            <button onClick={handleNextStep}>Next</button>
        </Container>
    );
}

export { FormStepTwo };