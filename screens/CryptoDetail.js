import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    SafeAreaView,
    Animated,
    TouchableOpacity
} from 'react-native';

import { VictoryScatter, VictoryLine, VictoryChart, VictoryAxis} from 'victory-native';

import { HeaderBar, CurrencyLabel } from "../components";

import { dummyData, COLORS, SIZES, FONTS, icons, images } from '../constants';


const CryptoDetail = ({ route, navigation }) => {

    const [selectedCurrency, setSelectedCurrency] = useState(null)

useEffect(() => {
   const {currency} = route.params; 
   setSelectedCurrency(currency)
}, [])

function renderChart() {
    return(
       <View style={{
         marginTop: SIZES.padding,
         marginHorizontal: SIZES.radius,
         alignItems: 'center',
         borderRadius: SIZES.radius,
         backgroundColor: COLORS.white,
         ...styles.shadow
       }}>
          {/* header */}
           <View style={{
                flexDirection: 'row',
                marginTop: SIZES.padding,
                paddingHorizontal: SIZES.padding,
             }}
           > 
           <View style={{flex: 1,}}>
            <CurrencyLabel  
            icon={selectedCurrency?.image}
            currency={selectedCurrency?.currency}
            code={selectedCurrency?.code}
            />
           </View>
           <View>
              <Text style={{...FONTS.h3}}>{selectedCurrency?.amount} Frs</Text>
              <Text style={{color: selectedCurrency?.type == "I" ? COLORS.green : COLORS.red, ...FONTS.body3}}>{selectedCurrency?.changes}</Text>
           </View>
             </View>
          {/* chart */}
          {/* options */}
          {/* Dots */}


       </View> 
    )
}

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.lightGray
        }}>
           <HeaderBar 
                right={true}  
           />
           <ScrollView>
            <View style={{
                flex: 1,
                paddingBottom: SIZES.padding,
            }}>
                {renderChart()}
            </View>
           </ScrollView>
        </SafeAreaView>
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

export default CryptoDetail;