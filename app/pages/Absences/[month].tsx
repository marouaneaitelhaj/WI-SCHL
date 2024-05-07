import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Absences() {
    const { month } = useLocalSearchParams();
    return (
        <View>
            <Text>
                Absences for {month}
            </Text>
        </View>
    );
}