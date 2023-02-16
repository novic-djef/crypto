

import React from "react";

import { TouchableOpacity, Text} from 'react-native';

import { COLORS, SIZES, FONTS } from "../constants";

const  TextButton = ({label, customContainerStyle, customLableStyle, onPress}) => {
    return(
        <>
        <TouchableOpacity
        style={{
           height: 45, 
           alignItems: 'center',
           justifyContent: 'center',
           borderRadius: SIZES.radius,
           backgroundColor: COLORS.green,
           ...customContainerStyle
        }}
        onPress={onpress}
        >
         <Text style={{color: COLORS.white, ...FONTS.h3, ...customContainerStyle}}> {label}</Text>
        </TouchableOpacity>
        </>
    )
}

export default TextButton;

