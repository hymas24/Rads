import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [flips, setFlips] = useState([]);
  const [item, setItem] = useState('');
  const [buy, setBuy] = useState('');
  const [sell, setSell] = useState('');

  const addFlip = () => {
    const profit = parseFloat(sell) - parseFloat(buy);
    setFlips([...flips, { item, buy, sell, profit }]);
    setItem('');
    setBuy('');
    setSell('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RadFlip</Text>
      <TextInput style={styles.input} placeholder="Item" value={item} onChangeText={setItem} />
      <TextInput style={styles.input} placeholder="Buy Price" value={buy} onChangeText={setBuy} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Sell Price" value={sell} onChangeText={setSell} keyboardType="numeric" />
      <Button title="Add Flip" onPress={addFlip} />
      <FlatList
        data={flips}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item.item} - Buy: £{item.buy} → Sell: £{item.sell} = Profit: £{item.profit}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 50 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 }
});
