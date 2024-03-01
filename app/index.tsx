import { Link, useNavigation } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

type RootStackParamList = {
	Home: string;
	Pokemons: string;
};


export default function Page() {
const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>

        <Link href="/home">
          <Button title="Go to home" />
        </Link>
        <Link href="/pokemons">
          <Button title="Go to pokemons" />
        </Link>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  footer: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: "#38434D",
    width: "100%",
  },
});
