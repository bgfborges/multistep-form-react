import { MyRouter } from "./router";
import { FormProvider } from "./contexts/FormContext";

const App = () => {
  return(
    <FormProvider>
       <MyRouter />
    </FormProvider>
  );
}

export default App;