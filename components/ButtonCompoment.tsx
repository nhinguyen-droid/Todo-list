import {  Text, TouchableOpacity, StyleSheet } from "react-native";

interface IButtonCompomentProps {
    title: string;
    onPress: () => void
}

function ButtonCompoment (props: IButtonCompomentProps){
    return (
        <TouchableOpacity
        style={styles.button}
        onPress={props.onPress}
        >
            <Text style={{color: "white"}}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

export default ButtonCompoment

const styles= StyleSheet.create ({
    button: {
        padding: 10,
        borderWidth: 1, 
        backgroundColor: "blue",
        textAlign: "center",
        alignItems: "center",
    }
})