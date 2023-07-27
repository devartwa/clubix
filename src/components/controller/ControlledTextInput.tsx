import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import {TextInput} from 'react-native';

export function ControlledTextInput<TypeForm extends FieldValues>({
  control,
  name,
  rules,
  ...textInputProps
}: UseControllerProps<TypeForm>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field}) => (
        <TextInput
          {...textInputProps}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          // error={fieldState.error.message}
        />
      )}
    />
  );
}
