import { Pressable, ScrollView } from "react-native";
import InformationspersonnelsProfile from "../components/InformationspersonnelsProfile";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import TopSectionForProfile from "../components/TopSectionForProfile";
import EditpersonnelsProfile from "../components/EditpersonnelsProfile";

export default function Profile() {
  return (
    <ScrollView className="my-2 w-full">
      <TopSectionForProfile />
      {/* <InformationspersonnelsProfile /> */}
      <EditpersonnelsProfile />
    </ScrollView>
  );
}
