import React from 'react';
    import { StyleSheet, View, Text } from 'react-native';
    import { Provider as PaperProvider, Appbar, Card, Button } from 'react-native-paper';
    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';

    const Stack = createStackNavigator();

    function HomeScreen({ navigation }) {
      return (
        <View style={styles.container}>
          <Card style={styles.card}>
            <Card.Title title="Bem-vindo à Rede Social" />
            <Card.Content>
              <Text>Conecte-se com seus amigos e compartilhe momentos!</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.navigate('Perfil')}>Ver Perfil</Button>
            </Card.Actions>
          </Card>
        </View>
      );
    }

    function ProfileScreen() {
      return (
        <View style={styles.container}>
          <Text>Perfil do Usuário</Text>
        </View>
      );
    }

    export default function App() {
      return (
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Perfil" component={ProfileScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
      },
      card: {
        margin: 8,
      },
    });
