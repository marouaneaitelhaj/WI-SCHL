import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Agenda, AgendaEntry, Calendar } from "react-native-calendars";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootState, useAppDispatch } from "../state/store";
import { useSelector } from "react-redux";
import { getEmploisDuTemps } from "../state/EmploisDuTemps/EmploisDuTempsActions";
import { MarkedDates } from "react-native-calendars/src/types";

export default function Emploi() {
  const { events } = useSelector((state: RootState) => state.emploisDuTemps);

  const disptach = useAppDispatch();

  const [markedDates, setMarkedDates] = React.useState<MarkedDates>({});

  useEffect(() => {
    disptach(getEmploisDuTemps());
  }, []);

  useEffect(() => {
    console.log(markedDates);
  }, [markedDates]);

  useEffect(() => {
    events.map((event) => {
      setMarkedDates({
        ...markedDates,
        [event.start.split("T")[0]]: {selected:true, startingDay: true, color: "green", textColor: "white"},
        [event.end.split("T")[0]]: {selected:true, endingDay: true, color: "green", textColor: "white"},
      });
    });
  }, [events]);

  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        selected="2022-12-01"
        items={{
          "2022-12-02": [] as AgendaEntry[],
          "2022-12-03": [] as AgendaEntry[],
          "2022-12-04": [] as AgendaEntry[],
          "2022-12-05": [] as AgendaEntry[],
          "2022-12-06": [] as AgendaEntry[],
        }}
        markingType={"period"}
        markedDates={{ ...markedDates }}
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
