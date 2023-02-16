import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    SafeAreayView,
    View,
    Text,
    ScrollView,
} from 'react-native';

import { HeaderBar, CurrencyLabel, TextButton, TransactionHistory } from '../components';

import { dummyData, COLORS, SIZES, FONTS, icons, images } from '../constants';

const [selectedCurrency, setselectedCurrency] = useState(null);

const Transaction = ({route}) => {
    useEffect(() => {
        const {currency} = route.params
        setselectedCurrency(currency)
    }, [])
    function renderTrade() {
        return(
          <View style={{
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.padding,
            padding: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
            ...styles.shadow
          }}>
           <CurrencyLabel 
             icon={selectedCurrency?.image}
             currency={selectedCurrency?.currency}
             code={selectedCurrency?.code}
           />
           <View
           style={{
            marginTop: SIZES.padding,
            marginBottom: SIZES.padding * 1.5,
            justifyContent: 'center',
            alignItems: "center",
           }}>
            <Text style={{...FONTS.h2}}>{selectedCurrency?.wallet.crypto} {selectedCurrency?.code}</Text>
            <Text style={{color: COLORS.gray, ...FONTS.body4}}>{selectedCurrency?.wallet.value} Frs</Text>
           </View>
           <TextButton  
           label="trader"
           onPress={() => console.log("trader")}/>
          </View>
        )
    }

    function renderTransactionHistory(){
        return(
            <TransactionHistory 
              customContainerStyle={{
                ...styles.shadow
              }}
              history={selectedCurrency?.transactionHistory}
            />
        )
    }
    return (
        <SafeAreayView
        style={{flex: 1}}
        >
            <HeaderBar right={false}/>


        <ScrollView>
            <View style={{flex: 1, paddingBottom: SIZES.padding}}>
                {renderTrade()}
                {renderTransactionHistory()}
            </View>
        </ScrollView>
        </SafeAreayView>
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

export default Transaction;