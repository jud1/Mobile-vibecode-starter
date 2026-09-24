import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <View style={styles.container}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>EXPO · REACT NATIVE · TYPESCRIPT</Text>
        </View>
        <Text style={styles.title}>Tu próxima app empieza aquí.</Text>
        <Text style={styles.description}>
          Una base pequeña para crear herramientas de productividad y automatización sin imponer
          backend, autenticación ni pagos.
        </Text>

        <Link
          href="/details"
          accessibilityRole="button"
          accessibilityLabel="Comprobar la navegación"
          style={styles.button}>
          Comprobar navegación
        </Link>

        <Text style={styles.hint}>Edita src/app/index.tsx para empezar.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
    gap: 20,
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    backgroundColor: '#DDEAFE',
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  badgeText: {
    color: '#1757A6',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.7,
  },
  title: {
    color: '#10213B',
    fontSize: 42,
    fontWeight: '800',
    letterSpacing: -1.2,
    lineHeight: 47,
  },
  description: {
    color: '#53647A',
    fontSize: 18,
    lineHeight: 27,
  },
  button: {
    borderRadius: 16,
    backgroundColor: '#176BDE',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    paddingHorizontal: 20,
    paddingVertical: 16,
    textAlign: 'center',
  },
  hint: {
    color: '#738198',
    fontSize: 14,
    textAlign: 'center',
  },
});
