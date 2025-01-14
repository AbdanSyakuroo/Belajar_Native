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
      <ScrollView style={tw`px-5`}>
        <View>
            <Text style={tw`text-3xl text-center font-extrabold`}>Karya Terbaik Siswa/i Jurusan RPL</Text>
            <View style={tw`mt-8`}>
                <Link href="/explore/project1">
                <Image source={require("../../assets/images/webui3.png")} style={tw`w-full h-70 rounded-lg mt-8 `}/>
                </Link>
                <Link href="/explore/project1" style={tw`mt-8`}>
                <Image source={require("../../assets/images/webui.jpg")} style={tw`w-full h-70 rounded-lg mb-10`}/>
                </Link>
                <Link href="/explore/project1" style={tw`mt-8 mb-15`}>
                <Image source={require("../../assets/images/appui.webp")} style={tw`w-full h-70 rounded-lg `}/></Link>
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
