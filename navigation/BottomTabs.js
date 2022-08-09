import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home";
import Search from "../screen/Search";
import Posts from "../screen/Posts";
import Profile from "../screen/Profile";

import TabBarButton from "../components/TabBarButton";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: 60,
          paddingHorizontal: 10,
        },
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarButton: (props) => {
            return (
              <TabBarButton {...props} title="Home" icon="Home" iconSize={18} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: "Search",
          tabBarButton: (props) => {
            return (
              <TabBarButton
                {...props}
                title="Search"
                icon="Search"
                iconSize={18}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{
          title: "Posts",
          tabBarButton: (props) => {
            return (
              <TabBarButton
                {...props}
                title="Posts"
                icon="Files"
                iconSize={18}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarButton: (props) => {
            return (
              <TabBarButton
                {...props}
                title="Profile"
                icon="Profile"
                iconSize={22}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
