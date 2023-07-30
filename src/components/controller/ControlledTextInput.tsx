import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  interpolateColor,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {TextInput} from 'react-native';
import {useTheme} from 'styled-components';

export function ControlledTextInput<TypeForm extends FieldValues>({
  control,
  name,
  rules,
}: UseControllerProps<TypeForm>) {
  const theme = useTheme();
  const animatedValue = useSharedValue(0);

  const animatedLabelStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animatedValue.value,
            [0, 1],
            [16, -12],
            Extrapolate.CLAMP,
          ),
        },
      ],
      fontSize: interpolate(
        animatedValue.value,
        [0, 1],
        [12, 16],
        Extrapolate.CLAMP,
      ),
      color: interpolateColor(
        animatedValue.value,
        [0, 1],
        [theme.colors.DISABLED_TEXT, theme.colors.PRIMARY_TEXT],
      ),
      backgroundColor: interpolateColor(
        animatedValue.value,
        [0, 1],
        [theme.colors.BACKGROUND, theme.colors.BACKGROUND],
      ),
      width: interpolate(
        animatedValue.value,
        [0, 1],
        [140, 140],
        Extrapolate.CLAMP,
      ),
      paddingHorizontal: interpolate(
        animatedValue.value,
        [0, 1],
        [0, 12],
        Extrapolate.CLAMP,
      ),
    };
  });

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(
        animatedValue.value,
        [0, 1],
        [theme.colors.DISABLED_TEXT, theme.colors.PRIMARY_TEXT],
      ),
      borderWidth: 1,
      borderRadius: 6,
    };
  });

  const onFocus = () => {
    animatedValue.value = withTiming(1, {
      duration: 500,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
    });
  };

  const onBlur = () => {
    animatedValue.value = withTiming(0, {
      duration: 500,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
    });
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field}) => (
        <Animated.View
          style={[
            // eslint-disable-next-line react-native/no-inline-styles
            {paddingHorizontal: 10, width: '100%', height: 48},
            animatedContainerStyle,
          ]}>
          <Animated.Text style={[animatedLabelStyle]}>
            Nome completo
          </Animated.Text>
          <TextInput
            style={{color: theme.colors.PRIMARY_TEXT}}
            onChange={field.onChange}
            value={field.value}
            onFocus={onFocus}
            onBlur={() => {
              field.onBlur();
              onBlur();
            }}
          />
        </Animated.View>
      )}
    />
  );
}
