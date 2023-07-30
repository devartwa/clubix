import React from 'react';

import {View, Text} from './styles';
import {ControlledTextInput} from '@components/controller/ControlledTextInput';
import {useForm} from 'react-hook-form';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

export function Splash() {
  const {control, handleSubmit, formState} = useForm();
  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text>Splash</Text>
          <ControlledTextInput
            control={control}
            name="Teste"
            rules={{required: true}}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
