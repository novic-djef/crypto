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

import { VictoryScatter, VictoryLine, VictoryChart, VictoryAxis} from "victory-native";

import {VictoryCustomTheme} from "../styles"

import { HeaderBar, CurrencyLabel } from "../components";

import { dummyData, COLORS, SIZES, FONTS, icons, images } from '../constants';


const CryptoDetail = ({ route, navigation }) => {

    const scrollX = new Animated.Value(0);
    const numberOfChart = [1, 2, 3];

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
          <Animated.ScrollView 
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          snapToAlignment="center"
          snapToInterval={SIZES.width -40}
          showsVerticalScrollIndicator={false}
          decelerationRate={0}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {x: scrollX}}}
          ], {useNativeDriver: false})}
          >
            {
                numberOfChart.map((item, index) =>(
           <><View
                        key={`chart-${index}`}
                        style={{
                            marginLeft: index == 0 ? SIZES.base : 0
                        }}>

                    </View>
                    <View style={{ marginTop: -25 }}>
                            <VictoryChart
                                theme={VictoryCustomTheme}
                                height={220}
                                width={SIZES.width - 40}
                            >
                                <VictoryLine
                                    style={{
                                        data: { stroke: COLORS.secondary },
                                        parent: { border: "1px solid #ccc" }
                                    }}
                                    data={selectedCurrency?.chartData}
                                    categories={{
                                        x: ["15 MIN,", "30 MIN", "45 MIN", "60 MIN"],
                                        y: ["15", "30", "45"]
                                    }} />
                                <VictoryScatter
                                    data={selectedCurrency?.chartData}
                                    size={7}
                                    style={{
                                        data: {
                                            fill: COLORS.secondary
                                        }
                                    }} />
                                <VictoryAxis
                                    style={{
                                        grid: {
                                            stroke: "transprent"
                                        }
                                    }} />
                                <VictoryAxis
                                    dependentAxis
                                    style={{
                                        axis: {
                                            stroke: "transprent"
                                        },
                                        grid: {
                                            stroke: "grey"
                                        }
                                    }} />
                            </VictoryChart>
                        </View></>
                    
                    ))
                }
          </Animated.ScrollView>
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