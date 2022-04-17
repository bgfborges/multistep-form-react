import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormActions, useForm } from '../../contexts/FormContext';
import { Container, JobReview, Repos, Info } from './styles';
import axios from 'axios';

interface PropsRepo {
    name: string;
}

const FormResult = () => {

    const [repo, setRepo] = useState<PropsRepo[]>([]);
    const { state, dispatch } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        if( state.github === '' || state.email === '' ){
            navigate('/step3');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        }

        axios(`https://api.github.com/users/${state.github}/repos`).then( ({ data }) => setRepo(data.slice(0, 6)));
    }, []);

    return (
        <Container>
            <div>
                <h2>Well done, {state.name}!</h2>
                <p>We concluded your subscription and have a job for you.</p>
                <JobReview>
                    <Info>
                        <h3>{state.name}</h3>
                        <small>{state.level === 1 ? 'Beginner' : 'Programmer'}</small>
                        <br />
                        <small>{state.email}</small>
                    </Info>
                    <hr />
                    <Repos>
                            {repo.map( (item, idx) => <div key={idx}>{item.name}</div>)}
                    </Repos>
                </JobReview>
            </div>
        </Container>
    )
}

export { FormResult };