import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import CurrentWeather from './CurrentWeather';
import {devices} from '../utilities/DeviceItemList';
import Card from '../components/card';

const DashboardHome = () => {
  const pressHandler = (id: number) => {
    console.log(id);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <FontAwesome name="circle" color={'green'} />
        <Text style={styles.header}> LATESTAPPTESTING</Text>
      </View>

      <View style={styles.container}>
        <CurrentWeather />
      </View>

      <View style={styles.container}>
        <Text style={styles.header}> Favorite Devices</Text>
        <Feather name="plus" size={20} color={'white'} />
      </View>

      <View style={styles.container}>
        <FlatList
          numColumns={3}
          data={devices}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
              <Card>
                <View style={styles.status}>
                  <FontAwesome5 name="lightbulb" size={30} color={'white'} />
                  <Text style={styles.statusText}>{item.status}</Text>
                </View>

                <Text style={styles.item}>{item.name}</Text>
                <Text style={styles.item}>{item.location}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: 'black'},
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 10,
  },
  header: {fontSize: 20, color: 'white'},
  item: {
    fontSize: 15,
    color: 'white',
    textAlign: 'justify',
    textAlignVertical: 'center',
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statusText: {
    color: 'white',
    textAlign: 'right',
  },
});

export default DashboardHome;
