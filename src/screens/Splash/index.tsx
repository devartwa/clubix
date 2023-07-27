import React from 'react';

import {View, Text} from './styles';
import {ControlledTextInput} from '@components/controller/ControlledTextInput';
import {useForm} from 'react-hook-form';

export function Splash() {
  const {control, handleSubmit, formState} = useForm();
  return (
    <View>
      <Text>Splash</Text>
      <ControlledTextInput
        control={control}
        name="Teste"
        rules={{required: true}}
      />
    </View>
  );
}
