import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    FlatList,
    Image,
    TouchableOpacity,
    ImageBackground,
    LogBox
  
} from 'react-native';
import { PriceAlert, TransactionHistory } from '../components';

import Ionicons from '@expo/vector-icons/Ionicons';

import { dummyData, COLORS, SIZES, FONTS, icons, images } from '../constants';

const Home = ({navigation}) => {

const [trending, setTrending] = useState(dummyData.trendingCurrencies)

const [transactionHistory, setTransactionHistory] = useState(dummyData.transactionHistory)


useEffect(() => {
   LogBox.ignoreLogs(['virtualizedLists should never nested'])
}, [])

function renderHeader (){

const renderItem = ({item, index}) =>{
    return(
        <ScrollView>
       <TouchableOpacity
        style={{
            width: 180,
            paddingVertical: SIZES.padding,
            paddingHorizontal: SIZES.padding,
            marginLeft: index == 0 ? SIZES.padding: 0,
            marginRight: SIZES.radius,
            borderRadius: 10,
            backgroundColor: COLORS.white
        }}
        onPress={() => navigation.navigate("CryptoDetail", {currency: item})}
       >
        {/* currency  */}
        <View style={{
            flexDirection: 'row'
        }}>
            <View>
                <Image 
                   source={item.image}
                   resizeMode='cover'
                   style={{
                    marginTop: 5,
                    width: 25,
                    height: 25,
                   }}
                />
            </View>
            <View style={{marginLeft: SIZES.base}}>
                <Text style={{...FONTS.h2, }}>{item.currency}</Text>
                <Text style={{color: COLORS.gray, ...FONTS.body3}}>{item.code}</Text>
            </View>
        </View>
        <View style={{marginTop: SIZES.radius}}>
            <Text style={{...FONTS.h2}}>{item.amount} Frs</Text>
            <Text style={{ color: item.type == "I" ? COLORS.green : COLORS.red,...FONTS.h3}}>{item.currency}</Text>
        </View>
       </TouchableOpacity>
       </ScrollView>
    )
}

    return(
        <View style={{
            width: '100%',
            height: 290,
            ...styles.shadow
        }}>
           <ImageBackground
           source={images.banner}
           resizeMethod="cover"
           style={{
            flex: 1,
            alignItems: 'center',
           }}
           >
            {/* entete */}
            <View
             style={{
                marginTop: SIZES.padding ,
                width: "100%",
                alignItems: "flex-end",
                paddingHorizontal: SIZES.padding
            }}>
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                
                  }}
                  onPress={() => console.log("notification")}
                >
                    <Ionicons 
                        style={{flex: 1 }}
                        name="notifications-outline"
                        size={35}
                        color={COLORS.white}
                    />
    
                </TouchableOpacity>
            </View>
            <View style={{
                alignItems: 'center', 
                justifyContent: 'center'
                }}
                >
                    <Text style={{color: COLORS.white, ...FONTS.
                    h3}}> Votre porte feuille </Text>
                    <Text
                      style={{
                        marginTop: SIZES.base, 
                        color: COLORS.white, 
                        ...FONTS.h1
                    }}
                    >{dummyData.portfolio.balance} Frs</Text>
                    <Text style={{
                        color: COLORS.white, 
                        ...FONTS.body5
                    }}
                        >
                            {dummyData.portfolio.changes} les 7 jours passé
                        </Text>
                </View>

                <View style={{
                    display: 'flex',
                    position: 'absolute',
                    bottom: "-30%"
                }}
                >
                    <Text style={{ 
                       
                        marginLeft: SIZES.padding, 
                        color: COLORS.white, 
                        ...FONTS.h2
                    }}>Trending</Text>
                    
                    <FlatList 
                    style={{
                      
                    }}
                       horizontal
                       contentContaineStyle={{marginTop: SIZES.base, }}
                       data={trending}
                       renderItem={renderItem}
                       keyExtractor={ item => `${item.id}`}
                       scrollEnabled
                       showsHorizontalScrollIndicator={false}
                    />
                </View>
           </ImageBackground>
        </View>
    )
}

function renderAlert(){
    return(
        <PriceAlert />
    )
}

function renderNotice(){
    return(
        <View
        style={{
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.padding,
            padding: 20,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.secondary,
            ...styles.shadow
        }}>
          <Text style={{color: COLORS.white, ...FONTS.h3}}>Investir chez nous</Text>
          <Text style={{marginTop: SIZES.base, color: COLORS.white, ...FONTS.body4}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Ipsum is simply dummy text of the printing and typesetting industry, Ipsum 
           </Text>
            <TouchableOpacity
             style={{
                marginTop: SIZES.base
             }}
             onPress={() =>console.log("en savoir plus?")}
             >
              <Text style={{
                textDecorationLine: 'underline',
                color: COLORS.green, ...FONTS.h3
              }}>en savoir plus?</Text>
            </TouchableOpacity>
        </View>
    )
}

function renderTransactionHistory(){
    return(
        <TransactionHistory
        customContainerStyle={{...styles.shadow}}
        history={transactionHistory}
        />
    )
}


    return (
      <ScrollView >
         <View style={{flex: 1, paddingBottom: 130}}>
           {renderHeader()}
           {renderAlert()}
           {renderNotice()}
           {renderTransactionHistory()}
         </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default Home;