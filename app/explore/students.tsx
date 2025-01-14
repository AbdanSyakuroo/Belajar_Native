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
    <SafeAreaView style={tw`bg-white`}>
      <ScrollView>
        <View style={tw`px-5`}>
            <Text style={tw`text-3xl text-center font-bold uppercase`}>Daftar Siswa RPL</Text>
            <View style={tw`mt-10 flex-row justify-between gap-5`}>
                <View style={tw`items-center`}>
                    <Link href="/explore/students1">
                <Image source={require("../../assets/images/jin.jpg")} style={tw`w-45 h-45 rounded-lg`}/>
                </Link>
                <Text style={tw`font-semibold text-lg text-center absolute bottom-3 bg-white rounded-lg w-3/4 border-2 border-purple-600`}>Sung Jin Woo</Text>
                </View>
                <View style={tw`items-center`}>
                    <Link href="/explore/students1">
                <Image source={require("../../assets/images/oldest.jpg")} style={tw`w-45 h-45 rounded-lg`}/>
                </Link>
                <Text style={tw`font-semibold text-lg text-center absolute bottom-3 bg-white rounded-lg w-3/4 border-2 border-yellow-600`}>Kim Dokja</Text>
                </View>
                
            </View>
            <View style={tw`mt-8 flex-row justify-between gap-5`}>
                <View style={tw`items-center`}>
                    <Link href="/explore/students1">
                <Image source={require("../../assets/images/desperate.jpg")} style={tw`w-45 h-45 rounded-lg`}/>
                </Link>
                <Text style={tw`font-semibold text-lg text-center absolute bottom-3 bg-white rounded-lg w-3/4 border-2 border-gray-600`}>Natsuki Subaru</Text>
                </View>
                <View style={tw`items-center`}>
                     <Link href="/explore/students1">
                <Image source={require("../../assets/images/cheater.jpg")} style={tw`w-45 h-45 rounded-lg`}/>
                </Link>
                <Text style={tw`font-semibold text-lg text-center absolute bottom-3 bg-white rounded w-3/4 border-2 border-blue-600`}>Kirigaya Kazuto</Text>
                </View>
            </View>
            <View style={tw`mt-8 flex-row justify-between gap-5 mb-5`}>
                <View style={tw`items-center`}>
                    <Link href="/explore/students1">
                <Image source={require("../../assets/images/archer.jpg")} style={tw`w-45 h-45 rounded-lg`}/>
                </Link>
                <Text style={tw`font-semibold text-lg text-center absolute bottom-7.5 bg-white rounded-lg w-3/4 border-2 border-green-600`}>Gilgamesh</Text>
                </View>
                <View style={tw`mb-5 items-center`}>
                  <Link href="/explore/students1">
                <Image source={require("../../assets/images/king.jpg")} style={tw`w-45 h-45 rounded-lg`}/>
                </Link>   
                <Text style={tw`font-semibold text-lg text-center absolute bottom-2 bg-white rounded-lg border-2 border-red-600 w-3/4`}>Arthur Leywin</Text>
                </View>
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
