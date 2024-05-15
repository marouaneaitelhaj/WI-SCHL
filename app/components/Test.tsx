import { memo } from "react";
import { Text } from "react-native";
import { View } from "react-native";

function Test() {
    console.log("Test");
    
    return (
        <View>
            <Text>Test</Text>
        </View>
    )
}
export default memo(Test);