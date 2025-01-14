import { StyleSheet, Image, Platform, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import tw from "twrnc";
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';


export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
          <View style={tw`p-10 items-center`}>
             <Image source={require('../../assets/images/smk.webp')} style={tw`h-50 w-50 rounded-full border`} />
             <Text style={tw`text-2xl font-semibold mt-2`}>SMK Pesat IT XPRO</Text>
             <Text style={tw`w-3/4 text-center text-slate-400 mt-1 font-semibold`}>"Sekolah Umum Berbasis Agama Pilihan Siswa/i Terbaik"</Text>
             
              <View style={tw`flex-row gap-5 mt-5`}>
            <Entypo style={tw`text-xl text-red-500 bg-slate-200 rounded-full p-2 px-3 `} name='youtube'/>
            <Entypo style={tw`text-xl text-blue-500 bg-slate-200 rounded-full p-2 px-3 `} name='twitter'/>
            <Entypo style={tw`text-xl text-rose-500 bg-slate-200 rounded-full p-2 px-3 `} name='instagram'/>
            <Entypo style={tw`text-xl text-blue-500 bg-slate-200 rounded-full p-2 px-3 `} name='linkedin'/>
          </View>
          </View>

          <View style={tw`flex-row justify-around`}>
              <View style={tw``}>
                  <Text style={tw`font-black text-2xl`}>111</Text>
                  <Text style={tw`text-lg text-center`}>RPL</Text>
              </View>
              <View style ={tw``}>
              <Text style={tw`font-black text-2xl`}>120</Text>
              <Text style={tw`text-lg text-center`}>DKV</Text>
              </View>
              <View style={tw``}>
              <Text style={tw`font-black text-2xl`}>150</Text>
                  <Text style={tw`text-lg text-center`}>TKJ</Text>
              </View>
            </View>

          <View style={tw`flex-row gap-3 mt-4 justify-center px-8`}>
         <Link href="/explore/project" style={tw`border-blue-700 border py-3 mt-5 rounded w-1/2`}> 
          <Text style={tw`text-blue-700  font-semibold text-center `}>Projek</Text>
          </Link>
          <Link href="/explore/students" style={tw`bg-blue-700 border-blue-700 border py-3 mt-5 w-1/2 rounded`}> 
          <Text style={tw`text-white  font-semibold text-center rounded`}>Siswa</Text>
          </Link>  
          </View>
         
         <View style={tw`mt-8 flex-row gap-3 justify-center px-8 mt-10`}>
              <Image source={require('../../assets/images/bw.webp')} style={tw`h-30 rounded w-1/3`}/>
              <Image source={require('../../assets/images/ABB.webp')} style={tw`h-30 rounded w-1/3`}/>
              <Image source={require('../../assets/images/bro.webp')} style={tw`h-30 rounded w-1/3`}/>
         </View>
         <View style={tw`mt-8 flex-row gap-3 justify-center px-8 pb-10`}>
              <Image source={require('../../assets/images/ldk.webp')} style={tw`h-30 rounded w-1/3`}/>
              <Image source={require('../../assets/images/semi.webp')} style={tw`h-30 rounded w-1/3`}/>
              <Image source={require('../../assets/images/serti.webp')} style={tw`h-30 rounded w-1/3`}/>
         </View>

         
    </ScrollView>
    </SafeAreaView>
  );
}

const css = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  reactLogo: {
    height: 80,
    width: 80,
    borderRadius: 100,
    marginBottom: 12,
  },
  icon: {
    height: 75,
    width: 75,
    borderRadius: 100,
    backgroundColor: "#69247C",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingStart: 1
  },
  baris: {
    display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8, flexBasis: '48%'
  },
});
