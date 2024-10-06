import { useForm } from "react-hook-form";

const useProductsForm = () => {
  const { control, handleSubmit } = useForm({ defaultValues: { name: "" } });

  const onSubmit = (data) => {
    console.log(data);
  };

  return {
    control,
    handleSubmit,
    onSubmit,
  };
};

export default useProductsForm;
