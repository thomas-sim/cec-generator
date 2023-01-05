import { Formik, Form, Field } from 'formik';
import Input from './Input';
import { Button, Checkbox, VStack } from "@chakra-ui/react";

export const GenderMarkerChangeForm = () => (
  <Formik
    initialValues={{
      firstname: '',
      lastname: '',
      courthouseInfo: '',
      desiredGenderMarker: '',
      firstnameAlreadyChanged: false,
      deadname: '',
      birthdate: '',
      birthplace: '',
    }}
    onSubmit={(values, { setSubmitting })=> {
      console.log('Form submitted', values);
      setSubmitting(false);
    }}
  >
    <Form>
      <VStack spacing={4}>
        <Input name="firstname" label="Prénom" />
        <Input name="lastname" label="Nom de Famille" />
        <Input name="courthouseInfo" label="Ville du tribunal" />
        <Field
          as={Checkbox}
          id="firstnameAlreadyChanged"
          name="firstnameAlreadyChanged"
        >
          Besoin de demander le changement de prénom ?
        </Field>
        <Input name="deadname" label="Ancien prénom" />
        <Input type="date" name="birthdate" label="Date de naissance" />
        <Input name="birthplace" label="Ville de naissance" />
        <Button type="submit">
          Générer ma requête
        </Button>
      </VStack>
    </Form>
   </Formik>
);
