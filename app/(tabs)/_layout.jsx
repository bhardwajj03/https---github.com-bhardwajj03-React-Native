import { View, Text ,Image} from 'react-native'
import React from 'react'
import { Tabs,Redirect } from 'expo-router'
import {icons} from '../../constants';


const TabIcon=({icon,name,focused,color})=>{
    return (
        <View className="items-center justify-center gap-1">
        <Image
            source={icon}
            resizeMode="contain"
            tintColor={color}
            className="w-6 h-6" 
        />
        <Text className= {`${focused ? 'font-psemibold': 'font-pregular'} text-xs `}>
            {name}
        </Text>
    </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs screenOptions={{
            tabBarShowLabel:false,
            tabBarActiveTintColor:'#FFA001',
            tabBarInactiveTintColor:'#CDCDE0',
            tabBarStyle:{
                backgroundColor:'#161622',
                borderTopWidth:1,
                borderTopColor:'#232533',
                height:84
            }
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title:"Home",
                    headerShown:false,
                    tabBarIcon:({color,focused})=>(
                        <TabIcon
                            name="Home"
                            icon={icons.home}
                            focused={focused}
                            color={color}

                        />
                    )
                }}
            />
             <Tabs.Screen
                name="create"
                options={{
                    title:"Create",
                    headerShown:false,
                    tabBarIcon:({color,focused})=>(
                        <TabIcon
                            name="Create"
                            icon={icons.plus}
                            focused={focused}
                            color={color}

                        />
                    )
                }}
            />
             
             <Tabs.Screen
                name="bookmark"
                options={{
                    title:"Bookmark",
                    headerShown:false,
                    tabBarIcon:({color,focused})=>(
                        <TabIcon
                            name="Bookmark"
                            icon={icons.bookmark}
                            focused={focused}
                            color={color}

                        />
                    )
                }}
            />
            <Tabs.Screen
                name="Profile"
                options={{
                    title:"Profile",
                    headerShown:false,
                    tabBarIcon:({color,focused})=>(
                        <TabIcon
                            name="Profile"
                            icon={icons.profile}
                            focused={focused}
                            color={color}

                        />
                    )
                }}
            />
        </Tabs>
    </>
  )
}

export default TabsLayout