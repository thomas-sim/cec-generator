import { FieldHookConfig, useField } from "formik";
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

type PlainInputProps = ChakraInputProps & FieldHookConfig<"input">;
interface InputProps {
  label: string;
}
type Props = InputProps & ChakraInputProps & FieldHookConfig<"input">;

const PlainInput = ({ name, ...props }: PlainInputProps) => {
  const [field] = useField(name);
  return <ChakraInput {...props} {...field} />;
};

const Input = ({ name, label, ...props }: Props) => {
  if (label === undefined)
    return <PlainInput {...props} name={name} />;

  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <PlainInput {...props} name={name} />
    </FormControl>
  )
};

export default Input;
