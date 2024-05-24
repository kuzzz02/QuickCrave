import { View, Text,TouchableOpacity,Image, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../components'
import { useNavigation } from '@react-navigation/native'
import * as Icon from "react-native-feather";


export default function ShoppingCart() {
    const navigation = useNavigation();
  return (
    
    <View className="flex-1">
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 50
        }}
        className="bg-white pt-5"
      >
        {
            <View className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3"
                style={{
                    elevation: 5,
                }}>
                    <Image className="h-25 w-25 rounded-full" source={require("../common/burger.png")} />
                    <View className="flex-1">
                        <Text className="font-bold text-gray-700">Chiken burger</Text>
                        <Text className="flex-1 font-bold">Mc'Donald</Text>
                        <Text className="font-semibold text-lg text-green-500">$10</Text>
                    </View>
                    <TouchableOpacity
                        className="p-1 rounded-xl"
                        style={{backgroundColor:themeColors.bgColor(1)}}
                    >
                        <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                    </TouchableOpacity>
                    <Text className="font-bold">1</Text>
                    <TouchableOpacity
                        className="p-1 rounded-xl"
                        style={{backgroundColor:themeColors.bgColor(1)}}
                    >
                        <Icon.Plus strokeWidth={2} height={20} width={20} stroke="white" />
                    </TouchableOpacity>
            </View>
            
            
        }
        </ScrollView>
        <View className="p-2 px-2 flex-1 bg-white">
            <View className="p-3 px-4 bg-white rounded-t-3xl rounded-b-3xl "
                    style={{
                            elevation : 5,
                        }}>
                <View className="flex-row">
                    <Text className="text-gray-500 text-base font-bold">Deliver To</Text>
                    <TouchableOpacity
                        onPress={()=>{}}
                        className="flex-1 flex-row justify-end">
                            <Text className="text-green-500 text-base font-bold">Edit</Text>
                        </TouchableOpacity>
                </View>
                <View className="flex-row">
                    <View className="rounded-full pl-1 pt-1"
                        style={{backgroundColor: '#F8D52B',width:47, height:47 }}>
                        <Icon.MapPin color="orange" height="40" width="40"  />
                    </View>
                    <Text className="flex-row text-xl font-bold text-black">  H244, SCNU</Text>
                </View>
            </View>
        </View>
        <View className="p-2 px-2 bg-white">
            {/* totals */}
            <View style={{backgroundColor:themeColors.bgColor(1)}} className="p-6 px-8 rounded-t-3xl rounded-b-3xl space-y-4">
                <View className="flex-row justify-between">
                    <Text className="text-white text-base font-bold">Sub-total</Text>
                    <Text className="text-white text-base font-bold">$47</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-white text-base font-bold">Deliver Charge</Text>
                    <Text className="text-white text-base font-bold">$10</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-white text-xl font-extrabold">Total</Text>
                    <Text className="text-white text-xl font-extrabold">$57</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate('Track')}
                        className="p-3 rounded-2xl bg-white"
                    >
                        <Text className="text-center font-bold text-xl"
                            style={{color:themeColors.bgColor(1)}}>
                            Place My Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        {/* Home and Cart */}
        <View className="bg-white p-2 px-1 rounded-t-3xl">
            <View className="flex-row items-center space-x-3 mr-3">
                <View className="flex-1"></View>
                <TouchableOpacity
                    onPress={()=> navigation.navigate('SignUp')}
                    className="bg-white items-center flex-1 w-20 h-20"
                >
                    <Image source={require('../common/home.png' )} className="w-10 h-10"/>
                    <Text className="text-black text-center font-bold">
                        Home
                    </Text>
                </TouchableOpacity>
                <View className="flex-1"></View>
                <TouchableOpacity
                    onPress={()=> navigation.navigate('ShoppingCart')}
                    className="bg-white items-center flex-1 w-20 h-20"
                >
                    <Image source={require('../common/cart.png' )}  className="w-10 h-10"/>
                    <Text className="text-black text-center font-bold">
                        Cart
                    </Text>
                </TouchableOpacity>
                <View className="flex-1"></View>
            </View>
        </View>
    </View>
    
  )
}