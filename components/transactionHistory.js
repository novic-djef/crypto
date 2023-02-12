import React from "react";

import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';


import {  COLORS, SIZES, FONTS, icons } from '../constants';


export default function TransactionHistory({customContainerStyle, history}) {

    const renderItem = ({item}) => {
        <TouchableOpacity 
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: SIZES.base
          }}
        onPress={() => console.log(item)}
        >
             <Ionicons 
                        style={{flex: 1 }}
                        name="notifications-outline"
                        size={35}
                        color={COLORS.white}
                    />
            {/* <Image 
              source={icons.transaction}
              style={{
                width: 30,
                height: 30,
                tintColor: COLORS.primary
              }}            
            /> */}
            <View style={{
                flex: 1, 
                marginLeft: SIZES.radius
            }}>
                <Text style={{
                    ...FONTS.h3
                }}>{item.description}</Text>
                <Text style={{
                    color: COLORS.gray,
                     ...FONTS.body4
                }}>{item.date}</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                height: '100%',
                alignItems: 'center',
            }}>
                <Text style={{
                    color: item.type == "B" ? COLORS.green : COLORS.black, ...FONTS.h3
                }}>{item.amount}</Text>
                <Image 
                   source={icons.right_arrow}
                   style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.gray
                   }}
                />
            </View>

        </TouchableOpacity>
    }
    return(
      <View 
      style={{
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        padding: 20,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...customContainerStyle
      }}>
        <Text style={{
           ...FONTS.h2 
        }}>transaction</Text>
        <FlatList 
          contentContainerStyle={{marginTop: SIZES.radius}}
          scrollEnabled={false}
          data={history}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => {
            return(
                <View style={{
                    width: "100%",
                    height: 1,
                    backgroundColor: COLORS.lightGray
                }}>

                </View>
            )
          }}
        />
      </View>
    )
}