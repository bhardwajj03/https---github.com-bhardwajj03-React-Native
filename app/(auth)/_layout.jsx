import { StatusBar, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name='Sign-In'
          options={{
            headerShown:false
          }} 
        />
        <Stack.Screen
          name='Sign-Up'
          options={{
            headerShown:false
          }} 
        />
      </Stack>
      <StatusBar backgroundColor='#161622' style='light'/>
    </>
  )
}

export default AuthLayout

