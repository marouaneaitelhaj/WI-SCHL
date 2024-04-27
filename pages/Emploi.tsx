import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Agenda, AgendaEntry, Calendar } from "react-native-calendars";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootState } from "../state/store";
import { useSelector } from "react-redux";

export default function Emploi() {
  const { events } = useSelector((state: RootState) => state.emploisDuTemps);

  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        selected="2022-12-01"
        items={{
          "2022-12-02": [
          ] as AgendaEntry[],
        }}
        renderItem={(item, isFirst) => (
          <TouchableOpacity style={styles.item}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: "#888",
    fontSize: 16,
  },
});
