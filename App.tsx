
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, TextInput, View, FlatList } from "react-native";
import React, {useState} from 'react';
import TodoList from "./pages/TodoList";
import TodoDetail from "./pages/TodoDetail";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App (){
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen 
        name="TodoListPage" 
        component={TodoList} 
        options={{
          //headerShown: true
          title: "Todo List",
          headerBackTitle: "ABCS",
          headerBackVisible: true
        }}
        /> */}
        <Stack.Screen 
        name="TodoDetail" 
        component={TodoDetail} 
        options={{
          //headerShown: true
          title: "TodoDetail",
          headerBackVisible: true
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>

      {/* <TodoList></TodoList> */}
      {/* <TodoDetail></TodoDetail> */}
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: 24
  },
 
})