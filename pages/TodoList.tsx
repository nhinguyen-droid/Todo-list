  
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, TextInput, View, FlatList } from "react-native";
import React, {useState} from 'react';
import { ScrollView } from "react-native-gesture-handler";
import ButtonCompoment from "../components/ButtonCompoment";
import ItemTodo from "@/components/ItemTodo";

export interface ITodo {
  id:number;
  todo: string;
}

export default function TodoList (){
  const [todo, setTodo] = useState<string>("")
  const [listTodo, setListTodo] = useState<ITodo[]>([])
  const handleChangeText = (text: string) => {
    setTodo(text)
  }
  const handleInsert = () => {
    const newTodo: ITodo = {
      id: new Date().getTime(),
      todo: todo
    }
    const newListTodo = [newTodo, ... listTodo]
    setListTodo(newListTodo)
    setTodo("")
  }
  const handleDelete = (id: number) => {
    const newListTodo = listTodo.filter(item => {
      return item.id !== id
    })
    setListTodo(newListTodo)
  }
  const handeleEdit = (id: Number, newTodo: string) => {
    const newLisTodo = listTodo.map(item => {
       if(item.id === id) {
      return {...ItemTodo, todo: newTodo}
    }
    else {
      return item
    }
    })
   

  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
      value={todo}
      placeholder="Add Todo"
      style={styles.input}
      onChangeText={handleChangeText}
      >
      </TextInput>
      {/* <TouchableOpacity
      style={styles.button}
      onPress={handleInsert}
      >
        <Text style={{color: "white"}}>
          Insert
        </Text>
      </TouchableOpacity> */}
      <ButtonCompoment title="Add" onPress={handleInsert}></ButtonCompoment>

      <ScrollView>
        {
          listTodo.map(item => {
            return (
           
              <ItemTodo item={item} handleDelete={handleDelete} handleEdit={handeleEdit}></ItemTodo>
            )
          })
        }
      </ScrollView> 
   
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: 24
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    borderRadius: 5,
    marginHorizontal: 16, 
  },
  button: {
    padding: 10,
    borderWidth: 1, 
    backgroundColor: "blue",
    textAlign: "center",
    alignItems: "center",
  },
  todoItem: {
    margin: 16,
    borderWidth: 1,
    marginBottom: 15,
    padding: 8,
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
})
    