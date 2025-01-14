import { Image, StyleSheet, Platform, View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import tw from "twrnc";
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* <Image source={require('../../assets/images/sung.jpg')} style={tw`h-full`}/> */}
          <ImageBackground source={require('../../assets/images/sung.jpg')} style={tw`h-120`}>
          </ImageBackground>

          <View style={tw`bg-white h-full rounded-t-[10] bottom-11 w-full p-12`}>
            <Text style={tw`text-4xl font-extrabold w-1/2`}>
              Abdan Syakuro 2
            </Text>
            <View style={tw`flex-row w-3/4 gap-6 items-center`}>
              <Text style={tw`mt-1 text-slate-800 text-lg font-semibold`}>
                Programmer
              </Text>
              <Text style={tw`mt-1 text-lg text-slate-800 font-semibold`}>
                <Entypo name='location-pin' style={tw`text-lg`} /> Bogor
              </Text>
            </View>
            <View style={tw`flex-row mt-5 justify-between`}>
              <View style={tw``}>
                  <Text style={tw`font-black text-2xl`}>XI</Text>
                  <Text style={tw`text-lg`}>Kelas</Text>
              </View>
              <View style ={tw``}>
              <Text style={tw`font-black text-2xl`}>RPL</Text>
              <Text style={tw`text-lg`}>Jurusan</Text>
              </View>
              <View style={tw``}>
              <Text style={tw`font-black text-2xl`}>9</Text>
                  <Text style={tw`text-lg`}>Projek</Text>
              </View>
            </View>
            <View>
              
              <Text style={tw` text-white  font-semibold text-center`}>Hire Me</Text>
            </View>

            <View style={tw`flex-row w-25 justify-between my-7`}>
              <View>
                <FontAwesome style={tw`text-xl`} name='facebook'/>
              </View>
              <View>
                <FontAwesome style={tw`text-xl`} name='linkedin'/>
              </View>
              <View>
                <FontAwesome style={tw`text-xl`} name='twitter'/>
              </View>
            </View>

            <View>
              <Text style={tw`text-xl font-bold uppercase`}>Tentang Saya</Text>
              <Text style={tw`mt-2 text-justify`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reprehenderit fugiat pariatur fugit facilis ducimus dolor in labore ut qui rem cumque voluptatum ex iure eaque sunt deleniti quos, culpa hic nemo quam ea aspernatur?</Text>
            </View>

            <View style={tw`my-6`}>
            <Text style={tw`text-xl font-bold uppercase`}>Projek</Text>
            <Text style={tw`mt-2 text-justify`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reprehenderit fugiat pariatur fugit facilis ducimus dolor in labore ut qui rem cumque voluptatum ex iure eaque sunt deleniti quos, culpa hic nemo quam ea aspernatur?</Text>
            </View>

            <View style={tw``}>
            <Text style={tw`text-xl font-bold uppercase`}>Software</Text>
            <View style={tw`flex-row justify-between mt-2`}>
              <Text style={tw`mt-1 p-2 border border-black/40 font-semibold`}>Visual Studio Code</Text>
              <Text style={tw`mt-1 p-2 border border-black/40 font-semibold`}>Android Studio</Text>
              <Text style={tw`mt-1 p-2 border border-black/40 font-semibold`}>Figma</Text>
            </View>
            
            </View>

           

          </View>
        </View>




      </ScrollView>
    </SafeAreaView>

  );
}

const css = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 12,
  },

});
{/* <View style={{justifyContent : 'center', alignItems : 'center'}}>
        <Image source={require('../../assets/images/sjw.png')} style={css.reactLogo}/>
      <Text style={{textAlign : 'center' , fontSize : 24, fontWeight : 'bold', color : 'purple'}}>Sung Jin Woo : Abdan </Text>
      <View style={{backgroundColor : 'black', borderRadius : 12, paddingBottom : 10, marginTop : 10, borderColor : 'purple' , borderWidth : 3}}>
         <Text style={{ marginTop : 10, fontWeight : 'semibold', fontSize : 12, textAlign : 'center' , width : 350, color : 'white'}}>Saya adalah seorang programmer yang menyukai backend development.
        Saat ini menduduki kelas 11 di SMK Pesat ITXPRO. Mata Pelajaran Favorit saya Matematika.
      </Text>
      </View>
    </View> */}