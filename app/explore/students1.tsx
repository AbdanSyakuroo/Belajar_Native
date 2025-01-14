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
    <SafeAreaView style={tw`bg-black h-full`}>
      <ScrollView style={tw`px-5`}>
        <View>
            <Text style={tw`text-4xl text-center text-white font-extrabold`}>Detail Siswa</Text>
            <View style={tw`mt-10 items-center`}>
               
                <Image source={require("../../assets/images/king.jpg")} style={tw`w-full h-80 rounded-xl`}/>
                
                    <Text style={tw`text-2xl font-bold bg-white p-2 w-50 text-center rounded-lg z-20 bottom-6 border-2 border-black/50`}>Arthur Leywin</Text> 
                    <View style={tw`bg-white p-6  rounded-lg mb-5 bottom-11`}>
                <View style={tw`flex-row justify-between w-full`}>
                    <View>
                    <Text style={tw`font-bold text-lg text-center `}>
                        #1
                    </Text> 
                    <Text style={tw`text-center`}>
                        Rank
                    </Text>
                      
                    </View>
                    <View>
                    <Text style={tw`font-bold text-lg text-center `}>
                        XI 
                    </Text> 
                    <Text style={tw`text-center`}>
                        Kelas
                    </Text>
                    </View>
                    <View>
                    <Text style={tw`font-bold text-lg text-center `}>
                        RPL 
                    </Text> 
                    <Text style={tw`text-center`}>
                        Jurusan
                    </Text>
                    </View>
                    
                </View>
               </View>
               <Text style={tw`text-2xl font-bold bg-white p-2 w-50 text-center rounded-lg bottom-20 border-2 border-black/50 z-20`}>Main Character</Text> 
               <View style={tw`bg-white p-9 rounded-xl mb-5 bottom-27 `}>
                <Text style={tw`text-justify text-md font-semibold`}><Text style={tw`font-extrabold text-lg text-yellow-800 italic`}>Arthur Leywin</Text>  adalah protagonis utama dari seri <Text style={tw`text-lg text-blue-700 font-bold italic`}>The Beginning After The End.</Text> Ia adalah reinkarnasi dari seorang raja kuat bernama <Text style={tw`text-gray-600 font-bold text-lg italic`}>"Grey"</Text>, yang di kehidupan sebelumnya hidup dalam dunia yang penuh kesendirian dan tekanan. Dalam kehidupan barunya di Dunia <Text style={tw`text-red-600 text-lg font-bold italic`}>"Fantasi"</Text> bernama <Text style={tw`text-yellow-600 text-lg font-bold italic`}>Dicathen</Text>, <Text style={tw`font-extrabold text-lg text-yellow-700 italic`}>Arthur</Text> terlahir kembali dengan kesempatan untuk menjalani hidup yang lebih bermakna.</Text>
               </View>
               <Text style={tw`text-lg text-black font-semibold bg-white p-2 w-30 text-center rounded-xl bottom-38 border-2 border-black/50`}>Ikuti</Text> 
               
                
            </View>
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
