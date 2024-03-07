import React from "react";
import { Image, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

// TODO: VERIFICAR UMA FORMA DO SafeAreaView NÃO QUEBRAR A WEB

export function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userWrapper}>
          <View style={styles.userInfo}>
            <Image
              style={styles.photo}
              source={{
                uri: "https://avatars.githubusercontent.com/u/83084256?v=4",
              }}
            />
            <View style={styles.user}>
              <Text style={styles.user}>Olá,</Text>
              <Text style={styles.userName}>Lílian</Text>
            </View>
          </View>
          <Feather size={24} name='power' style={styles.icon} />
        </View>
      </View>
    </View>
  );
}
