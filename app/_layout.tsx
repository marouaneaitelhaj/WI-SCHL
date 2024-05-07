import TopBar from "app/components/TopBar";
import { Slot } from "expo-router";
import { Provider, useSelector } from "react-redux";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState, useAppDispatch } from "state/store";

import { store } from "state/store";
import { setToken } from "state/Auth/AuthSlice";
import { getProfileAction } from "state/Auth/AuthActions";
import Loading from "app/components/Loading";
import Login from "@pages/Login";
import Profile from "@pages/Profile";
import { View } from "react-native";

export function HomeLayout() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    AsyncStorage.getItem("token").then((token) => {
      dispatch(setToken(token));
      if (token)
        dispatch(getProfileAction(token))
          .unwrap()
          .then(() => {})
          .catch(() => {});
    });
  }, []);

  const { token, loading } = useSelector((state: RootState) => state.auth);
  const { showProfile } = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    if (token === null) {
      AsyncStorage.removeItem("token");
    }
  }, [token]);

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
    <Provider store={store}>
      <HomeLayout />
    </Provider>
  );
}
