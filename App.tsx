// import { SafeAreaView, Text } from "react-native";

// function App() {
    //string, let: de khai bao ra ham khac, const: ko cho doi
    // const a = "Hello"
    // const e = "Abc"
    
    //number, khong bo vao dau nhay, bo vao dau nhay la ra string
    // const b = 10
    // const c = 30
    // const d = b % c
    // % la tim phan du
    // const m = 7
    // const n = 7 > 4 //nay la so sanh nong, khong so sanh kieu
    //const l = 7 === "7"
    //const i = 7 != 3

    // const p = true
    // const q = true
    // const l = true
    // const w = p || q || l
    // || la hoac, && la va
    
    //console.log(w)
    // const a = ["a", "b", "c", "d"]
    // const b = a[10]
    // console.log(b) //.length: lay so phan tu
    // const sum = (a: number, b: number, d: number) => {
    //     //console.log("Sum", a+b)

    //     return a+b+d;
    // }

    //const c = sum(12, 15, 12)
    //console.log(c)
//     const checkNumber = (a: number) => {
//         if (a%2 === 0 && a > 100 ) {
//             return true
//         } 
        
//  else {
//             return false
//         }
//     }
// const check = checkNumber (130)

//     return (
//         <SafeAreaView>
//             <Text>App</Text>
//         </SafeAreaView>
//     )
// }

// export default App;
//Cho 3 số và tim số lớn nhất
// import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

// export default function TabTwoScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.wrap}>
//         {/* header */}
//         <View style={styles.header}>
//           <Text>Header App</Text>
//         </View>
//         {/* content*/}
//         <View style={styles.content}>
//           <View style={styles.contentWrap}> 
//             {/* rowContent */}
//             <View style={styles.rowContent}>
//               <View style={styles.boxGray}>
//               </View>
//               <View style={styles.boxGray}>
//               </View>
//             </View>
//             {/* rowContent */}
//             <View style={styles.rowContent}>
//               <View style={styles.boxGray}>
//               </View>
//               <View style={styles.boxGray}>
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create ({
//   container: {
//     flex: 1, 
//   },
//   wrap: {
//     flex: 1,
//   },
//   header: {
//     backgroundColor: "#8cd2ed",
//     flex: 1,
//     justifyContent: "center",//này là căn theo chiều dọc
//     alignItems: "center",//này là căn theo chiều ngang
//   },
//   content: {
//     backgroundColor: "#bae6f7",
//     padding: 10, //Khoảng trống từ nội dung ra viền chính luôn
//     flex: 4,
//   },
//   contentWrap: {
//     backgroundColor: "#e9f3f7",
//     flex: 1,
//     borderRadius: 20
//   },
//   rowContent: {
//     flex: 1,
//     flexDirection: "row",
//   },
//   boxGray: {
//     backgroundColor: "#45a9d1",
//     flex: 1,
//     margin: 10, //khoảng trống nằm giữa viền và phần tử tiếp theo, giữa 2 cột (1 cột là chứa 2 cái hộp)
//     borderRadius: 20
//   },
// })
// const arr = [1, 2, 3, 4, 5]
  // //console.log ("arr", arr[arr.length-1])
  // const newArr = arr.map ((e) => {
  //   return e + 10
  // })
  //const arr = [1, 2, 3, 4, 5]
  //console.log ("arr", arr[arr.length-1])
  // const newArr = arr.filter ((e) => {
  //   return e % 2 === 0
  // })
  // console.log(newArr)
  // //console.log("listTodo", listTodo)
  // const dog1: IDog = {
  //   color: "red",
  //   action: "gau gau",
  // }
  // const dog2: IDog = {
  //   color: "gray", //con chó theo định nghĩa là chỉ có color và action, nên chỉnh key khác sẽ sai
  //   action: "go go",
  // }
  // // console.log(dog1)
  // const dog3: IDog = {
  //   color: "blue",
  //   action: "go go"
  // }
  // const listDog = [dog1, dog2] //chuồng chóa
  // const newListDog = listDog.filter ((dog) =>{
  //   return dog.action === "go go"
  // })
  // console.log(listDog)
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, TextInput, View } from "react-native";
import React, {useState} from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ScrollView } from "react-native-gesture-handler";
import ButtonCompoment from "./components/ButtonCompoment";
import ItemTodo from "./components/ItemTodo";

export interface ITodo {
  id:number;
  todo: string;
}

export default function App (){
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
    marginBottom: 10,
    padding: 8,
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
})