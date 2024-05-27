import { useFonts } from "expo-font";
import TopBar from "app/components/TopBar/TopBar";
import { Slot, SplashScreen, router } from "expo-router";
import { Provider, useSelector } from "react-redux";
import { useCallback, useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState, useAppDispatch } from "state/store";
import { store } from "state/store";
import { setToken } from "@state/Auth/AuthSlice";
import { getProfileAction } from "@state/Auth/AuthActions";
import Loading from "app/components/Loading";
import Login from "@student/Login";
import * as ImagePicker from "expo-image-picker";
import Profile from "@student/Profile";
import {
  Button,
  Dimensions,
  Platform,
  Pressable,
  StatusBar,
  View,
} from "react-native";
import "../static/LocaleConfig";
import { NativeWindStyleSheet } from "nativewind";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { toggleTopBar } from "@state/TopBar/TopBarSlice";

NativeWindStyleSheet.create({
  styles: {
    "font-[Poppins-Black]": {
      fontFamily: "Poppins-Black",
    },
  },
});

NativeWindStyleSheet.setOutput({
  default: "native",
});

export function HomeLayout() {
  const [checked, setIschecked] = useState(false);
  const dispatch = useAppDispatch();
  const screenHeight = Dimensions.get("window").height;
  const { token, loading } = useSelector((state: RootState) => state.auth);
  const { showProfile } = useSelector((state: RootState) => state.profile);

  useEffect(() => {}, [router.canGoBack]);

  const profileMemo = useMemo(
    () => <Profile showProfile={showProfile} />,
    [showProfile]
  );
  const [startY, setStartY] = useState(0); // Initialize startY state

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const libraryStatus =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (libraryStatus.status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }

        const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
        if (cameraStatus.status !== "granted") {
          alert("Sorry, we need camera permissions to make this work!");
        }
      }
    })();
  }, []);

  useEffect(() => {
    StatusBar.setBackgroundColor("#5156BE", true);
    StatusBar.setBarStyle("light-content", true);
    AsyncStorage.getItem("token").then((token) => {
      dispatch(setToken(token));
      if (token) {
        dispatch(getProfileAction(token))
          .unwrap()
          .then((res) => {
            
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
          {profileMemo}
          <Pressable
            onTouchStart={(e) => {
              setStartY(e.nativeEvent.pageY); // Set startY for React Native
            }}
            onTouchEnd={(e) => {
              const endY = e.nativeEvent.pageY;
              const deltaY = startY - endY; // Calculate the vertical scroll distance
              const threshold = screenHeight * 0.6; // 60% of the screen height

              if (deltaY > threshold) {
                dispatch(toggleTopBar()); // Dispatch the action if condition is met
              }
            }}
            className="bg-[#f2f3fa] p-2 py-7 w-screen min-h-screen rounded-tr-[50px]"
          >
            <Slot />
          </Pressable>
        </>
      )}
    </>
  );
}

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Black": require("@assets/Poppins-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) {
    return <Loading></Loading>;
  }
  return (
    <View
      onLayout={onLayoutRootView}
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
    >
      <Provider store={store}>
        <HomeLayout />
      </Provider>
    </View>
  );
}
