import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FormStepOne } from './pages/FormStepOne';
import { FormStepTwo } from './pages/FormStepTwo';
import { FormStepThree } from './pages/FormStepThree';
import { Theme } from './components/Theme';
import { FormResult } from './pages/FormResult';

const MyRouter = () => {
    return(
        <Router>
            <Theme>
                <Routes>
                    <Route path='/' element={ <FormStepOne /> } /> 
                    <Route path='/step2' element={ <FormStepTwo /> } /> 
                    <Route path='/step3' element={ <FormStepThree /> } /> 
                    <Route path='/result' element={ <FormResult /> } /> 
                </Routes>
            </Theme>
        </Router>
    )
}

export { MyRouter };