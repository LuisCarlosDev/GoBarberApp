import React from 'react';
import { View, Text, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, color: '#f4ede8', margin: 16 }}>
        Aplicativo em desenvolvimento! Faça seu cadastro na página de login
      </Text>
      <Button title="Sair" onPress={signOut} color="#ff9000" />
    </View>
  );
};

export default Dashboard;
