import { Text, View, Image, Alert, Pressable, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Tpassword, Tuser } from "../../state/types";
import { TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../../state/store";
import {
  loginAction,
  getProfileAction,
  updateProfilePasswordAction,
} from "../../state/Auth/AuthActions";
import { useSelector } from "react-redux";
import Animated, { SlideInRight, SlideOutLeft } from "react-native-reanimated";

export default function ModifierLaMotDePass(props: { profileStatus: number }) {

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Tpassword>({
    defaultValues: {
      motPassActuel: "",
      nvMotPass_confirmation: "",
      nvMotPass: "",
    },
  });

  const [secureTextEntry, setSecureTextEntry] = useState<{
    password: boolean;
    newPassword: boolean;
    confirmNewPassword: boolean;
  }>({ password: true, newPassword: true, confirmNewPassword: true });

  const { error, loadingForm } = useSelector((state: RootState) => state.auth);

  const dispatch = useAppDispatch();
  const onSubmit = (data: Tpassword) => {
    Alert.alert(
      "Confirmation",
      "Voulez-vous vraiment modifier le mot de pass?",
      [
        {
          text: "Annuler",
          style: "cancel",
        },
        {
          text: "Confirmer",
          onPress: () => {
            dispatch(updateProfilePasswordAction(data))
              .unwrap()
              .then(() => {
                alert("Mot de pass modifié avec succès");
              });
          },
        },
      ]
    );
  };
  if (props.profileStatus != 2) {
    return null;
  }
  return (
    <Animated.View entering={SlideInRight} exiting={SlideOutLeft}>
      <ScrollView className="my-2 w-full">
        <View className="w-screen flex justify-center items-center ">
          <View className="bg-white w-[90%]  py-4 space-y-10 rounded-md">
            <View>
              <Controller
                control={control}
                rules={{
                  required: true,
                  minLength: 6,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Entrez l'ancien mot de passe"
                    underlineColor={errors.motPassActuel ? "red" : "#5156BE"}
                    activeUnderlineColor="#5156BE"
                    className="rounded-md bg-white"
                    onBlur={onBlur}
                    secureTextEntry={secureTextEntry.password}
                    // left={<TextInput.Icon icon="lock" />}
                    right={
                      <TextInput.Icon
                        icon="eye"
                        onPress={() => {
                          setSecureTextEntry({
                            ...secureTextEntry,
                            password: !secureTextEntry.password,
                          });
                        }}
                      />
                    }
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="motPassActuel"
              />
              {errors.motPassActuel && (
                <Text className="font-[Poppins-Black] text-red-400">
                  {errors.motPassActuel.type === "required"
                    ? "Ce champ est obligatoire"
                    : "Mot de pass invalide"}
                </Text>
              )}
              {error && <Text className="font-[Poppins-Black] text-red-400">{error}</Text>}
            </View>

            <View>
              <Controller
                control={control}
                rules={{
                  minLength: 6,
                  required: true,
                  validate: (value) => value === watch("nvMotPass"),
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Entrez le nouveau mot de passe"
                    onBlur={onBlur}
                    underlineColor={errors.nvMotPass ? "red" : "#5156BE"}
                    activeUnderlineColor="#5156BE"
                    className="rounded-md bg-white"
                    secureTextEntry={secureTextEntry.newPassword}
                    // left={<TextInput.Icon icon="lock" />}
                    right={
                      <TextInput.Icon
                        icon="eye"
                        onPress={() => {
                          setSecureTextEntry({
                            ...secureTextEntry,
                            newPassword: !secureTextEntry.newPassword,
                          });
                        }}
                      />
                    }
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="nvMotPass"
              />
              {errors.nvMotPass && (
                <Text className="font-[Poppins-Black] text-red-400">
                  {errors.nvMotPass.type === "required"
                    ? "Ce champ est obligatoire"
                    : errors.nvMotPass.type === "minLength"
                    ? "Mot de pass invalide"
                    : errors.nvMotPass.type === "validate"
                    ? "Les mots de pass ne sont pas identiques"
                    : ""}
                </Text>
              )}
              {error && <Text className="font-[Poppins-Black] text-red-400">{error}</Text>}
            </View>
            <View>
              <Controller
                control={control}
                rules={{
                  minLength: 6,
                  required: true,
                  validate: (value) => value === watch("nvMotPass"),
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Confirmez le nouveau mot de passe"
                    onBlur={onBlur}
                    underlineColor={
                      errors.nvMotPass_confirmation ? "red" : "#5156BE"
                    }
                    activeUnderlineColor="#5156BE"
                    className="rounded-md bg-white"
                    secureTextEntry={secureTextEntry.confirmNewPassword}
                    // left={<TextInput.Icon icon="lock" />}
                    right={
                      <TextInput.Icon
                        icon="eye"
                        onPress={() => {
                          setSecureTextEntry({
                            ...secureTextEntry,
                            confirmNewPassword:
                              !secureTextEntry.confirmNewPassword,
                          });
                        }}
                      />
                    }
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="nvMotPass_confirmation"
              />
              {errors.nvMotPass_confirmation && (
                <Text className="font-[Poppins-Black] text-red-400">
                  {errors.nvMotPass_confirmation.type === "required"
                    ? "Ce champ est obligatoire"
                    : errors.nvMotPass_confirmation.type === "minLength"
                    ? "Mot de pass invalide"
                    : errors.nvMotPass_confirmation.type === "validate"
                    ? "Les mots de pass ne sont pas identiques"
                    : ""}
                </Text>
              )}
              {error && <Text className="font-[Poppins-Black] text-red-400">{error}</Text>}
            </View>
            <View>
              <Pressable
                className={
                  "flex rounded-md justify-center items-center p-5" +
                  (loadingForm ? " bg-[#d285be]" : " bg-[#5156BE]")
                }
                onPress={handleSubmit(onSubmit)}
              >
                <Text className="font-[Poppins-Black] text-white text-[20px]">
                  {loadingForm ? "Chargement..." : "Modifier le mot de pass"}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </Animated.View>
  );
}
