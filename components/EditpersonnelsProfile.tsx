import { Image, Pressable } from "react-native";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../state/store";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { enableGoBack } from "../state/TopBar/TopBarSlice";
import { Tuser } from "../state/types";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native-paper";

export default function EditpersonnelsProfile() {
  const { user } = useSelector((state: RootState) => state.auth);

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    watch,
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
      email: user?.email,
    },
  });

  const dispatch = useAppDispatch();

  return (
    <>
      <View className="w-screen h-full flex justify-center items-center ">
        <View className="bg-white w-[90%] px-5 py-10 space-y-10 rounded-md">
          <Text className="text-[#1E9FF2] text-center mb-8 text-[20px]">
            Modifier le mot de pass
          </Text>
          <View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  mode="outlined"
                  label="Prenom"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name="prenom_fr"
              rules={{ required: "Prenom est obligatoire" }}
            />
            {errors.prenom_fr && (
              <Text className="text-red-500">{errors.prenom_fr.message}</Text>
            )}
          </View>
          <View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  mode="outlined"
                  label="Nom"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name="nom_fr"
              rules={{ required: "Nom est obligatoire" }}
            />
            {errors.nom_fr && (
              <Text className="text-red-500">{errors.nom_fr.message}</Text>
            )}
          </View>
          <View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  mode="outlined"
                  label="Cin"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name="cin"
              rules={{ required: "Cin est obligatoire" }}
            />
            {errors.cin && (
              <Text className="text-red-500">{errors.cin.message}</Text>
            )}
          </View>
          <View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  mode="outlined"
                  label="Cne"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name="cne"
              rules={{ required: "Cne est obligatoire" }}
            />
            {errors.cne && (
              <Text className="text-red-500">{errors.cne.message}</Text>
            )}
          </View>
          <View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  mode="outlined"
                  label="Date naissance"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name="date_naissance"
              rules={{ required: "Date naissance est obligatoire" }}
            />
            {errors.date_naissance && (
              <Text className="text-red-500">
                {errors.date_naissance.message}
              </Text>
            )}
          </View>
          <View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  mode="outlined"
                  label="Lieu naissance ar"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name="lieu_naissance_ar"
              rules={{ required: "Lieu naissance ar est obligatoire" }}
            />
            {errors.lieu_naissance_ar && (
              <Text className="text-red-500">
                {errors.lieu_naissance_ar.message}
              </Text>
            )}
          </View>
          <View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  mode="outlined"
                  label="Lieu naissance fr"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name="lieu_naissance_fr"
              rules={{ required: "Lieu naissance fr est obligatoire" }}
            />
            {errors.lieu_naissance_fr && (
              <Text className="text-red-500">
                {errors.lieu_naissance_fr.message}
              </Text>
            )}
          </View>
          <View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  mode="outlined"
                  label="Adresse fr"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name="adresse_fr"
              rules={{ required: "Adresse fr est obligatoire" }}
            />
            {errors.adresse_fr && (
              <Text className="text-red-500">{errors.adresse_fr.message}</Text>
            )}
          </View>
          <View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  mode="outlined"
                  label="Adresse ar"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name="adresse_ar"
              rules={{ required: "Adresse ar est obligatoire" }}
            />
            {errors.adresse_ar && (
              <Text className="text-red-500">{errors.adresse_ar.message}</Text>
            )}
          </View>
          <View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  mode="outlined"
                  label="Tele"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name="tele"
              rules={{ required: "Tele est obligatoire" }}
            />
            {errors.tele && (
              <Text className="text-red-500">{errors.tele.message}</Text>
            )}
          </View>
          <View>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  mode="outlined"
                  label="Email"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name="email"
              rules={{ required: "Email est obligatoire" }}
            />
            {errors.email && (
              <Text className="text-red-500">{errors.email.message}</Text>
            )}
            </View>
        </View>
      </View>
    </>
  );
}
