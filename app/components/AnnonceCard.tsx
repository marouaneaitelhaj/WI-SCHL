import { View, Text } from 'react-native';
import { Icon } from 'react-native-paper';

export default function AnnonceCard() {
    return (
        <View className='bg-[#D4F4FF] flex space-y-2 p-5 m-3 rounded-md'>
            <Icon source='star' size={30} color='#FAD175' />
            <Text className='font-bold'>AnnonceCard</Text>
            <Text className='font-light text-gray-600'>
                12 Juin 2021
            </Text>
        </View>
    );
}