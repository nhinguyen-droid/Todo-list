import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { ITodo } from "@/pages/TodoList";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { useNavigation } from "expo-router";

interface IItemTodoProps {
    item: ITodo;
    handleDelete: (id: number) => void
    handleEdit: (id: number, newTodo: string) => void
}
function ItemTodo(props: IItemTodoProps) {
  const [isEdit,setIsEdit]=useState(false)
  const [textEdit, setTextEdit] = useState ("")
  const navigation= useNavigation ()
  const onPressEdit = () => {
    if(isEdit) {
      setIsEdit(false)
    }
    else {
      setIsEdit(true)
    }

  }
  const openDetail = () => {
    navigation.navigate("TodoDetail")
  }
  return (
      <TouchableOpacity style={styles.todoItem} onPress={openDetail}>
          {
          isEdit ?
              <TextInput
                  style={styles.input}
                  defaultValue={props.item.todo}
                  onChangeText={setTextEdit}
              /> : 
              <Text>{props.item.todo}</Text>
          }
          <View style={styles.actions}>
            
              <TouchableOpacity onPress={() => {
                  setIsEdit(!isEdit)
                  
              }} style={styles.iconWrap}>        
                  <MaterialIcons name="border-color" size={20} color={isEdit? "green" : "blue"} />
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.iconWrap}
                  onPress={() => props.handleDelete(props.item.id)}
              >
                  <MaterialIcons name="delete-outline" size={24} color="red" />
              </TouchableOpacity>
          </View>
      </TouchableOpacity>
  )
}
export default ItemTodo;

const styles = StyleSheet.create({
    todoItem: {
        margin: 16,
        marginBottom: 0,
        padding: 8,
        borderRadius: 4,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    actions: {
        flexDirection: "row",
        alignItems: "center"
    },
    iconWrap: {
        marginLeft: 4
    },
    input: {
        borderBottomWidth: 1,
        flex: 1
    }
});