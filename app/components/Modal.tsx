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
import { Platform } from "react-native";

type MyModalProps = {
  children: any;
  showModal: boolean;
  title: string;
  close : Function;
};

export default function MyModal(
  { children, showModal, title, close }: MyModalProps
) {
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
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <VStack space="sm">
              <Heading size="lg">
                <Text>{title}</Text>
              </Heading>
            </VStack>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </GluestackUIProvider>
  );
}
