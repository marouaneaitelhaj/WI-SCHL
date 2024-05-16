import { View, Text, Alert, Pressable } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native-paper";
import { SelectList } from "react-native-dropdown-select-list";
import { RootState, useAppDispatch } from "@state/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createDemande } from "@state/Demandes/ChangementFiliere/ChangementFiliereActions";
import { router } from "expo-router";

export default function Modal() {
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

  const { filieres } = useSelector(
    (state: RootState) => state.changementFiliere
  );

  const dispatch = useAppDispatch();

  const [data, setData] = useState([] as any);

  useEffect(() => {
    const newData = filieres.map((item) => {
      return {
        key: item.id,
        value: item.code,
      };
    });
    setData(newData);
  }, [filieres]);

  // submit
  const onSubmit = (data: any) => {
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
            dispatch(createDemande(data))
              .unwrap()
              .then((res) => {
                Alert.alert(
                  "Demande envoyée",
                  "Votre demande a été envoyée avec succès",
                  [
                    {
                      text: "OK",
                      onPress: () => {
                        router.back();
                      },
                    },
                  ]
                );
              })
              .catch((err) => {
                Alert.alert(
                  "Erreur",
                  "Une erreur s'est produite lors de l'envoi de la demande"
                );
              });
          },
        },
      ]
    );
  };

  // const data = [
  //   { key: "1", value: "Mobiles", disabled: true },
  //   { key: "2", value: "Appliances" },
  //   { key: "3", value: "Cameras" },
  //   { key: "4", value: "Computers", disabled: true },
  //   { key: "5", value: "Vegetables" },
  //   { key: "6", value: "Diary Products" },
  //   { key: "7", value: "Drinks" },
  // ];

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
              data={data}
              save="key"
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
          onPress={handleSubmit(onSubmit)}
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
