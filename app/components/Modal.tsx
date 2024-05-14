import {
  GluestackUIProvider,
  Text,
  Modal,
  ModalBackdrop,
  ModalContent,
  VStack,
  ModalBody,
  ModalHeader,
  Button,
  ModalCloseButton,
  ButtonText,
  CloseIcon,
  Heading,
  ModalFooter,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { Icon } from "react-native-paper";
import { Platform, Pressable, View } from "react-native";

type MyModalProps = {
  children: any;
  showModal: boolean;
  title: string;
  close: Function;
};

export default function MyModal({
  children,
  showModal,
  title,
  close,
}: MyModalProps) {
  return (
    <GluestackUIProvider config={config}>
      <Modal
        isOpen={showModal}
        onPointerLeave={() => {
          close();
        }}
        onClose={() => {
          close();
        }}
        height={Platform.OS === "web" ? "auto" : "90%"}
      >
        <Pressable onPress={() => {
          
          close();
        }} className="h-screen absolute w-screen bg-[#000005] opacity-50 my-10"></Pressable>
        {/* <ModalBackdrop /> */}
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">
              <Text>{title}</Text>
            </Heading>
            <ModalCloseButton>
              <Icon size={20} source={"close"} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </GluestackUIProvider>
  );
}
