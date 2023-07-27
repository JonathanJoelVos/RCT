import { useFocusEffect } from '@react-navigation/native'
import * as WebBrowser from 'expo-web-browser'
import { HStack, Image, View } from 'native-base'
import { useCallback, useEffect } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import TopicHeading from '../components/organism/TopicHeading'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useGrafana from '../hooks/useGrafana'
import ButtonRede from '../components/atoms/ButtonRede'
import ButtonMapa from '../components/atoms/ButtonMapa'
import Header from '../components/molecules/Header'
import DataBaseSvg from '../assets/databases-65428.png'

interface GrafanaPageProps {

}
export default function GrafanaPage(props : GrafanaPageProps){
    
    return(
        <>
            <Header 
                title='Dados atuais'
            />
            <View className='flex-1 justify-center flex items-center bg-white p-5'>
                <Image 
                    source={DataBaseSvg}
                    alt='DataBase'
                    className='mb-10'
                />
                <ButtonRede />
                <ButtonMapa />
            </View>
        </>
    )
}