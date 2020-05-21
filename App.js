import React from 'react';
import { StyleSheet, Button } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { BlogProvider } from './src/context/BlogContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateScreen from './src/screens/CreateScreen';
import BlogScreen from './src/screens/BlogScreen';
import EditScreen from './src/screens/EditScreen';

const Stack = createStackNavigator();

export default function App({navigation}) {
  return (
    <BlogProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Blogs"}} />
        <Stack.Screen name="Create" component={CreateScreen} options={{title: "Create new Blog"}} />
        <Stack.Screen name="Blog" component={BlogScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </BlogProvider>
  );
}

const styles = StyleSheet.create({
 
});
