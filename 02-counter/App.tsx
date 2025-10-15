import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//Tarea agregar un boton reiniciar , el boton reiniciar debe estar en blanco , y cuando se aplasta el reiniciar el texto del cero debe ser negro
export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  }

  const counterStyle = {
    fontSize: 100,
    color: count > 0 ? '#10B981' : '#EF4444'
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.card}>
        <Text style={styles.title}>Contador</Text>
        <Text style={styles.subtitle}>Presiona los botones para cambiar el valor</Text>
        <View style={styles.counterContainer}>
          <Text style={counterStyle}>{count}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={increment}
            style={[
              styles.button,
              styles.incrementButton
            ]}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={decrement}
            style={[
              styles.button,
              styles.decrementButton
            ]}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#0000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.10,
    shadowRadius: 20,
    elevation: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 32,
    textAlign: 'center',
  },
  counterContainer: {
    marginBottom: 40,
    minHeight: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  incrementButton: {
    backgroundColor: '#10B981',
  },
  decrementButton: {
    backgroundColor: '#EF4444',
  },
  buttonText: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 40,
  }
});
