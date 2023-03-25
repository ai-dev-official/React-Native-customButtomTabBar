import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import PostScreen from '../screens/PostScreen';
import FindScreen from '../screens/FindScreen';
import SettingScreen from '../screens/SettingScreen';
import HomeIcon from '../assets/home.png';
import ChatIcon from '../assets/message.png';
import SearchIcon from '../assets/search.png';
import PostIcon from '../assets/plus.png';
import SettingIcon from '../assets/settings.png';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

 const CustomTabBarButton = ({children, onPress}) => (
   <TouchableOpacity
     style={[styles.shadow, {
       top: -35,
       justifyContent: 'center',
       alignItems: 'center',
      
     }]}
     onPress={onPress}>
     <View
       style={{
         width: 70,
         height: 70,
         borderRadius: 35,
         backgroundColor: '#e91e63',
       }}>
       {children}
     </View>
   </TouchableOpacity>
 );

const Tabs = () => {

    return (
      <Tab.Navigator
      tabBarLabelStyle={{ display: 'none' }}
        initialRouteName="Home"
        screenOptions={{
          showLabel: false,
          tabBarActiveTintColor: '#e91e63',
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#ffffff',
            borderRadius: 15,
            height: 90,
            ...styles.shadow,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: {display: 'none'},
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,
                }}>
                <Image
                  source={HomeIcon}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? '#e32f45' : '#748C94',
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? '#e32f45' : '#748C94',
                  }}>
                  Home
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Find"
          component={FindScreen}
          options={{
            tabBarLabel: 'Find',
            tabBarLabelStyle: {display: 'none'},
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,
                }}>
                <Image
                  source={SearchIcon}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? '#e32f45' : '#748C94',
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? '#e32f45' : '#748C94',
                  }}>
                  Find
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Post"
          component={PostScreen}
          options={{
            tabBarLabel: '', // set to empty string
            showLabel: false,
            tabBarIcon: ({focused}) => (
              <Image
                source={PostIcon}
                resizeMode="contain"
                style={{
                  top: 5,
                  width: 50,
                  height: 50,
                  tintColor: '#ffffff',
                }}
              />
            ),
            tabBarButton: (props) => (
            <CustomTabBarButton { ...props } />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            tabBarLabel: 'Setting',
            tabBarLabelStyle: {display: 'none'},
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,
                }}>
                <Image
                  source={SettingIcon}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? '#e32f45' : '#748C94',
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? '#e32f45' : '#748C94',
                  }}>
                  Setting
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarLabel: 'Chat',
            tabBarLabelStyle: {display: 'none'},
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,
                }}>
                <Image
                  source={ChatIcon}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? '#e32f45' : '#748C94',
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? '#e32f45' : '#748C94',
                  }}>
                  Chat
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;