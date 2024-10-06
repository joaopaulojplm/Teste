import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Bem vindo!</Text>
      <Text style={styles.subTitlesText}>Produtos:</Text>
      <Pressable style={styles.pressible}>
        <Link href={"/productsForm"} style={styles.link}>Cadastrar Produtos</Link>
      </Pressable>
      <Pressable style={styles.pressible}>
        <Link href={"/productsForm"} style={styles.link}>Atualizar Produtos (em desenvolvimento)</Link>
      </Pressable>
      <Text style={styles.subTitlesText}>Vendas:</Text>
      <Pressable style={styles.pressible}>
        <Link href={"/salesForm"} style={styles.link}>Lançar Vendas</Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  subTitlesText: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  pressible: {
    backgroundColor: '#6200ea',
    padding: 10,
    borderRadius: 5,
    margin: 3,
  },
  link: {
    color: '#fff',
  }
});
