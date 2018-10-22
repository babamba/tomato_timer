import React from 'react';
import PropType from "prop-types";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Button({iconName, onPress}){
    return (
        <TouchableOpacity onPressOut={onPress}>
            <FontAwesome name={iconName} size={80} color="white" />
        </TouchableOpacity>
    )
}

Button.propTypes = {
    iconName : PropType.string.isRequired,
    onPress : PropType.func.isRequired

}

export default Button
// {
//     isCounting : true | false
//     counterDuration: 1500,
//     elapsedTime : 0
// }