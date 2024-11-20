import Feather from '@expo/vector-icons/Feather';
import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: 'black', 
      tabBarActiveBackgroundColor: '#FF7824', 
      tabBarInactiveBackgroundColor: '#FF7824', 
      tabBarStyle: styles.tabBar,
      tabBarShowLabel: false
    }}>
      <Tabs.Screen
        name="cart"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
              <Entypo
                size={30} 
                name="shopping-cart" 
                color={focused ? 'black' : 'white'} // Define a cor do ícone ativo
              />
          ),
          headerShown: false, 
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <Feather
              name="bell" 
              size={30} 
              color={focused ? 'black' : 'white'} 
            />
          ),
          headerShown: false, 
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.homeButton}>
            <MaterialCommunityIcons 
              name="home" 
              size={50} 
              color={focused ? 'black' :  '#FF7824'} 
            />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="busca"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name="search1" 
              size={30} 
              color={focused ? 'black' : 'white'} 
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 
              name="user" 
              size={30} 
              color={focused ? 'black' : 'white'} 
            />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 50,
    backgroundColor: '#FF7824',
    position: 'absolute',
    
  },
  homeButton: {
    width: 70,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 30,
    borderColor: 'white',
    borderWidth: 3,
  },
});
