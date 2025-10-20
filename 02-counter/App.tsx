import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Counter />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Programación Móvil</Text>
        <Text style={styles.footerText}>Paralelo: B</Text>
        <Text style={styles.footerText}>Estudiante: Luis Alvarez</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  footer: {
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#1F2937',
    borderRadius: 16,
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginVertical: 2,
  },
});
