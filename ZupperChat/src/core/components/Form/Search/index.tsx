import React from 'react';
import { TextInput, View } from 'react-native';
import SearchIcon from '../../../../core/assets/svg/search.svg';
import { style } from './styled';

interface Props {
  handleTextInput: (event: string) => void;
  handleTextInputSubmit?: (event: any) => void;
}

export const Search = ({ handleTextInput, handleTextInputSubmit }: Props) => {
  return (
    <View style={style.searchField}>
      <SearchIcon
        height="15"
        width="15"
        fill="#dcdee0"
        style={{ position: 'absolute', marginLeft: 7.5, marginTop: 7.5 }}
      />
      <TextInput
        onChangeText={handleTextInput}
        placeholderTextColor="#dcdee0"
        placeholder="Search"
        style={{ marginLeft: 30, marginTop: 6, color: '#fff' }}
        onSubmitEditing={handleTextInputSubmit}
      />
    </View>
  );
};

export default Search;
