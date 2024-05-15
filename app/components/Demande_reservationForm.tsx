import Animated, { SlideInRight, SlideOutLeft } from "react-native-reanimated";
import { View, Text, Alert, Pressable } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { SelectList } from "react-native-dropdown-select-list";
import { TextInput } from "react-native-paper";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@state/store";

export default function Demande_reservationForm() {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<{
    filiere: string;
    raison: string;
  }>({
    defaultValues: {
      filiere: "",
      raison: "",
    },
  });

  const { salles } = useSelector(
    (state: RootState) => state.demande_reservation
  );

  const [data, setData] = useState<Array<{}>>([]);

  useEffect(() => {
    console.log(salles);
    
    setData([]);
    salles.map((item) => {
      console.log(item);
      
      setData((prev) => [
        ...prev,
        {
          key: item.id,
          value: item.code,
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
              setSelected={(val: any) => {
                setValue("filiere", val);
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
              save="value"
            />
          )}
          name="raison"
          // rules={{ required: "Prenom est obligatoire" }}
        />
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
                    // dispatch(logout());
                    // dispatch(closeTopBar());
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
