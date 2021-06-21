import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { color, FONT_MEDIUM, FONT_REGULAR } from '../../../theme';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import { useState } from 'react';

const CardAssessment: React.FC<any> = ({
  question,
  onSelect,
  defaultValue,
}) => {
  const [value, setValue] = useState(defaultValue);
  var radio_props = [
    { label: 'Tidak', value: 0 },
    { label: 'Ya', value: 1 },
  ];

  return (
    <View style={{ padding: 5 }}>
      <Text style={{ ...FONT_REGULAR(14), width: '90%' }}>{question}</Text>
      <RadioForm animation={true}>
        {radio_props.map((obj, i) => (
          <RadioButton labelHorizontal={true} key={i}>
            <RadioButtonInput
              obj={obj}
              index={i}
              isSelected={value == i}
              onPress={(thisValue: number) => {
                setValue(thisValue);
                onSelect(thisValue == 1 ? true : false);
              }}
              borderWidth={2}
              buttonInnerColor={'#10536D'}
              buttonOuterColor={value === i ? '#10536D' : '#6F8B9A'}
              buttonSize={10}
              buttonOuterSize={20}
              buttonStyle={{}}
              buttonWrapStyle={{ marginLeft: 10 }}
            />
            <RadioButtonLabel
              obj={obj}
              index={i}
              labelHorizontal={true}
              onPress={(thisValue: number) => {
                setValue(thisValue);
                onSelect(thisValue == 1 ? true : false);
              }}
              labelStyle={{
                ...FONT_MEDIUM(14),
                color: value === i ? '#10536D' : '#6F8B9A',
              }}
              labelWrapStyle={{}}
            />
          </RadioButton>
        ))}
      </RadioForm>
    </View>
  );
};

export default CardAssessment;

const styles = StyleSheet.create({});
