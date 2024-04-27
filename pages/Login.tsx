import { Text, View, Image, Alert, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Tuser } from "../state/types";
import { TextInput } from "react-native-paper";

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Tuser>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: Tuser) => console.log(data);

  return (
    <View className="w-screen h-screen bg-[#C30790] flex justify-center items-center">
      <View className="bg-white w-[90%] px-5 py-10 space-y-10 rounded-md">
        <View className="w-full">
            <Image source={require("../assets/ENSEM-270x300.png")} className="w-full h-40"></Image>
        </View>
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Entrer l'email"
                underlineColor={errors.password ? "red" : "#C30790"}
                activeUnderlineColor="#C30790"
                className="rounded-md bg-white"
                onBlur={onBlur}
                left={<TextInput.Icon icon="email" />}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />
          {errors.email && <Text className="text-red-400">{errors.email.message}</Text>}
        </View>

        <View>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
              required : true
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Entrer le mot de pass"
                onBlur={onBlur}
                underlineColor={errors.password ? "red" : "#C30790"}
                activeUnderlineColor="#C30790"
                className="rounded-md bg-white"
                left={<TextInput.Icon icon="lock" />}
                right={<TextInput.Icon icon="eye" />}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />
          {errors.password && <Text className="text-red-400">{errors.password.message}</Text>}
        </View>
        <View>
          <Pressable className="bg-[#C30790] flex rounded-md justify-center items-center p-5" onPress={handleSubmit(onSubmit)}>
            <Text className="text-white text-[20px]">Se connecter</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
