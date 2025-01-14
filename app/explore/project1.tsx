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
    <SafeAreaView style={tw`bg-white h-full`}>
      <ScrollView style={tw`px-5`}>
        <View>
            <Text style={tw`text-3xl text-center font-bold uppercase`}>Keunggulan RPL</Text>
            <View style={tw`mt-10`}>
                
                <Image source={require("../../assets/images/webui3.png")} style={tw`w-full h-70 rounded-lg `}/>
                
                <Text style={tw`text-justify text-md mt-5 leading-6 mt-8`}>Website ini adalah landing page modern yang mempromosikan platform gaming berbasis VR, dengan desain futuristik dan slogan "Let Your Mind Explore New World." Menawarkan koleksi game imersif, statistik proyek sukses, dan kepuasan pelanggan, desainnya memadukan warna neon ungu dan biru untuk menarik perhatian.</Text>
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
