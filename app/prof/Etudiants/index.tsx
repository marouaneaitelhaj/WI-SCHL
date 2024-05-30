import { View, Text, Pressable, Image, ScrollView } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";
import { Checkbox, DataTable } from "react-native-paper";

export default function index() {
  return (
    <View className="space-y-5">
      <View className="flex flex-row flex-wrap">
        <View className="w-1/2">
          <Text>Filière</Text>
          <Picker placeholder="Choisissez la filière">
            <Picker.Item
              label="Choisissez la filière"
              value=""
              enabled={false}
            />
            <Picker.Item label="Filière 1" value="filiere1" />
            <Picker.Item label="Filière 2" value="filiere2" />
            <Picker.Item label="Filière 3" value="filiere3" />
          </Picker>
        </View>
        <View className="w-1/2">
          <Text>Semestre</Text>
          <Picker>
            <Picker.Item label="Choisissez Semestre" value="" enabled={false} />
            <Picker.Item label="Semestre 1" value="semestre1" />
            <Picker.Item label="Semestre 2" value="semestre2" />
            <Picker.Item label="Semestre 3" value="semestre3" />
          </Picker>
        </View>
        <View className="w-full">
          <Pressable className="bg-[#5156BE] p-2 rounded-md">
            <Text className="text-white text-center">Search</Text>
          </Pressable>
        </View>
      </View>
      {/* <ScrollView horizontal={true} style={{
        // width: "50%",
      }}>
        <ScrollView className="h-[65%]">
          <View className="w-full bg-red-600">
            <View className="bg-[#5156BE] flex flex-row p-3 rounded-t-md">
              <Text className="text-white w-1/6">Code</Text>
              <Text className="text-white w-1/6">Nom</Text>
              <Text className="text-white w-1/6">Prénom</Text>
              <Text className="text-white w-1/12">Tele</Text>
              <Text className="text-white w-1/">Email</Text>
              <Text className="text-white w-1/">Filière</Text>
              <Text className="text-white w-1/">Image</Text>
              <Text className="text-white w-1/">Niveau</Text>
            </View>
            <View className="bg-[#F8F9FA] flex flex-row p-3">
              <Text className="text-[#495057] w-1/6">23023196</Text>
              <Text className="text-[#495057] w-1/6">AFOUKAL</Text>
              <Text className="text-[#495057] w-1/6">ABDALLAH</Text>
              <Text className="text-[#495057] w-1/6">0688470111</Text>
              <Text className="text-[#495057] w-1/4">
                abdallah.afoukal.etu23@ensem.ac.ma{" "}
              </Text>
              <Text className="text-[#495057] w-1/4">GSE</Text>
              <Image
                src="http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/JH76590__1694559786.jpg#/"
                className="w-10 h-10 rounded-full"
              />
              <Text className="text-[#495057] w-1/4">S1 - S2</Text>
            </View>
            <View className="bg-[#F8F9FA] flex flex-row p-3">
              <Text className="text-[#495057] w-1/6">23023196</Text>
              <Text className="text-[#495057] w-1/6">AFOUKAL</Text>
              <Text className="text-[#495057] w-1/6">ABDALLAH</Text>
              <Text className="text-[#495057] w-1/6">0688470111</Text>
              <Text className="text-[#495057] w-1/4">
                abdallah.afoukal.etu23@ensem.ac.ma{" "}
              </Text>
              <Text className="text-[#495057] w-1/4">GSE</Text>
              <Image
                src="http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/JH76590__1694559786.jpg#/"
                className="w-10 h-10 rounded-full"
              />
              <Text className="text-[#495057] w-1/4">S1 - S2</Text>
            </View>
            <View className="bg-[#F8F9FA] flex flex-row p-3">
              <Text className="text-[#495057] w-1/6">23023196</Text>
              <Text className="text-[#495057] w-1/6">AFOUKAL</Text>
              <Text className="text-[#495057] w-1/6">ABDALLAH</Text>
              <Text className="text-[#495057] w-1/6">0688470111</Text>
              <Text className="text-[#495057] w-1/4">
                abdallah.afoukal.etu23@ensem.ac.ma{" "}
              </Text>
              <Text className="text-[#495057] w-1/4">GSE</Text>
              <Image
                src="http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/JH76590__1694559786.jpg#/"
                className="w-10 h-10 rounded-full"
              />
              <Text className="text-[#495057] w-1/4">S1 - S2</Text>
            </View>
            <View className="bg-[#F8F9FA] flex flex-row p-3">
              <Text className="text-[#495057] w-1/6">23023196</Text>
              <Text className="text-[#495057] w-1/6">AFOUKAL</Text>
              <Text className="text-[#495057] w-1/6">ABDALLAH</Text>
              <Text className="text-[#495057] w-1/6">0688470111</Text>
              <Text className="text-[#495057] w-1/4">
                abdallah.afoukal.etu23@ensem.ac.ma{" "}
              </Text>
              <Text className="text-[#495057] w-1/4">GSE</Text>
              <Image
                src="http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/JH76590__1694559786.jpg#/"
                className="w-10 h-10 rounded-full"
              />
              <Text className="text-[#495057] w-1/4">S1 - S2</Text>
            </View>
            <View className="bg-[#F8F9FA] flex flex-row p-3">
              <Text className="text-[#495057] w-1/6">23023196</Text>
              <Text className="text-[#495057] w-1/6">AFOUKAL</Text>
              <Text className="text-[#495057] w-1/6">ABDALLAH</Text>
              <Text className="text-[#495057] w-1/6">0688470111</Text>
              <Text className="text-[#495057] w-1/4">
                abdallah.afoukal.etu23@ensem.ac.ma{" "}
              </Text>
              <Text className="text-[#495057] w-1/4">GSE</Text>
              <Image
                src="http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/JH76590__1694559786.jpg#/"
                className="w-10 h-10 rounded-full"
              />
              <Text className="text-[#495057] w-1/4">S1 - S2</Text>
            </View>
            <View className="bg-[#F8F9FA] flex flex-row p-3">
              <Text className="text-[#495057] w-1/6">23023196</Text>
              <Text className="text-[#495057] w-1/6">AFOUKAL</Text>
              <Text className="text-[#495057] w-1/6">ABDALLAH</Text>
              <Text className="text-[#495057] w-1/6">0688470111</Text>
              <Text className="text-[#495057] w-1/4">
                abdallah.afoukal.etu23@ensem.ac.ma{" "}
              </Text>
              <Text className="text-[#495057] w-1/4">GSE</Text>
              <Image
                src="http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/JH76590__1694559786.jpg#/"
                className="w-10 h-10 rounded-full"
              />
              <Text className="text-[#495057] w-1/4">S1 - S2</Text>
            </View>
            <View className="bg-[#F8F9FA] flex flex-row p-3">
              <Text className="text-[#495057] w-1/6">23023196</Text>
              <Text className="text-[#495057] w-1/6">AFOUKAL</Text>
              <Text className="text-[#495057] w-1/6">ABDALLAH</Text>
              <Text className="text-[#495057] w-1/6">0688470111</Text>
              <Text className="text-[#495057] w-1/4">
                abdallah.afoukal.etu23@ensem.ac.ma{" "}
              </Text>
              <Text className="text-[#495057] w-1/4">GSE</Text>
              <Image
                src="http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/JH76590__1694559786.jpg#/"
                className="w-10 h-10 rounded-full"
              />
              <Text className="text-[#495057] w-1/4">S1 - S2</Text>
            </View>
            <View className="bg-[#F8F9FA] flex flex-row p-3">
              <Text className="text-[#495057] w-1/6">23023196</Text>
              <Text className="text-[#495057] w-1/6">AFOUKAL</Text>
              <Text className="text-[#495057] w-1/6">ABDALLAH</Text>
              <Text className="text-[#495057] w-1/6">0688470111</Text>
              <Text className="text-[#495057] w-1/4">
                abdallah.afoukal.etu23@ensem.ac.ma{" "}
              </Text>
              <Text className="text-[#495057] w-1/4">GSE</Text>
              <Image
                src="http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/JH76590__1694559786.jpg#/"
                className="w-10 h-10 rounded-full"
              />
              <Text className="text-[#495057] w-1/4">S1 - S2</Text>
            </View>
            <View className="bg-[#F8F9FA] flex flex-row p-3">
              <Text className="text-[#495057] w-1/6">23023196</Text>
              <Text className="text-[#495057] w-1/6">AFOUKAL</Text>
              <Text className="text-[#495057] w-1/6">ABDALLAH</Text>
              <Text className="text-[#495057] w-1/6">0688470111</Text>
              <Text className="text-[#495057] w-1/4">
                abdallah.afoukal.etu23@ensem.ac.ma{" "}
              </Text>
              <Text className="text-[#495057] w-1/4">GSE</Text>
              <Image
                src="http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/JH76590__1694559786.jpg#/"
                className="w-10 h-10 rounded-full"
              />
              <Text className="text-[#495057] w-1/4">S1 - S2</Text>
            </View>
            <View className="bg-[#F8F9FA] flex flex-row p-3">
              <Text className="text-[#495057] w-1/6">23023196</Text>
              <Text className="text-[#495057] w-1/6">AFOUKAL</Text>
              <Text className="text-[#495057] w-1/6">ABDALLAH</Text>
              <Text className="text-[#495057] w-1/6">0688470111</Text>
              <Text className="text-[#495057] w-1/4">
                abdallah.afoukal.etu23@ensem.ac.ma{" "}
              </Text>
              <Text className="text-[#495057] w-1/4">GSE</Text>
              <Image
                src="http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/JH76590__1694559786.jpg#/"
                className="w-10 h-10 rounded-full"
              />
              <Text className="text-[#495057] w-1/4">S1 - S2</Text>
            </View>
            <View className="bg-[#F8F9FA] flex flex-row p-3">
              <Text className="text-[#495057] w-1/6">23023196</Text>
              <Text className="text-[#495057] w-1/6">AFOUKAL</Text>
              <Text className="text-[#495057] w-1/6">ABDALLAH</Text>
              <Text className="text-[#495057] w-1/6">0688470111</Text>
              <Text className="text-[#495057] w-1/4">
                abdallah.afoukal.etu23@ensem.ac.ma{" "}
              </Text>
              <Text className="text-[#495057] w-1/4">GSE</Text>
              <Image
                src="http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/JH76590__1694559786.jpg#/"
                className="w-10 h-10 rounded-full"
              />
              <Text className="text-[#495057] w-1/4">S1 - S2</Text>
            </View>
            <View className="bg-[#F8F9FA] flex flex-row p-3">
              <Text className="text-[#495057] w-1/6">23023196</Text>
              <Text className="text-[#495057] w-1/6">AFOUKAL</Text>
              <Text className="text-[#495057] w-1/6">ABDALLAH</Text>
              <Text className="text-[#495057] w-1/6">0688470111</Text>
              <Text className="text-[#495057] w-1/4">
                abdallah.afoukal.etu23@ensem.ac.ma{" "}
              </Text>
              <Text className="text-[#495057] w-1/4">GSE</Text>
              <Image
                src="http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/JH76590__1694559786.jpg#/"
                className="w-10 h-10 rounded-full"
              />
              <Text className="text-[#495057] w-1/4">S1 - S2</Text>
            </View>
            <View className="bg-[#F8F9FA] flex flex-row p-3">
              <Text className="text-[#495057] w-1/6">23023196</Text>
              <Text className="text-[#495057] w-1/6">AFOUKAL</Text>
              <Text className="text-[#495057] w-1/6">ABDALLAH</Text>
              <Text className="text-[#495057] w-1/6">0688470111</Text>
              <Text className="text-[#495057] w-1/4">
                abdallah.afoukal.etu23@ensem.ac.ma{" "}
              </Text>
              <Text className="text-[#495057] w-1/4">GSE</Text>
              <Image
                src="http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/JH76590__1694559786.jpg#/"
                className="w-10 h-10 rounded-full"
              />
              <Text className="text-[#495057] w-1/4">S1 - S2</Text>
            </View>
            <View className="bg-[#F8F9FA] flex flex-row p-3">
              <Text className="text-[#495057] w-1/6">23023196</Text>
              <Text className="text-[#495057] w-1/4">xxxxxxxx</Text>
              <Text className="text-[#495057] w-1/6">ABDALLAH</Text>
              <Text className="text-[#495057] w-1/6">0688470111</Text>
              <Text className="text-[#495057] w-1/4">
                abdallah.afoukal.etu23@ensem.ac.ma{" "}
              </Text>
              <Text className="text-[#495057] w-1/4">GSE</Text>
              <Image
                src="http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/JH76590__1694559786.jpg#/"
                className="w-10 h-10 rounded-full"
              />
              <Text className="text-[#495057] w-1/4">S1 - S2</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView> */}
      <ScrollView horizontal={true}>
        <ScrollView className="h-[90%]">
          <DataTable
            style={{
              width: 1000,
            }}
            className="space-y-5"
          >
            <DataTable.Header className="bg-[#5156BE]">
              <DataTable.Title>
                <Text className="text-white">Code</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text className="text-white">Nom</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text className="text-white">Prénom</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text className="text-white">Télé</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text className="text-white">Email</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text className="text-white">Filière</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text className="text-white">Image</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text className="text-white">Niveau</Text>
              </DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell>23023196</DataTable.Cell>
              <DataTable.Cell>AFOUKAL</DataTable.Cell>
              <DataTable.Cell>ABDALLAH</DataTable.Cell>
              <DataTable.Cell>0688470111</DataTable.Cell>
              <DataTable.Cell>heloo@gmail.components</DataTable.Cell>
              <DataTable.Cell>GSE</DataTable.Cell>
              <DataTable.Cell>
                <Image
                  source={{
                    uri: "http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/JH76590__1694559786.jpg#/",
                  }}
                  style={{ width: 50, height: 50 }}
                />
              </DataTable.Cell>
              <DataTable.Cell>S1 - S2</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>23023196</DataTable.Cell>
              <DataTable.Cell>AFOUKAL</DataTable.Cell>
              <DataTable.Cell>ABDALLAH</DataTable.Cell>
              <DataTable.Cell>0688470111</DataTable.Cell>
              <DataTable.Cell>heloo@gmail.components</DataTable.Cell>
              <DataTable.Cell>GSE</DataTable.Cell>
              <DataTable.Cell>
                <Image
                  source={{
                    uri: "http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/JH76590__1694559786.jpg#/",
                  }}
                  style={{ width: 50, height: 50 }}
                />
              </DataTable.Cell>
              <DataTable.Cell>S1 - S2</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>23023196</DataTable.Cell>
              <DataTable.Cell>AFOUKAL</DataTable.Cell>
              <DataTable.Cell>ABDALLAH</DataTable.Cell>
              <DataTable.Cell>0688470111</DataTable.Cell>
              <DataTable.Cell>heloo@gmail.components</DataTable.Cell>
              <DataTable.Cell>GSE</DataTable.Cell>
              <DataTable.Cell>
                <Image
                  source={{
                    uri: "http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/JH76590__1694559786.jpg#/",
                  }}
                  style={{ width: 50, height: 50 }}
                />
              </DataTable.Cell>
              <DataTable.Cell>S1 - S2</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>23023196</DataTable.Cell>
              <DataTable.Cell>AFOUKAL</DataTable.Cell>
              <DataTable.Cell>ABDALLAH</DataTable.Cell>
              <DataTable.Cell>0688470111</DataTable.Cell>
              <DataTable.Cell>heloo@gmail.components</DataTable.Cell>
              <DataTable.Cell>GSE</DataTable.Cell>
              <DataTable.Cell>
                <Image
                  source={{
                    uri: "http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/JH76590__1694559786.jpg#/",
                  }}
                  style={{ width: 50, height: 50 }}
                />
              </DataTable.Cell>
              <DataTable.Cell>S1 - S2</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>23023196</DataTable.Cell>
              <DataTable.Cell>AFOUKAL</DataTable.Cell>
              <DataTable.Cell>ABDALLAH</DataTable.Cell>
              <DataTable.Cell>0688470111</DataTable.Cell>
              <DataTable.Cell>heloo@gmail.components</DataTable.Cell>
              <DataTable.Cell>GSE</DataTable.Cell>
              <DataTable.Cell>
                <Image
                  source={{
                    uri: "http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/JH76590__1694559786.jpg#/",
                  }}
                  style={{ width: 50, height: 50 }}
                />
              </DataTable.Cell>
              <DataTable.Cell>S1 - S2</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>23023196</DataTable.Cell>
              <DataTable.Cell>AFOUKAL</DataTable.Cell>
              <DataTable.Cell>ABDALLAH</DataTable.Cell>
              <DataTable.Cell>0688470111</DataTable.Cell>
              <DataTable.Cell>heloo@gmail.components</DataTable.Cell>
              <DataTable.Cell>GSE</DataTable.Cell>
              <DataTable.Cell>
                <Image
                  source={{
                    uri: "http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/JH76590__1694559786.jpg#/",
                  }}
                  style={{ width: 50, height: 50 }}
                />
              </DataTable.Cell>
              <DataTable.Cell>S1 - S2</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>23023196</DataTable.Cell>
              <DataTable.Cell>AFOUKAL</DataTable.Cell>
              <DataTable.Cell>ABDALLAH</DataTable.Cell>
              <DataTable.Cell>0688470111</DataTable.Cell>
              <DataTable.Cell>heloo@gmail.components</DataTable.Cell>
              <DataTable.Cell>GSE</DataTable.Cell>
              <DataTable.Cell>
                <Image
                  source={{
                    uri: "http://ensemc.irma-prod.net/storage/scolarite/etudiant/profile_image/valide/JH76590__1694559786.jpg#/",
                  }}
                  style={{ width: 50, height: 50 }}
                />
              </DataTable.Cell>
              <DataTable.Cell>S1 - S2</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </ScrollView>
      </ScrollView>
    </View>
  );
}
