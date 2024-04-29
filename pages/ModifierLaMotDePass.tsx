import { Text, View, Image, Alert, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Tpassword, Tuser } from "../state/types";
import { TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../state/store";
import { loginAction, profileAction } from "../state/Auth/authActions";
import { useSelector } from "react-redux";

export default function ModifierLaMotDePass() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Tpassword>({
    defaultValues: {
      confirmNewPassword: "",
      newPassword: "",
      password: "",
    },
  });

  const [secureTextEntry, setSecureTextEntry] = useState<{
    password: boolean;
    newPassword: boolean;
    confirmNewPassword: boolean;
  }>({ password: true, newPassword: true, confirmNewPassword: true });

  const { error, loading } = useSelector((state: RootState) => state.auth);

  const dispatch = useAppDispatch();
  const onSubmit = (data: Tpassword) => {};

  return (
    <View className="w-screen h-full flex justify-center items-center ">
      <View className="bg-white w-[90%] px-5 py-10 space-y-10 rounded-md">
        <View>
          <Text className="text-[#C30790] text-center mb-8 text-[20px]">
            Modifier le mot de pass
          </Text>
          <Controller
            control={control}
            rules={{
              required: true,
              minLength: 6,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Entrez l'ancien mot de passe"
                underlineColor={errors.password ? "red" : "#C30790"}
                activeUnderlineColor="#C30790"
                className="rounded-md bg-white"
                onBlur={onBlur}
                secureTextEntry={secureTextEntry.password}
                left={<TextInput.Icon icon="lock" />}
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
            name="password"
          />
          {errors.password && (
            <Text className="text-red-400">
              {errors.password.type === "required"
                ? "Ce champ est obligatoire"
                : "Mot de pass invalide"}
            </Text>
          )}
          {error && <Text className="text-red-400">{error}</Text>}
        </View>

        <View>
          <Controller
            control={control}
            rules={{
              minLength: 6,
              required: true,
              validate: (value) => value === watch("newPassword"),
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Entrez le nouveau mot de passe"
                onBlur={onBlur}
                underlineColor={errors.newPassword ? "red" : "#C30790"}
                activeUnderlineColor="#C30790"
                className="rounded-md bg-white"
                secureTextEntry={secureTextEntry.newPassword}
                left={<TextInput.Icon icon="lock" />}
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
            name="newPassword"
          />
          {errors.newPassword && (
            <Text className="text-red-400">
              {errors.newPassword.type === "required"
                ? "Ce champ est obligatoire"
                : errors.newPassword.type === "minLength"
                ? "Mot de pass invalide"
                : errors.newPassword.type === "validate"
                ? "Les mots de pass ne sont pas identiques"
                : ""}
            </Text>
          )}
          {error && <Text className="text-red-400">{error}</Text>}
        </View>
        <View>
          <Controller
            control={control}
            rules={{
              minLength: 6,
              required: true,
              validate: (value) => value === watch("newPassword"),
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Confirmez le nouveau mot de passe"
                onBlur={onBlur}
                underlineColor={errors.confirmNewPassword ? "red" : "#C30790"}
                activeUnderlineColor="#C30790"
                className="rounded-md bg-white"
                secureTextEntry={secureTextEntry.confirmNewPassword}
                left={<TextInput.Icon icon="lock" />}
                right={
                  <TextInput.Icon
                    icon="eye"
                    onPress={() => {
                      setSecureTextEntry({
                        ...secureTextEntry,
                        confirmNewPassword: !secureTextEntry.confirmNewPassword,
                      });
                    }}
                  />
                }
                onChangeText={onChange}
                value={value}
              />
            )}
            name="confirmNewPassword"
          />
          {errors.confirmNewPassword && (
            <Text className="text-red-400">
              {errors.confirmNewPassword.type === "required" ? (
                "Ce champ est obligatoire"
              ) : errors.confirmNewPassword.type === "minLength" ? (
                "Mot de pass invalide"
              ) : errors.confirmNewPassword.type === "validate" ? (
                "Les mots de pass ne sont pas identiques"
              ) : (
                ""
              )}
            </Text>
          )}
          {error && <Text className="text-red-400">{error}</Text>}
        </View>
        <View>
          <Pressable
            className={
              "flex rounded-md justify-center items-center p-5" +
              (loading ? " bg-[#d285be]" : " bg-[#C30790]")
            }
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="text-white text-[20px]">
              {loading ? "Chargement..." : "Modifier le mot de pass"}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
