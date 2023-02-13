

import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native'
import { COLORS, FONTS, icons, SIZES } from "../constants";

const HeaderBar = ({right}) => {

    const navigation = useNavigation();
    return(
        <View style={{
            paddingHorizontal: SIZES.padding,
            flexDirection: 'row'
        }}>
            <View style={{
                flex: 1,
                alignItems: 'flex-start',
            }}>
                <TouchableOpacity
                   style={{
                    flexDirection: "row",
                    alignItems: 'center',
                   }}
                   onPress={() => navigation.goBack()}
                   >
                    <Image 
                      source={icons.back_arrow}
                      resizeMode="contain"
                      style={{
                        width: 25,
                        height: 25,
                        tinColor: COLORS.gray,
                      }}
                    
                    />
                    <Text style={{
                        marginLeft: SIZES.base,
                        ...FONTS.h2
                    }}>Retour</Text>
                </TouchableOpacity>
            </View>

            {right && 
              <View
                style={{
                    flex: 1,
                    alignItems: 'flex-end'
                }}>
                    <TouchableOpacity
                     style={{

                     }}>
                        <Image 
                           source={icons.star}
                           resizeMode="contain"
                           style={{
                            width: 30,
                            height: 30,
                           }}
                        />

                    </TouchableOpacity>
                </View>
            }
        </View>
    )

}

export default HeaderBar;