import { Slot } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>gere+</Text>
      </View>
      <View style={styles.content}>
        <Slot />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: "#6200ea", // Cor do header
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20, // Ajuste para compensar a status bar
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 20, // Padding global para o conteúdo das páginas
  },
});
