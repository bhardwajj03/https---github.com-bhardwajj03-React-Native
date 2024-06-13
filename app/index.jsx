import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View ,Image} from 'react-native';
import { Redirect,router} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from './component/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
          contentContainerStyle={{height:'100%'}}
      />
      <StatusBar backgroundColor='#161622' style='light'/>
      <View className="w-full px-4   h-full">
        <Image 
          source={images.logo}
          className="w-[130px] h-[84px] "
          resizeMode='contain'
        />
        <Image 
          source={images.cards}
          className="max-w-[380px] w-full h-[280px] "
          resizeMode='contain'
        />
        <View className="relative mt-5">
          <Text className="text-2xl text-white text-center font-bold ">
            Hello Guyz lets explore with the vision of {``}
            <Text className="text-secondary-200">Aditya</Text>
          </Text>
          <Image 
          className="w-[90px] absolute -bottom-5 right-10"  
          source={images.path}
          resizeMode='contain'
          />
        </View>
        <Text className="font-pregular text-gray-100 mt-7 text-center text-xs">
          I am making this APP using React Native to get my hands ready to do any future projects
        </Text>
        <CustomButton 
          title="Continue with Email"
          handlePress={()=>router.push('./Sign-In')}
          containerStyles="w-full mt-4"
        />
      </View>
    </SafeAreaView>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });