import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ShaePlanets() {
  const [points, setPoints] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleClick = () => {
    setPoints((prev) => prev + 10);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.topRightPoints}>Points: {points}</Text>

      <Image
        source={{
          uri: "https://static.vecteezy.com/system/resources/previews/024/596/370/non_2x/pink-planet-illustration-free-png.png",
        }}
        style={{ width: 300, height: 300 }}
      />
      <Text style={styles.title}>Shae Planets</Text>
      <Text style={styles.text}>Points: {points}</Text>

      <Text style={styles.text}>Timer: {seconds} seconds</Text>
      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.buttonText}>Destroy</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3b8eeff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff",
  },
  text: {
    fontSize: 18,
    marginBottom: 15,
    color: "#fff",
  },
  button: {
    backgroundColor: "#fa0bc6ff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#1e1e1e",
    fontSize: 16,
    fontWeight: "bold",
  },
  topRightPoints: {
    position: "absolute",
    top: 20,
    right: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: " #fa0bc6ff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
});
