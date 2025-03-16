import { createStackNavigator } from "@react-navigation/stack";
import Home from "../TabScreens/Home";
import Search from "../TabScreens/Search";
import Chat from "../TabScreens/Chat";
import Profile from "../TabScreens/Profile";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen
        options={{ headerShown: true, title: "" }}
        name="Search"
        component={Search}
      />
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
