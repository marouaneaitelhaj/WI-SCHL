import TopBar from "app/components/TopBar";
import { Slot, router } from "expo-router";
import { Provider, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState, useAppDispatch } from "state/store";
import { store } from "state/store";
import { setToken } from "state/Auth/AuthSlice";
import { getProfileAction } from "state/Auth/AuthActions";
import Loading from "app/components/Loading";
import Login from "@pages/Login";
import Profile from "@pages/Profile";
import { Button, Dimensions, Platform, Pressable, StatusBar, View } from "react-native";
import "../static/LocaleConfig";
import { NativeWindStyleSheet } from "nativewind";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { toggleTopBar } from "@state/TopBar/TopBarSlice";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export function HomeLayout() {
  const [checked, setIschecked] = useState(false);
  const dispatch = useAppDispatch();
  const screenHeight = Dimensions.get('window').height;
  const { token, loading } = useSelector((state: RootState) => state.auth);
  const { showProfile } = useSelector((state: RootState) => state.profile);

  useEffect(() => {}, [router.canGoBack]);

  const profileMemo = useMemo(
    () => <Profile showProfile={showProfile} />,
    [showProfile]
  );
  const [startY, setStartY] = useState(0); // Initialize startY state

  useEffect(() => {
    StatusBar.setBackgroundColor("#5156BE", true);
    StatusBar.setBarStyle("light-content", true);
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
          {profileMemo}
          <Pressable
            onTouchStart={(e) => {
              setStartY(e.nativeEvent.pageY); // Set startY for React Native
            }}
            onTouchEnd={(e) => {
              const endY = e.nativeEvent.pageY;
              const deltaY = startY - endY; // Calculate the vertical scroll distance
              const threshold = screenHeight * 0.6; // 60% of the screen height

              console.log(deltaY, threshold, screenHeight, startY, endY);

              if (deltaY > threshold) {
                // Check if scrolled more than 60% of the screen height
                dispatch(toggleTopBar()); // Dispatch the action if condition is met
              }
            }}
            className="bg-white p-2 py-7 w-screen min-h-screen rounded-tr-[50px]"
          >
            <Slot />
          </Pressable>
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
      <Provider store={store}>
        <HomeLayout />
      </Provider>
    </View>
  );
}
