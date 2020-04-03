import React,  {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function Previsions(props) {

const apiKey = '3179f5fa5a51a027cb42aacbb4bf3e13';
const city = 'Seoul';

const [day1Temp, setday1Temp] = useState("");
const [iconday1, setIconDay1] = useState('');
const [day1, setDay1] = useState('');

const [day2Temp, setday2Temp] = useState("");
const [iconday2, setIconDay2] = useState('');
const [day2, setDay2] = useState('');

const [day3Temp, setday3Temp] = useState("");
const [iconday3, setIconDay3] = useState('');
const [day3, setDay3] = useState('');


useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=fr`
      )
      .then(reponse => reponse.json())
      .then(jsonData => {
        console.log('Les données JSON sont :', jsonData);
        setday1Temp(jsonData.list[0].main.temp);
        setIconDay1(jsonData.list[0].weather[0].icon);
        setDay1(jsonData.list[0].dt_txt);

        setday2Temp(jsonData.list[1].main.temp);
        setIconDay2(jsonData.list[1].weather[0].icon);
        setDay2(jsonData.list[1].dt_txt);

        setday3Temp(jsonData.list[2].main.temp);
        setIconDay3(jsonData.list[2].weather[0].icon);
        setDay3(jsonData.list[2].dt_txt);
      });
  }, []);

  

    return (

<View style={styles.container}>

    <View style={styles.ligne}>
    <Text style={styles.date}>{day1}</Text>
        <Image source={{
                    uri: `http://openweathermap.org/img/wn/${iconday1}@2x.png`,
                }} style={styles.icon}></Image>
    <Text style={styles.temperature}>{day1Temp}°C</Text>
    </View>
    <View style={styles.ligne}>
        <Text style={styles.date}>{day2}</Text>
        <Image source={{
                    uri: `http://openweathermap.org/img/wn/${iconday2}@2x.png`,
                }} style={styles.icon}></Image>
        <Text style={styles.temperature}>{day2Temp}°C</Text>
    </View>
    <View style={styles.ligne}>
        <Text style={styles.date}>{day3}</Text>
        <Image source={{
                    uri: `http://openweathermap.org/img/wn/${iconday3}@2x.png`,
                }} style={styles.icon}></Image>
        <Text style={styles.temperature}>{day3Temp}°C</Text>
    </View>
    

</View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
     
    }, 

    ligne:{

       width: 300,
      justifyContent: 'space-between',
      alignItems: 'center',
       flexDirection: 'row',

    },

    date :{

        textTransform : 'uppercase',
        fontFamily : 'Arial',
        fontSize: 16,
        

    },


    icon :{

        width: 40,
        height: 40,
    }, 

    temperature :{

        fontSize: 16,
        fontWeight: 'bold',
    }

  
  });


