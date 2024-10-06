import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import useProductsForm from "@/hooks/products/useProductsForm";
import Dropdown from "@/components/DropDown";

const SalesForm = () => {
  const { control, handleSubmit, onSubmit } = useProductsForm();

  return (
    <View>
      <Text style={styles.titlesText}>Lançamento de venda</Text>
      <Text style={styles.label}>Produto:</Text>
      <Dropdown 
        data={[
          { value: "Computador", label: "Computador" },
          { value: "Mesa", label: "Mesa" },
          { value: "Camisa", label: "Camisa" },
        ]}
        onChange={console.log}
        placeholder="Selecione um produto"
      />
      <Text style={styles.label}>Nota Fiscal:</Text>
      <TextInput
        style={styles.input}
        placeholder="ex.: 123456789"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Quantidade:</Text>
      <TextInput
        style={styles.input}
        placeholder="ex.: 5"
        keyboardType="numeric"
      />
      <Button title="Lançar" color={'#000'} onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    fontSize: 15,
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  titlesText: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  dropdown: {
    borderWidth: 1, 
  }
});

export default SalesForm;
