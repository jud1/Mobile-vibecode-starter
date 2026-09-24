import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetailsScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <View style={styles.container}>
        <View style={styles.check}>
          <Text style={styles.checkText}>✓</Text>
        </View>
        <Text style={styles.title}>La navegación funciona.</Text>
        <Text style={styles.description}>
          Expo Router abrió una segunda pantalla. Ya puedes reemplazar este ejemplo por el primer
          flujo de tu producto.
        </Text>
        <Link href="/" replace accessibilityRole="button" style={styles.button}>
          Volver al inicio
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#10213B',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
    gap: 20,
  },
  check: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#42D49B',
  },
  checkText: {
    color: '#10213B',
    fontSize: 34,
    fontWeight: '900',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: '800',
    letterSpacing: -1,
  },
  description: {
    color: '#C1CCDA',
    fontSize: 18,
    lineHeight: 27,
  },
  button: {
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    color: '#10213B',
    fontSize: 16,
    fontWeight: '700',
    paddingHorizontal: 20,
    paddingVertical: 16,
    textAlign: 'center',
  },
});
