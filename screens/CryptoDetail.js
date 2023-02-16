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

import { HeaderBar, CurrencyLabel, TextButton, PriceAlert } from "../components";

import { dummyData, COLORS, SIZES, FONTS, icons, images } from '../constants';


const CryptoDetail = ({ route, navigation }) => {

    // const scrollX = new Animated.Value(0);
    // const numberOfChart = [1, 2, 3];

    const [selectedCurrency, setSelectedCurrency] = useState(null)
  
    const [chartOption, setChartOption] = useState(dummyData.chartOptions);

    const [selectedOption, setSelectedOption] = useState(chartOption[0]); 
useEffect(() => {
   const {currency} = route.params; 
   setSelectedCurrency(currency)
}, [])

function optionOnclickHandler(option) {
    setSelectedOption(option);
}

function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return(
        <View style={{
            height: 30,
            marginTop: 15,
        }}
        >
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
            {
                numberOfChart.map((item, index) => {
                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [SIZES.base * 0.8, 10, SIZES, base * 0.8],
                        extrapolate: 'clamp'
                    })
                    const dotColor = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [COLORS.gray, COLORS.primary, COLORS.gray],
                        extrapolate: 'clamp'
                    })
                    return(
                        <Animated.View 
                        key={`dot-${index}`}
                        opacity={opacity}
                        style={{
                            borderRadius: SIZES.radius,
                            marginHorizontal: 6,
                            width: dotSize,
                            height: dotSize,
                            backgroundColor: dotColor,
                            
                        }}
                        />
                    )
                })
            }
          </View>
        </View>
    )

}


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
                            </View>
                        </View></>
                    
                    ))
                }
          </Animated.ScrollView>
          {/* options */}
         <View 
         style={{
            width:"100%",
            paddingHorizontal: SIZES.padding,
            flexDirection: 'row',
            justifyContent: 'space-between' 
         }}
         >
            {chartOption.map((option) => {
                <TextButton 
                key={`option=${option.id}`}
                label={option.label}
                customContainerStyle={{
                    height: 30,
                    width: 60,
                    borderRadius: 15,
                    backgroundColor: selectedOption.id == option.id ? 
                     COLORS.primary : COLORS.lightGray
                }}
                customLableStyle={{
                    color: selectedOption.id == option.id ?
                     COLORS.white : COLORS.gray, ...FONTS.body5
                }}
                onPress={() => optionOnclickHandler(option)}
                />
            })}
         </View>

          {/* Dots */}

          <View></View>


       </View> 
    )
}

function renderBuy() {
    return(
        <View 
        style={{
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.radius,
            padding: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
            ...styles.shadow
        }}
        >
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: SIZES.radius
            }}
            >
                {/* currency */}
                <View style={{ flex: 1}}>
                    <CurrencyLabel 
                      icon={selectedCurrency?.image}
                      currency={`${selectedCurrency?.currency} wallet`}
                      code={selectedCurrency?.code}

                    />
                </View>
                {/* amount */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{
                        marginRight: SIZES.base
                    }}>
                        <Text style={{...FONTS.h3}}>{selectedCurrency?.wallet.value} Frs</Text>
                        <Text style={{textAlign: 'right', color: COLORS.gray, ...FONTS.body4}}>
                        {selectedCurrency?.wallet.crypto} {selectedCurrency?.code}</Text>
                    </View>
                    <Image 
                    source={icons.right_arrow}
                    resizeMode="cover"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray
                    }}
                    />
                </View>
            </View>
            <TextButton 
            label="Acheter"
            onPress={() => navigation.navigate("Transition", {currency: selectedCurrency})}
            
            />
        </View>
    )
}
 function renderAbout() {
    return(
        <View 
           style={{
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
            ...styles.shadow
           }}>
             <Text style={{...FONTS.h3}}>About {selectedCurrency?.currency}</Text>
             <Text style={{marginTop: SIZES.base, ...FONTS.body3}}>{selectedCurrency?.description}</Text>
        </View>
    )
 }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.lightGray1
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
                {renderBuy()}
                {renderAbout()}
              <PriceAlert 
                customContainerStyle={{
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.radius

                }}
              />
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