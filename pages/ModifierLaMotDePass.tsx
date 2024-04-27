import { Text, View, Image, Alert, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Tpassword, Tuser } from "../state/types";
import { TextInput } from "react-native-paper";
import { useEffect } from "react";
import { RootState, useAppDispatch } from "../state/store";
import { loginAction, profileAction } from "../state/Auth/authActions";
import { useSelector } from "react-redux";

export default function ModifierLaMotDePass() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Tpassword>({
    defaultValues: {
      confirmNewPassword: "",
      newPassword: "",
      password: "",
    },
  });

  const { error, loading } = useSelector((state: RootState) => state.auth);

  const dispatch = useAppDispatch();

  

  const onSubmit = (data: Tpassword) => {
    
  };

  return (
    <View className="w-screen h-full flex justify-center items-center">
      <View className="bg-white w-[90%] px-5 py-10 space-y-10 rounded-md">
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Entrez l'ancien mot de passe"
                underlineColor={errors.password ? "red" : "#C30790"}
                activeUnderlineColor="#C30790"
                className="rounded-md bg-white"
                onBlur={onBlur}
                secureTextEntry={true}
                left={<TextInput.Icon icon="lock" />}
                right={<TextInput.Icon icon="eye" />}
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
                : "Email invalide"}
            </Text>
          )}
          {error && <Text className="text-red-400">{error}</Text>}
        </View>

        <View>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Entrez le nouveau mot de passe"
                onBlur={onBlur}
                underlineColor={errors.password ? "red" : "#C30790"}
                activeUnderlineColor="#C30790"
                className="rounded-md bg-white"
                secureTextEntry={true}
                left={<TextInput.Icon icon="lock" />}
                right={<TextInput.Icon icon="eye" />}
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
                : "Mot de pass invalide"}
            </Text>
          )}
          {error && <Text className="text-red-400">{error}</Text>}
        </View>
        <View>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Confirmez le nouveau mot de passe"
                onBlur={onBlur}
                underlineColor={errors.password ? "red" : "#C30790"}
                activeUnderlineColor="#C30790"
                className="rounded-md bg-white"
                secureTextEntry={true}
                left={<TextInput.Icon icon="lock" />}
                right={<TextInput.Icon icon="eye" />}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="confirmNewPassword"
          />
          {errors.confirmNewPassword && (
            <Text className="text-red-400">
              {errors.confirmNewPassword.type === "required"
                ? "Ce champ est obligatoire"
                : "Mot de pass invalide"}
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
