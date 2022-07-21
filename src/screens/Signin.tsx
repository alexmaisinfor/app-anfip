import { VStack , Heading, Text, Icon, useTheme} from 'native-base';
import { Envelope, Key} from 'phosphor-react-native';
import { useState } from 'react';
import Logo from "../assets/logo_primary.svg";
import { Input } from '../components/Input';
import { Button } from '../components/Button';


export function SignIn() {

    const [name, setName] = useState('');
    const [password, setPassoword] = useState('');

    const {colors} = useTheme();

    return (

        <VStack flex={1} alignItems="center" bg={'coolGray.700'} px='8' pt={'48'}>

            {/* <Logo width={300}/> */}
            <Text color="coolGray.50">logo</Text>

            <Heading color={'coolGray.100'} fontSize="xl" mt={20}>
                Área do associado {name}
            </Heading>

            <Input placeholder="Email" mt="8" 
            InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml='4' />}
            onChangeText={setName}
            />
            <Input  placeholder="Senha" mt="5"
            InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml='4' />}
            secureTextEntry
            />
            <Button title='Entrar' w={'full'}/>
            
        </VStack>
    
    );
}