import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({...rest} : IInputProps) {
  return (
    <NativeBaseInput 
        bg='coolGray.50'
        color="coolGray.700"
        // placeholderTextColor='coolGray.700'
        borderWidth={0}
        h={14}
        size="md"
        fontSize="md"
        fontFamily="body"
        _focus={{
            borderWidth:1,
            borderColor: 'lightBlue.400',
            bg:'lightBlue.50,'
        }}
        {...rest}
    />
  );
}