import { HStack } from 'native-base'
import { Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useGrafana from '../../hooks/useGrafana';



interface ButtonMapaProps {

}
export default function ButtonMapa(props : ButtonMapaProps){
    const {handleOpenBrowserMaps} = useGrafana()

    return(
        <TouchableOpacity className="border border-green-500  rounded-md flex justify-center items-center py-3 mt-5 w-full" onPress={handleOpenBrowserMaps}>
            
            <HStack space={2}>
                <Text className="text-green-500 text-lg font-bold uppercase">
                Ver Mapa
                </Text>
                <MaterialCommunityIcons name="map" size={24} color="green" />
            </HStack>
        </TouchableOpacity>
    )
}