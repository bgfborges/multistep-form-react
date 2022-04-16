import { MyRouter } from "./router";
import { FormProvider } from "./contexts/FormContext";
import { Theme } from "./components/Theme";

const App = () => {
  return(
    <FormProvider>
      <Theme>
        <MyRouter />
      </Theme>
    </FormProvider>
  );
}

export default App;