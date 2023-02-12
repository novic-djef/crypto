import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

//import LinearGradient from 'react-native-linear-gradient';

import { Home } from "../screens"
import { COLORS, FONTS, icons } from "../constants"

const Tab = createBottomTabNavigator()



const TabBarCustomButton = ({children, onPress}) => {
    return(
        <TouchableOpacity 
          style={{
            top: -20,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow

        }}
        onPress={onPress}
        >
            
        <View
            style={{
                backgroundColor:  COLORS.secondary,
                width: 65,
                height: 65,
                borderRadius: 50,
                
            }}
          >
            {children}
          </ View>
        </TouchableOpacity>
    )
}

const Tabs = () => {
     
    return (
        <Tab.Navigator
            tabBarOption={{
                headerShown: false,
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.white,
                    borderTopColor: 'transparent',
                    height: 150,

                }
            }}
           
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center',
                        justifyContent: 'center'}}>
                           <Image
                             source={icons.home} 
                             resizeMode="content"
                             style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.
                                primary: COLORS.black
                             }}/>
                            {/* <Text style={{color: focused ? COLORS.
                            primary :COLORS.black, ...FONTS.body5 }}>Home</Text> */}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Portfolio"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center',
                        justifyContent: 'center'}}>
                           <Image
                             source={icons.pie_chart} 
                             resizeMethod='content'
                             style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.
                                primary: COLORS.black
                             }}/>
                            {/* <Text style={{color: focused ? COLORS.
                            primary :COLORS.black, ...FONTS.body5 }}>Portfolio</Text> */}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Transaction"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Image 
                           source={icons.transaction}
                           resizeMode="contain"
                           style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.white
                           }}
                        />
                    ),
                    tabBarButton: (Props) => (
                        <TabBarCustomButton 
                           {...Props}
                         
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Prices"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center',
                        justifyContent: 'center'}}>
                           <Image
                             source={icons.line_graph} 
                             resizeMethod='content'
                             style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.
                                primary: COLORS.black
                             }}/>
                            <Text style={{color: focused ? COLORS.
                            primary :COLORS.black, ...FONTS.body5 }}>Prices</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center',
                        justifyContent: 'center'}}>
                           <Image
                             source={icons.settings} 
                             resizeMethod='content'
                             style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.
                                primary: COLORS.black
                             }}/>
                            <Text style={{color: focused ? COLORS.
                            primary :COLORS.black, ...FONTS.body5 }}>Settings</Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 1
    }
})

export default Tabs;