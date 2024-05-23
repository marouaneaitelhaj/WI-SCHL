import { Alert, Image, Pressable } from "react-native";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../state/store";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Tuser } from "../../../state/types";
import { Controller, useForm } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import { TextInput } from "react-native-paper";
import Animated, { SlideInRight, SlideOutLeft } from "react-native-reanimated";
import { changeInformation } from "../../../state/Profile/ProfileActions";
import { useEffect, useState } from "react";
import { Platform } from "react-native";
import * as FileSystem from "expo-file-system";
import axios from "axios";

export default function EditpersonnelsProfile(props: {
  profileStatus: number;
}) {
  const { user } = useSelector((state: RootState) => state.auth);

  const navigation = useNavigation();

  // declare image use state
  const [image, setImage] = useState<{
    uri: string;
    base64: string;
  }>({} as any);


  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Tuser>({
    defaultValues: {
      prenom_ar: user?.prenom_ar,
      nom_ar: user?.nom_ar,
      prenom_fr: user?.prenom_fr,
      nom_fr: user?.nom_fr,
      cin: user?.cin,
      cne: user?.cne,
      date_naissance: user?.date_naissance,
      lieu_naissance_ar: user?.lieu_naissance_ar,
      lieu_naissance_fr: user?.lieu_naissance_fr,
      adresse_fr: user?.adresse_fr,
      adresse_ar: user?.adresse_ar,
      tele: user?.tele,
      img: user?.img,
      email: user?.email,
    },
  });

  const onSubmit = (data: Tuser) => {
    Alert.alert(
      "Confirmation",
      "Voulez-vous vraiment enregistrer les modifications?",
      [
        {
          text: "Annuler",
          style: "cancel",
        },
        {
          text: "Confirmer",
          onPress: () => {
            setValue("img", image.base64);

            dispatch(changeInformation(data))
              .unwrap()
              .then((message) => {
                alert(message);
              })
              .catch((error) => {
                alert(error.message);
              });
          },
        },
      ]
    );
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
      base64: true,
    })
      .then((result) => {
        if (!result.canceled) {
          if (result.assets.length > 0) {
            setImage({
              uri: result.assets[0].uri,
              base64: result.assets[0].base64 as string,
            });
          }
        }
      })
      .catch((error) => {});
  };

  const dispatch = useAppDispatch();
  if (props.profileStatus != 1) {
    return null;
  }
  return (
    <Animated.View entering={SlideInRight} exiting={SlideOutLeft}>
      <View className="w-screen h-full flex items-center ">
        <View className="w-[90%] px-2 py-4 space-y-10 rounded-md">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="flat"
                underlineColor="#5156BE"
                activeUnderlineColor="#5156BE"
                className="rounded-md bg-transparent"
                label="Prenom"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="prenom_fr"
            // rules={{ required: "Prenom est obligatoire" }}
          />
          {errors.prenom_fr && (
            <Text className="font-[Poppins-Black] text-red-500">{errors.prenom_fr.message}</Text>
          )}
        </View>
        <View className="w-[90%] px-2 py-4 space-y-10 rounded-md">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="flat"
                underlineColor="#5156BE"
                activeUnderlineColor="#5156BE"
                className="rounded-md bg-transparent"
                label="Nom"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="nom_fr"
            // rules={{ required: "Nom est obligatoire" }}
          />
          {errors.nom_fr && (
            <Text className="font-[Poppins-Black] text-red-500">{errors.nom_fr.message}</Text>
          )}
        </View>
        <View className="w-[90%] px-2 py-4 space-y-10 rounded-md">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="flat"
                underlineColor="#5156BE"
                activeUnderlineColor="#5156BE"
                className="rounded-md bg-transparent"
                label="Prenom ar"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="prenom_ar"
            // rules={{ required: "Prenom est obligatoire" }}
          />
          {errors.prenom_ar && (
            <Text className="font-[Poppins-Black] text-red-500">{errors.prenom_ar.message}</Text>
          )}
        </View>
        <View className="w-[90%] px-2 py-4 space-y-10 rounded-md">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="flat"
                underlineColor="#5156BE"
                activeUnderlineColor="#5156BE"
                className="rounded-md bg-transparent"
                label="Nom ar"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="nom_ar"
            // rules={{ required: "Nom est obligatoire" }}
          />
          {errors.nom_ar && (
            <Text className="font-[Poppins-Black] text-red-500">{errors.nom_ar.message}</Text>
          )}
        </View>
        <View className="w-[90%] px-2 py-4 space-y-10 rounded-md">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="flat"
                underlineColor="#5156BE"
                activeUnderlineColor="#5156BE"
                className="rounded-md bg-transparent"
                label="Cin"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="cin"
            // rules={{ required: "Cin est obligatoire" }}
          />
          {errors.cin && (
            <Text className="font-[Poppins-Black] text-red-500">{errors.cin.message}</Text>
          )}
        </View>
        <View className="w-[90%] px-2 py-4 space-y-10 rounded-md">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="flat"
                underlineColor="#5156BE"
                activeUnderlineColor="#5156BE"
                className="rounded-md bg-transparent"
                label="Cne"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="cne"
            // rules={{ required: "Cne est obligatoire" }}
          />
          {errors.cne && (
            <Text className="font-[Poppins-Black] text-red-500">{errors.cne.message}</Text>
          )}
        </View>
        <View className="w-[90%] px-2 py-4 space-y-10 rounded-md">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="flat"
                underlineColor="#5156BE"
                activeUnderlineColor="#5156BE"
                className="rounded-md bg-transparent"
                label="Date naissance"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="date_naissance"
            // rules={{ required: "Date naissance est obligatoire" }}
          />
          {errors.date_naissance && (
            <Text className="font-[Poppins-Black] text-red-500">
              {errors.date_naissance.message}
            </Text>
          )}
        </View>
        <View className="w-[90%] px-2 py-4 space-y-10 rounded-md">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="flat"
                underlineColor="#5156BE"
                activeUnderlineColor="#5156BE"
                className="rounded-md bg-transparent"
                label="Lieu naissance ar"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="lieu_naissance_ar"
            // rules={{ required: "Lieu naissance ar est obligatoire" }}
          />
          {errors.lieu_naissance_ar && (
            <Text className="font-[Poppins-Black] text-red-500">
              {errors.lieu_naissance_ar.message}
            </Text>
          )}
        </View>
        <View className="w-[90%] px-2 py-4 space-y-10 rounded-md">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="flat"
                underlineColor="#5156BE"
                activeUnderlineColor="#5156BE"
                className="rounded-md bg-transparent"
                label="Lieu naissance fr"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="lieu_naissance_fr"
            // rules={{ required: "Lieu naissance fr est obligatoire" }}
          />
          {errors.lieu_naissance_fr && (
            <Text className="font-[Poppins-Black] text-red-500">
              {errors.lieu_naissance_fr.message}
            </Text>
          )}
        </View>
        <View className="w-[90%] px-2 py-4 space-y-10 rounded-md">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="flat"
                underlineColor="#5156BE"
                activeUnderlineColor="#5156BE"
                className="rounded-md bg-transparent"
                label="Adresse fr"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="adresse_fr"
            // rules={{ required: "Adresse fr est obligatoire" }}
          />
          {errors.adresse_fr && (
            <Text className="font-[Poppins-Black] text-red-500">{errors.adresse_fr.message}</Text>
          )}
        </View>
        <View className="w-[90%] px-2 py-4 space-y-10 rounded-md">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="flat"
                underlineColor="#5156BE"
                activeUnderlineColor="#5156BE"
                className="rounded-md bg-transparent"
                label="Adresse ar"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="adresse_ar"
            // rules={{ required: "Adresse ar est obligatoire" }}
          />
          {errors.adresse_ar && (
            <Text className="font-[Poppins-Black] text-red-500">{errors.adresse_ar.message}</Text>
          )}
        </View>
        <View className="w-[90%] px-2 py-4 space-y-10 rounded-md">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="flat"
                underlineColor="#5156BE"
                activeUnderlineColor="#5156BE"
                className="rounded-md bg-transparent"
                label="Tele"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="tele"
          />
          {errors.tele && (
            <Text className="font-[Poppins-Black] text-red-500">{errors.tele.message}</Text>
          )}
        </View>
        <View className="w-[90%] px-2 py-4 space-y-10 rounded-md">
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="flat"
                underlineColor="#5156BE"
                activeUnderlineColor="#5156BE"
                className="rounded-md bg-transparent"
                label="Email"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="email"
            // rules={{ required: "Email est obligatoire" }}
          />
          {errors.email && (
            <Text className="font-[Poppins-Black] text-red-500">{errors.email.message}</Text>
          )}
        </View>
        <View className="w-[90%] px-2 py-4 justify-around rounded-md flex flex-row items-center">
          <Image
            source={{
              uri: image.uri
                ? image.uri
                : "https://ensemc.irma-prod.net/storage/" + user?.img,
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              borderColor: "#5156BE",
              borderWidth: 1,
            }}
          />
          <Controller
            control={control}
            name="img"
            render={({ field: { onChange, onBlur, value } }) => (
              <Pressable
                className=" bg-[#5156BE] p-3 rounded-md"
                onPress={pickImage}
              >
                <Text className="font-[Poppins-Black] text-white">Changer l'image</Text>
              </Pressable>
            )}
          />
        </View>
        <Pressable
          onPress={handleSubmit(onSubmit)}
          className="flex rounded-md w-[90%] justify-center items-center  p-5 bg-[#5156BE]"
        >
          <Text className="font-[Poppins-Black] text-white">Enregistrer les modifications</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
}
