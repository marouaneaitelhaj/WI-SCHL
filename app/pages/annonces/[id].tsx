import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { View, Text } from "react-native";

export default function Annonce() {
  // get param body
  const { id } = useLocalSearchParams();
  useEffect(() => {
  }, []);

  return (
    <View>
      <Text className="font-bold">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iure cum,
        autem voluptates officiis optio excepturi quisquam iusto commodi
        corrupti similique ad cumque aliquam labore accusamus deleniti incidunt
        doloribus dolorum.
      </Text>
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iure cum,
        autem voluptates officiis optio excepturi quisquam iusto commodi
        corrupti similique ad cumque aliquam labore accusamus deleniti incidunt
        doloribus dolorum.
      </Text>
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iure cum,
        autem voluptates officiis optio excepturi quisquam iusto commodi
        corrupti similique ad cumque aliquam labore accusamus deleniti incidunt
        doloribus dolorum.
      </Text>
    </View>
  );
}
