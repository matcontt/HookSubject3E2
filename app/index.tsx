import "../global.css";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  const [contador, setContador] = useState(0);

  function incrementarContador() {
    setContador(contador + 1);
  }

  function decrementarContador() {
    setContador(contador - 1);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Contador: {contador}</Text>
      <Pressable onPress={incrementarContador} onLongPress={decrementarContador}>
        <Text className="text-3xl font-bold text-center">Cambiar estado</Text>
      </Pressable>
    </View>
  );
}
