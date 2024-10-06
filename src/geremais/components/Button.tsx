import { Button as ReactButton } from "react-native";

interface IButton {
  title: string;
  onPress: () => void;
}

const Button = ({ title, onPress }: IButton) => {
  return <ReactButton title={title} onPress={onPress} />;
};

export default Button;
