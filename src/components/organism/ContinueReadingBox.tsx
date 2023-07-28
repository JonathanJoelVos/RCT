import { HStack, Icon, Image, Progress, Text, View, VStack } from "native-base";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { Pressable } from "react-native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { getLastBookReadInStorage } from "../../storage/storageLastBookRead";
import { BookType } from "../../dtos/book";

interface ContinueReadingBoxProps {
    firstAccess?: boolean
}
export default function ContinueReadingBox({
    firstAccess = false
}: ContinueReadingBoxProps) {
    const [lastBookRead, setLastBookRead] = useState<BookType>({
            id: "1",
            srcImage: "https://fapesc.sc.gov.br/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-21-at-17.47.44.jpeg",
            title: "RCT Apresentação",
            autor: "RCT",
            rate: "5.0",
            bookURL: require('../../assets/RCT-Apresentação.pdf')
        })
    const navigation = useNavigation<AppNavigatorRoutesProps>();
    const percentsRead = (Number(lastBookRead?.lastPageRead) / Number(lastBookRead?.totalPages)) * 100

    async function getLastBookRead() {
        const lastBook = await getLastBookReadInStorage()
        if(!lastBook) return
        setLastBookRead(lastBook)
    }

    useFocusEffect(useCallback(() => {
        getLastBookRead()
    }, []))

    return (
        <>
            {
                !!lastBookRead ? (
                    <Pressable className="active:scale-95" onPress={() => {
                        navigation.navigate("read", {
                            book: lastBookRead
                        })
                    }}>
                        <HStack className="mt-3 border p-4 rounded-md border-gray-100">
                            <Image
                                source={{
                                    uri: lastBookRead.srcImage
                                }}
                                alt="Alternate Text"
                                size="xl"
                                rounded="md"
                                marginRight={5}
                            />
                            <VStack className="flex-1">
                                <HStack className="flex flex-row items-center justify-between">
                                    <HStack className="bg-yellow-100 rounded-full p-1 items-center">
                                        <Icon
                                            as={AntDesign}
                                            name="star"
                                            size={4}
                                            color="yellow.500"
                                        />
                                        <Text
                                            className="ml-2 text-yellow-500 text-sm"
                                        >
                                            {lastBookRead.rate}
                                        </Text>
                                    </HStack>
                                    <HStack>
                                        <View className="bg-gray-200 rounded-full flex items-center justify-center w-6 h-6">
                                            <Icon
                                                as={AntDesign}
                                                name="book"
                                                size={4}
                                                color="gray.300"
                                            />
                                        </View>
                                        <View className="bg-gray-200 rounded-full flex items-center justify-center w-6 h-6 ml-2">
                                            <Icon
                                                as={MaterialCommunityIcons}
                                                name="crown"
                                                size={4}
                                                color="yellow.500"
                                            />
                                        </View>
                                    </HStack>
                                </HStack>
                                <Text
                                    className="text-lg font-bold mt-2"
                                    fontFamily="extra"
                                >
                                    {lastBookRead.title}
                                </Text>
                                <Text
                                    className="text-sm"
                                    fontFamily="body"
                                >
                                    {lastBookRead.autor}
                                </Text>
                                <Progress colorScheme="red" value={percentsRead} className="mt-3" />
                            </VStack>
                        </HStack>
                    </Pressable>
                ) : null
            }
        </>

    )
}