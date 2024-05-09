import TopBar from "app/components/TopBar";
import { Slot } from "expo-router";
import { Provider, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState, useAppDispatch } from "state/store";
import Tesst from "./components/TestCom";
import { store } from "state/store";
import { setToken } from "state/Auth/AuthSlice";
import { getProfileAction } from "state/Auth/AuthActions";
import Loading from "app/components/Loading";
import Login from "@pages/Login";
import Profile from "@pages/Profile";
import { Button, Platform, StatusBar, View } from "react-native";
import "../static/LocaleConfig";
import { NativeWindStyleSheet } from "nativewind";
import { Text } from "react-native";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export function HomeLayout() {
  const [checked, setIschecked] = useState(false);
  const dispatch = useAppDispatch();
  const { token, loading, user } = useSelector(
    (state: RootState) => state.auth
  );
  const { showProfile } = useSelector((state: RootState) => state.profile);
  const { children, isVisible } = useSelector(
    (state: RootState) => state.modal
  );


  useEffect(() => {
    AsyncStorage.getItem("token").then((token) => {
      dispatch(setToken(token));
      if (token) {
        dispatch(getProfileAction(token))
          .unwrap()
          .then(() => {
            setIschecked(true);
          })
          .catch(() => {
            setIschecked(true);
            AsyncStorage.removeItem("token");
          });
      } else {
        setIschecked(true);
      }
    });
  }, [token]);

  if (!checked) return <Loading></Loading>;

  return (
    <>
      {loading && <Loading></Loading>}
      {!token && <Login></Login>}
      {token && (
        <>
          {!showProfile && <TopBar />}
          {showProfile && <Profile></Profile>}
          <View className="bg-white p-2 py-7 w-screen min-h-screen rounded-tr-[50px]">
            <Slot />
          </View>
        </>
      )}
    </>
  );
}

export default function Layout() {
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
    >
      {/* <Provider store={store}>
        <HomeLayout />
      </Provider> */}
      <Tesst />
    </View>
  );
}
