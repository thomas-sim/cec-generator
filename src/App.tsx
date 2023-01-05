import { GenderMarkerChangeForm } from './components/GenderMarkerChangeForm';
import {
  Heading,
  Flex,
  Spacer,
  Center,
  Text,
} from '@chakra-ui/react';

function App() {
  return (
    <Flex direction="column" w="100%" h="100vh">
      <Heading>Générateur de requête de CEC</Heading>
      <Center>
        <GenderMarkerChangeForm/>
      </Center>
      <Spacer/>
      <Center>
        <Text fontSize="xs">
          Créé par Thomas Simatic
        </Text>
      </Center>
    </Flex>
  )
}

export default App
