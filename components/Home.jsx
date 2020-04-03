import React,  {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function Home(props) {

var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var fullMonth = month.toString().padStart(2,"0");
var year = new Date().getFullYear(); //Current Month
var hours = new Date().getHours(); //Current Hours
var minutes = new Date().getMinutes();
const apiKey = '3179f5fa5a51a027cb42aacbb4bf3e13';
const city = 'Seoul';

useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`
      )
      .then(reponse => reponse.json())
      .then(jsonData => {
        console.log('Les données JSON sont :', jsonData);
        setWeather(jsonData);
        setIcon(jsonData.weather[0].icon);
      });
  }, []);

  const [weather, setWeather] = useState(null);
  const [icon, setIcon] = useState('');


  if (weather === null) {
    return (
      <Text>Chargement...</Text>
    );
  }

return (

<View style={styles.container}>

    <View style={styles.header}>
<Text style={styles.date}>{date} / {fullMonth} / {year}</Text>
        <Text style={styles.heure}> {hours}:{minutes}</Text>
        <Text style={styles.ville}>{weather.name}</Text>

    </View>
    <View style={styles.main}> 
        <Text style={styles.description}>{weather.weather[0].description}</Text>
        <Image source={{
                    uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
                }} style={styles.icon}></Image>
        <Text style={styles.temperature}>{weather.main.temp}°C</Text>
        
    </View>

</View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
        
     
    }, 

    header :{

       height : 100,
       alignItems: 'center',
       marginBottom: 40,

    },

    main :{

        height : 100,
        alignItems: 'center',

    },


    date :{

        textTransform : 'uppercase',
        fontFamily : 'Arial',
        fontSize: 22,
        marginBottom : 10,

    },

    heure: {

        fontFamily : 'Arial',
        fontSize: 18,
        marginBottom : 20,


    }, 

    ville :{

        textTransform : 'uppercase',
        fontSize : 30,
      

    },

    description :{
        textTransform : 'uppercase',
        fontSize: 15,
        fontWeight: '300',

    },

    icon :{

        width: 150,
        height: 150,
    }, 

    temperature :{

        fontSize: 35,
        fontWeight: 'bold',
    }

  
  });


