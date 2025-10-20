import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  }

  const reset = () => {
    setCount(0);
  }

  // Color del contador: negro cuando es 0, verde si es positivo, rojo si es negativo
  const counterStyle = {
    fontSize: 100,
    color: count === 0 ? '#000000' : count > 0 ? '#10B981' : '#EF4444'
  }

  // El boton reiniciar solo esta habilitado cuando count !== 0
  const isResetDisabled = count === 0;

  return (
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
      <View style={styles.resetContainer}>
        <TouchableOpacity
          onPress={reset}
          style={[
            styles.resetButton,
            isResetDisabled && styles.resetButtonDisabled
          ]}
          activeOpacity={0.8}
          disabled={isResetDisabled}
        >
          <Text style={[
            styles.resetButtonText,
            isResetDisabled && styles.resetButtonTextDisabled
          ]}>
            Reiniciar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 20,
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
  },
  resetContainer: {
    width: '100%',
    marginTop: 10,
  },
  resetButton: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B82F6',
  },
  resetButtonDisabled: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  resetButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  resetButtonTextDisabled: {
    color: '#D1D5DB',
  },
});
