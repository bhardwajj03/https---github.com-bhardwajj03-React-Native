import { TouchableOpacity, Text, Button } from 'react-native'
import React from 'react'

const CustomButton = ({title,handlePress,containerStyles,isLoading,textStyles}) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.5}

     className={`bg-secondary rounded-xl -bottom-4 min-h-[50px]
      justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50':''}`} disabled={isLoading}>  
        <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
    
  )
}

export default CustomButton

