import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FormStepOne } from './pages/FormStepOne';
import { FormStepTwo } from './pages/FormStepTwo';
import { FormStepThree } from './pages/FormStepThree';

const MyRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={ <FormStepOne /> } /> 
                <Route path='/step2' element={ <FormStepTwo /> } /> 
                <Route path='/step3' element={ <FormStepThree /> } /> 
            </Routes>
        </Router>
    )
}

export { MyRouter };