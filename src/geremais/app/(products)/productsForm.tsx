import Button from "@/components/Button";
import { StyleSheet, TextInput, View } from "react-native";
import { Controller } from "react-hook-form";
import useProductsForm from "@/hooks/products/useProductsForm";

const ProductsForm = () => {
  const { control, handleSubmit, onSubmit } = useProductsForm();

  return (
    <View>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput {...field} style={styles.input} placeholder="Nome" />
        )}
        name="name"
        rules={{ required: "You must enter your name" }}
      />
      <Button title="Criar" onPress={handleSubmit(onSubmit)} />
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
});

export default ProductsForm;
