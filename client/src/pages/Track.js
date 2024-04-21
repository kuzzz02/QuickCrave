import { View, Text,Image, ImageBackground } from 'react-native'
import React from 'react'
import { themeColors } from '../components'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';

export default function Track() {
    const navigation = useNavigation();
  return (
    <View className="pl-2 pb-5 flex-1">
        <TouchableOpacity
                onPress={()=>navigation.goBack()}
                style={{
                  elevation : 5,
              }}
                className="absolute top-6 left-4 bg-gray-50 p-2 rounded-2xl">
            <Icon.ArrowLeft strokeWidth={3} stroke={'red'} />
        </TouchableOpacity>
        {/* map view */}
        {/* <MapView
            initialRegion={{
                latitude: restaurant.lat,
                longitude: restaurant.lng,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            className="flex-1"
            mapType='stardard'
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.lng,
                    }}
                    title={restaurant.name}
                    description={restaurant.description}
                    pinColor={themeColors.bgColor(1)}
                />
            </MapView> */}
            <View className="flex-1"></View>
            <View className="rounded-3xl ml-2 mr-3 overflow-hidden">
                <ImageBackground source={require('../common/background.jpg')} resizeMode="cover">
                    <Text className="px-5 pt-5 text-lg text-black font-extrabold">
                        Track Orders
                    </Text>
                    <View className="px-2 pt-5">
                        <View className="flex-row bg-white rounded-2xl">
                            <Image className="flex-row m-3 h-16 w-16 rounded-xl"
                                source={require('../common/deliveryman.png')} />
                            <View className="flex-1 ml-3">
                                <View className="flex-1"></View>
                                <Text className="flex-row text-base font-extrabold text-black">
                                    Mr Kemplas
                                </Text>
                                <Text className=" flex-row mt-2 text-gray-400 font-semibold">
                                    <Image source={require('../common/tracktool.png')} style={{width:15, height:15}}/>25 minutes on the way 
                                </Text>
                                <View className="flex-1"></View>
                            </View>
                        </View> 
                    </View>
                    <View className="px-2 pt-5 pb-5">
                        <View className="bg-white flex-row rounded-xl">
                            <View className="flex-row">
                                <View className="flex-row rounded-xl">
                                    <TouchableOpacity onPress={()=>{}} className="bg-white w-64 h-20 rounded-xl">
                                        <View className="flex-row pl-24 pt-8">
                                            <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={1} />
                                            <Text className="text-green-500 text-basefont-bold">  Call</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View className="flex-row rounded-xl pl-4">
                                    <TouchableOpacity onPress={()=>{}} className="w-20 h-20 rounded-xl"
                                        style={{backgroundColor: themeColors.bgColor(1)}}>
                                        <View className="flex-row pl-7 pt-7">
                                            <Icon.Mail stroke={'white'} strokeWidth={4} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
    </View>
  )
}