import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Chat from "../screens/Chat";
import Profile from "../screens/Profile";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "dodgerblue",
        tabBarInactiveTintColor: "#A7CCF6",
        tabBarLabelStyle: {
          fontSize: 15,
          // color: "red",
          fontWeight: "semibold",
        },
        tabBarStyle: {
          backgroundColor: "#fff",
        },
        // tabBarIcon: ({ color, focused, size }) => {
        //   return <Ionicons name="home" color={color} size={size} />;
        // },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarActiveTintColor: "dodgerblue",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={size} color={color} />
          ),
        }}
        component={Search}
      />
      <Tab.Screen
        name="Chat"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="wechat" size={size} color={color} />
          ),
        }}
        component={Chat}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="people" size={size} color={color} />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
