import React, {useState, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
import {api} from '../utilities/OpenWeatherApi';

const CurrentWeather = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchDataHandler = useCallback(() => {
    setLoading(true);
    setInput('');
    axios({
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=${api.key}`,
    })
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(e => console.dir(e))
      .finally(() => setLoading(false));
  }, [api.key, input]);

  const {wrapper, container, mediumText, tempText, condition} = styles;

  return (
    <SafeAreaView style={wrapper}>
      <View>
        <TextInput
          placeholder="Search for a city name and press enter..."
          onChangeText={text => setInput(text)}
          value={input}
          placeholderTextColor={'black'}
          style={styles.textInput}
          onSubmitEditing={fetchDataHandler}></TextInput>
      </View>

      {loading && (
        <View>
          <ActivityIndicator size={'large'} color={'white'} />
        </View>
      )}

      {data && (
        <View style={container}>
          <View>
            <Text
              style={mediumText}>{`${data?.name}, ${data?.sys?.country}`}</Text>
            <Text style={tempText}>{`${Math.round(data?.main?.temp)} °F`}</Text>
          </View>
          <View style={condition}>
            <Text style={styles.mediumText}>{`High: ${Math.round(
              data?.main?.temp_max,
            )} ° / Low: ${Math.round(data?.main?.temp_min)} °`}</Text>

            <View style={container}>
              <Entypo name="drop" size={15} color={'white'} />
              <Text
                style={mediumText}>{`Humidity: ${data?.main?.humidity}%`}</Text>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {flex: 1, margin: 20},
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  header: {fontSize: 20, color: 'white'},
  mediumText: {fontSize: 15, color: 'white'},
  tempText: {fontSize: 60, color: 'white'},
  condition: {padding: 20, alignItems: 'center'},
  smallText: {fontSize: 10, color: 'white'},
  textInput: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    color: 'black',
  },
});

export default CurrentWeather;
