import Animated, { SlideInRight, SlideOutLeft } from "react-native-reanimated";
import { View, Text, Alert, Pressable } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { SelectList } from "react-native-dropdown-select-list";
import { TextInput } from "react-native-paper";
import {  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@state/store";
import DateTimePicker from "@react-native-community/datetimepicker";
import { createDemande } from "@state/Demandes/Demande_reservation/Demande_reservationActions";

export default function Demande_reservationForm() {
  const [picker, setPicker] = useState(0);
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<{
    salle_id: string;
    date_debut: string;
    date_fin: string;
    hr_debut: string;
    hr_fin: string;
    raison: string;
  }>({
    defaultValues: {
      salle_id: "",
      date_debut: "",
      date_fin: "",
      hr_debut: "",
      hr_fin: "",
      raison: "",
    },
  });

  const getIdSalleByCodeAndBloc = (code: string) => {
    return (
      salles.find((item) => item.code + " - " + item.bloc === code)?.id || ""
    );
  };

  const { salles } = useSelector(
    (state: RootState) => state.demande_reservation
  );

  const [data, setData] = useState<Array<{}>>([]);

  useEffect(() => {
    setData([]);
    salles.map((item) => {
      setData((prev) => [
        ...prev,
        {
          key: item.id,
          value: item.code + " - " + item.bloc,
        },
      ]);
    });
  }, [salles]);

  return (
    <View className="bg-white p-5 flex items-center ">
      <View className="w-full  py-4 space-y-10 rounded-md">
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <SelectList
              placeholder="Sélectionner une salle"
              setSelected={(val: any) => {
                setValue("salle_id", val);
              }}
              boxStyles={{
                borderColor: "#5156BE",
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
                backgroundColor: "white",
              }}
              inputStyles={{
                color: "black",
                fontSize: 16,
                padding: 0,
                borderColor: "#5156BE",
              }}
              data={data}
              save="key"
            />
          )}
          name="salle_id"
        />
        {errors.raison && (
          <Text className="text-red-500">{errors.raison?.message}</Text>
        )}
      </View>
      <View className="w-full  py-4 space-y-10 rounded-md">
        <Pressable
          onPress={() => setPicker(1)}
          className="w-full p-3 bg-gray-100"
        >
          <Text className="text-gray-500">
            Date de début : {watch("date_debut")}
          </Text>
        </Pressable>
        {picker == 1 && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={(event, selectedDate) => {
              if (event.type == "dismissed") return setPicker(0);
              if (selectedDate)
                setValue("date_debut", selectedDate.toDateString());
              setPicker(0);
            }}
          />
        )}
        {errors.raison && (
          <Text className="text-red-500">{errors.raison?.message}</Text>
        )}
      </View>
      <View className="w-full  py-4 space-y-10 rounded-md">
        <Pressable
          onPress={() => setPicker(2)}
          className="w-full p-3 bg-gray-100"
        >
          <Text className="text-gray-500">Date fin : {watch("date_fin")}</Text>
        </Pressable>
        {picker == 2 && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={(event, selectedDate) => {
              if (event.type == "dismissed") return setPicker(0);
              if (selectedDate)
                setValue("date_fin", selectedDate.toDateString());
              setPicker(0);
            }}
          />
        )}
        {errors.raison && (
          <Text className="text-red-500">{errors.raison?.message}</Text>
        )}
      </View>
      <View className="w-full  py-4 space-y-10 rounded-md">
        <Pressable
          onPress={() => setPicker(3)}
          className="w-full p-3 bg-gray-100"
        >
          <Text className="text-gray-500">Heure début : {watch("hr_debut")}</Text>
        </Pressable>
        {picker == 3 && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode="time"
            display="default"
            onChange={(event, selectedDate) => {
              if (event.type == "dismissed") return setPicker(0);
              if (selectedDate)
                // sett hour and minute like this 12:30
                setValue(
                  "hr_debut",
                  selectedDate.getHours() + ":" + selectedDate.getMinutes()
                );
              setPicker(0);
            }}
          />
        )}
        {errors.raison && (
          <Text className="text-red-500">{errors.raison?.message}</Text>
        )}
      </View>
      <View className="w-full  py-4 space-y-10 rounded-md">
        <Pressable
          onPress={() => setPicker(3)}
          className="w-full p-3 bg-gray-100"
        >
          <Text className="text-gray-500">Heure fin : {watch("hr_fin")}</Text>
        </Pressable>
        {picker == 3 && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode="time"
            display="default"
            onChange={(event, selectedDate) => {
              if (event.type == "dismissed") return setPicker(0);
              if (selectedDate)
                // sett hour and minute like this 12:30
                setValue(
                  "hr_fin",
                  selectedDate.getHours() + ":" + selectedDate.getMinutes()
                );
              setPicker(0);
            }}
          />
        )}
        {errors.raison && (
          <Text className="text-red-500">{errors.raison?.message}</Text>
        )}
      </View>
      <View className="w-full  py-4 space-y-10 rounded-md">
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              mode="flat"
              underlineColor="#5156BE"
              activeUnderlineColor="#5156BE"
              className="rounded-md bg-transparent"
              label="Raison"
              numberOfLines={3}
              multiline={true}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="raison"
          // rules={{ required: "Prenom est obligatoire" }}
        />
        {errors.raison && (
          <Text className="text-red-500">{errors.raison?.message}</Text>
        )}
      </View>
      <View className="flex justify-center flex-row space-x-5">
        <Pressable
          className="flex  rounded-md w-[100%] justify-center items-center  p-3 bg-[#5156BE]"
          onPress={handleSubmit((data) => {
            Alert.alert(
              "Envoyer la demande",
              "Êtes-vous sûr de vouloir créer cette demande ?",
              [
                {
                  text: "Annuler",
                  style: "cancel",
                },
                {
                  text: "Confirmer et Envoyer",
                  style: "destructive",
                  onPress: () => {
                    dispatch(createDemande(data));
                  },
                },
              ]
            );
          })}
        >
          <Text className="text-white text-center text-xs">Envoyer</Text>
        </Pressable>
        {/* <Pressable className="flex  rounded-md w-[40%] justify-center items-center  p-3 bg-[#e0e1f3]">
          <Text>Annuler</Text>
        </Pressable> */}
      </View>
    </View>
  );
}
