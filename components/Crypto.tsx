import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { colorTheme } from '../assets/styling';
const Crypto = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    fetchCryptos();
  }, []);

  const fetchCryptos = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
      const data = await response.json();
      setCryptos(data);
    } catch (error) {
      console.log('Error fetching cryptocurrencies:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.cryptoItem}>
      <Text style={styles.cryptoName}>{item.name}</Text>
      <Text style={styles.cryptoSymbol}>{item.symbol}</Text>
      <Text style={styles.cryptoPrice}>Price: ${item.current_price}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Top 10 Cryptocurrencies</Text>
      <FlatList
        data={cryptos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorTheme.primary,
    paddingHorizontal: 16,
    paddingTop: 24,
    maxHeight: 500,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: colorTheme.text,
  },
  cryptoItem: {
    marginBottom: 16,
    color: colorTheme.text,
  },
  cryptoName: {
    fontSize: 16,
    fontWeight: "bold",
    color: colorTheme.text,
  },
  cryptoSymbol: {
    fontSize: 14,
    color: colorTheme.text,
  },
  cryptoPrice: {
    fontSize: 14,
    color: colorTheme.text,
  },
});

export default Crypto;
