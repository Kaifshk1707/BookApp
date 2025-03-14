import { Provider } from "react-redux";
import BottomTab from "./src/navigation/BottomTab";
import StackNavigator from "./src/navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
