import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props  = IButtonProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
    bg={'blue.700'}
    mt='10'
    fontSize='sm'
    rounded='sm'
    _pressed={{bg:'blue.300'}}
    {...rest}
    >
        <Heading color='white'>Entrar</Heading>
    </ButtonNativeBase>
  );
}