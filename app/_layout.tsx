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

export function HomeLayout() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    AsyncStorage.getItem("token").then((token) => {
      console.log(token);

      dispatch(setToken(token));
      dispatch(getProfileAction())
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
          <TopBar />
          <Slot />
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