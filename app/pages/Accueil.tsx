import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import AnnonceCard from "../components/AnnonceCard";
import { RootState, useAppDispatch } from "state/store";
import { getAnnonces } from "state/Annonces/AnnoncesActions";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getEmploisDuTempsByDayToday } from "@state/EmploisDuTemps/EmploisDuTempsActions";
import { Tevent } from "@state/types";
import EventCard from "app/components/EventCard";

export default function Accueil() {
  const dispatch = useAppDispatch();

  const { annonces } = useSelector((state: RootState) => state.annonces);

  const [events, setEvents] = useState<Tevent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    dispatch(getAnnonces());
    setLoading(true);
    dispatch(getEmploisDuTempsByDayToday())
      .unwrap()
      .then((res) => {
        setLoading(false);
        setEvents(res);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <View>
      <View>
        <Text className={"font-[Poppins-Black] my-4 text-[#5156BE] uppercase px-5 font-bold text-xl"}>
          Announce
        </Text>
        <ScrollView horizontal={true}>
          <View className="flex flex-row">
            {annonces.map((annonce) => (
              <AnnonceCard key={annonce.annonce_body} annonce={annonce} />
            ))}
          </View>
        </ScrollView>
      </View>
      <View>
        <Text className={"font-[Poppins-Black] my-4 text-[#5156BE] uppercase px-5 font-bold text-xl"}>
          Emploi du temps de aujourd'hui
        </Text>
        <ScrollView className=" w-full h-[45%]">
          <View className="flex flex-col ">
            {events &&
              events.map((event) => <EventCard isWhite={true} event={event} key={event.id} />)}
            {events.length === 0 && !loading && (
              <View className="flex  my-14 justify-center items-center h-[30px] ">
                <Text className="font-[Poppins-Black] text-[#5156BE] font-bold text-xl">
                  No events
                </Text>
              </View>
            )}
            {loading && (
              <View className="flex my-14 justify-center items-center">
                <ActivityIndicator size="large" color="#5156BE" />
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
