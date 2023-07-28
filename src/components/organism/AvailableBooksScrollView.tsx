import { ScrollView } from "native-base";
import { AntDesign } from '@expo/vector-icons'
import BookBox from "../molecules/BookBox";

interface AvailableBooksScrollViewProps {

}
export default function AvailableBooksScrollView(props: AvailableBooksScrollViewProps) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-2"
        >
            <BookBox
                book={{
                    id: "1",
                    srcImage: "https://fapesc.sc.gov.br/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-21-at-17.47.44.jpeg",
                    title: "RCT-Apresentação",
                    autor: "RCT",
                    rate: "5.0",
                    bookURL: require('../../assets/RCT-Apresentação.pdf')
                }}
            />
            <BookBox
                book={{
                    id: "2",
                    title: "RCT-EBOOK",
                    autor: "RCT",
                    rate: "5.0",
                    srcImage: "https://fapesc.sc.gov.br/wp-content/uploads/2022/01/banner-lateral_plataforma.jpg",
                    bookURL: require('../../assets/RCT-EBOOK.pdf')
                }}
            />
        </ScrollView>
    )
}