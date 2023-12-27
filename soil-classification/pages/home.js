import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  const dashboardItems = [
    { id: '1', title: 'Camera', icon: 'camera', onPress: () => navigation.navigate('Camera') },
    { id: '2', title: 'Soil Type', icon: 'tree', onPress: () => navigation.navigate('SoilType') },
    { id: '3', title: 'About', icon: 'info-circle', onPress: () => navigation.navigate('About') },
    { id: '4', title: 'Crop Suggestions', icon: 'leaf', onPress: () => navigation.navigate('CropSuggestions') },
  ];

  const renderDashboardItem = ({ item }) => (
    <TouchableOpacity style={styles.dashboardItem} onPress={item.onPress}>
     
        <View style={styles.iconContainer}>
          <Icon name={item.icon} size={30} color="#99EDC3" style={styles.icon} />
        </View>
        <Text style={styles.dashboardItemText}>{item.title}</Text>
      
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AGRO APP</Text>
      <FlatList
        data={dashboardItems}
        keyExtractor={(item) => item.id}
        renderItem={renderDashboardItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 100,
    textAlign: 'center',
    color: 'green',
  },
  dashboardItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: "25%",
  
  },
  iconContainer: {
    marginRight: 8,
  },
  icon: {
    marginRight: 8,
  },
  dashboardItemText: {
    fontSize: 24,
    color: 'white',
  },
});

export default Home;
