import { View, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";

interface SearchInputProps {
  value?: string;
  placeholder?: string;
  handleChangeText?: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  placeholder,
  handleChangeText,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      className={`w-full h-16 px-4 mt-2 bg-black-100 rounded-2xl border-2 flex flex-row items-center space-x-4 ${
        isFocused ? "border-secondary" : "border-black-200"
      }`}
    >
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7B7B8B"
        onChangeText={handleChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
