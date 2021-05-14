import * as React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,ScrollView,Linking,} from 'react-native';
import axios from 'axios';
//import {newsapiurl,newscountrycode,newscategory,newsapikey} from '../newsconfig';

export default class SportsNewScreen extends React.Component{
  constructor(){
    super();
    this.state = {
      news : '',
    }
  }
  getNews = async () => {
    var url = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=57157c4a2aae425cb961b45d2cec1054';
    return fetch(url)
    .then(response => response.json())
    .then(responseJson =>{
      this.setState({
        news: responseJson,
      })
    })
    .catch(error => {
     console.error(error);
    })
  }
  componentDidMount = () => {
this.getNews();
  }

  render(){
    if(!this.state.news) {
    return (
<View style={styles.container}>
<Text style = {{fontSize:20,textAlign:'center',justifyContent:'center',marginTop:300}}>Getting Business Knowledge...</Text>
</View>

    );
}
else{
  return(
        <ScrollView>
  <View style={styles.container}>

<TouchableOpacity onPress={ ()=> Linking.openURL(this.state.news. articles[0].url) } style = {{marginTop:40}}>
      <Text style = {{fontSize:20,fontWeight: 'bold'}}>1.{this.state.news.articles[0].title}</Text>
      <Text style = {{fontSize:20}}>{this.state.news.articles[0].description}</Text>
      <Image source={{uri:this.state.news.articles[0].urlToImage}} style={{padding: 150}}/>
</TouchableOpacity>

<TouchableOpacity onPress={ ()=> Linking.openURL(this.state.news. articles[1].url) }style = {{marginTop:40}}>
      <Text style = {{fontSize:20,fontWeight: 'bold'}}>2.{this.state.news.articles[1].title}</Text>
      <Text style = {{fontSize:20}}>{this.state.news.articles[1].description}</Text>
      <Image source={{uri:this.state.news.articles[1].urlToImage}} style={{padding: 150}}/>
</TouchableOpacity>

<TouchableOpacity onPress={ ()=> Linking.openURL(this.state.news. articles[2].url) }style = {{marginTop:40}}>
      <Text style = {{fontSize:20,fontWeight: 'bold'}}>3.{this.state.news.articles[2].title}</Text>
      <Text style = {{fontSize:20}}>{this.state.news.articles[2].description}</Text>
      <Image source={{uri:this.state.news.articles[2].urlToImage}} style={{padding: 150}}/>
</TouchableOpacity>

<TouchableOpacity onPress={ ()=> Linking.openURL(this.state.news. articles[3].url) }style = {{marginTop:40}}>
      <Text style = {{fontSize:20,fontWeight: 'bold'}}>4.{this.state.news.articles[3].title}</Text>
      <Text style = {{fontSize:20}}>{this.state.news.articles[3].description}</Text>
      <Image source={{uri:this.state.news.articles[3].urlToImage}} style={{padding: 150}}/>
</TouchableOpacity>

<TouchableOpacity onPress={ ()=> Linking.openURL(this.state.news. articles[4].url) }style = {{marginTop:40}}>
      <Text style = {{fontSize:20,fontWeight: 'bold'}}>5.{this.state.news.articles[4].title}</Text>
      <Text style = {{fontSize:20}}>{this.state.news.articles[4].description}</Text>
      <Image source={{uri:this.state.news.articles[4].urlToImage}} style={{padding: 150}}/>
</TouchableOpacity>

<TouchableOpacity onPress={ ()=> Linking.openURL(this.state.news. articles[5].url) }style = {{marginTop:40}}>
      <Text style = {{fontSize:20,fontWeight: 'bold'}}>6.{this.state.news.articles[5].title}</Text>
      <Text style = {{fontSize:20}}>{this.state.news.articles[5].description}</Text>
      <Image source={{uri:this.state.news.articles[5].urlToImage}} style={{padding: 150}}/>
</TouchableOpacity>

<TouchableOpacity onPress={ ()=> Linking.openURL(this.state.news. articles[6].url) }style = {{marginTop:40}}>
      <Text style = {{fontSize:20,fontWeight: 'bold'}}>7.{this.state.news.articles[6].title}</Text>
      <Text style = {{fontSize:20}}>{this.state.news.articles[6].description}</Text>
      <Image source={{uri:this.state.news.articles[6].urlToImage}} style={{padding: 150}}/>
</TouchableOpacity>

<TouchableOpacity onPress={ ()=> Linking.openURL(this.state.news. articles[7].url) }style = {{marginTop:40}}>
      <Text style = {{fontSize:20,fontWeight: 'bold'}}>8.{this.state.news.articles[7].title}</Text>
      <Text style = {{fontSize:20}}>{this.state.news.articles[7].description}</Text>
      <Image source={{uri:this.state.news.articles[7].urlToImage}} style={{padding: 150}}/>
</TouchableOpacity>

<TouchableOpacity onPress={ ()=> Linking.openURL(this.state.news. articles[8].url) }style = {{marginTop:40}}>
      <Text style = {{fontSize:20,fontWeight: 'bold'}}>9.{this.state.news.articles[8].title}</Text>
      <Text style = {{fontSize:20}}>{this.state.news.articles[8].description}</Text>
      <Image source={{uri:this.state.news.articles[8].urlToImage}} style={{padding: 150}}/>
</TouchableOpacity>

<TouchableOpacity onPress={ ()=> Linking.openURL(this.state.news. articles[9].url) }style = {{marginTop:40}}>
      <Text style = {{fontSize:20,fontWeight: 'bold'}}>10.{this.state.news.articles[9].title}</Text>
      <Text style = {{fontSize:20}}>{this.state.news.articles[9].description}</Text>
      <Image source={{uri:this.state.news.articles[9].urlToImage}} style={{padding: 150}}/>
</TouchableOpacity>
<TouchableOpacity onPress={ ()=> Linking.openURL(this.state.news. articles[10].url) }style = {{marginTop:40}}>
      <Text style = {{fontSize:20,fontWeight: 'bold'}}>11.{this.state.news.articles[10].title}</Text>
      <Text style = {{fontSize:20}}>{this.state.news.articles[10].description}</Text>
      <Image source={{uri:this.state.news.articles[10].urlToImage}} style={{padding: 150}}/>
</TouchableOpacity>
<TouchableOpacity onPress={ ()=> Linking.openURL(this.state.news. articles[11].url) }style = {{marginTop:40}}>
      <Text style = {{fontSize:20,fontWeight: 'bold'}}>12.{this.state.news.articles[11].title}</Text>
      <Text style = {{fontSize:20}}>{this.state.news.articles[11].description}</Text>
      <Image source={{uri:this.state.news.articles[11].urlToImage}} style={{padding: 150}}/>
</TouchableOpacity>
<TouchableOpacity onPress={ ()=> Linking.openURL(this.state.news. articles[12].url) }style = {{marginTop:40}}>
      <Text style = {{fontSize:20,fontWeight: 'bold'}}>13.{this.state.news.articles[12].title}</Text>
      <Text style = {{fontSize:20}}>{this.state.news.articles[12].description}</Text>
      <Image source={{uri:this.state.news.articles[12].urlToImage}} style={{padding: 150}}/>
</TouchableOpacity>
<TouchableOpacity onPress={ ()=> Linking.openURL(this.state.news. articles[13].url) }style = {{marginTop:40}}>
      <Text style = {{fontSize:20,fontWeight: 'bold'}}>14.{this.state.news.articles[13].title}</Text>
      <Text style = {{fontSize:20}}>{this.state.news.articles[13].description}</Text>
      <Image source={{uri:this.state.news.articles[13].urlToImage}} style={{padding: 150}}/>
</TouchableOpacity>
<TouchableOpacity onPress={ ()=> Linking.openURL(this.state.news. articles[14].url) }style = {{marginTop:40}}>
      <Text style = {{fontSize:20,fontWeight: 'bold'}}>15.{this.state.news.articles[14].title}</Text>
      <Text style = {{fontSize:20}}>{this.state.news.articles[14].description}</Text>
      <Image source={{uri:this.state.news.articles[14].urlToImage}} style={{padding: 150}}/>
</TouchableOpacity>
<TouchableOpacity onPress={ ()=> Linking.openURL(this.state.news. articles[15].url) }style = {{marginTop:40}}>
      <Text style = {{fontSize:20,fontWeight: 'bold'}}>16.{this.state.news.articles[15].title}</Text>
      <Text style = {{fontSize:20}}>{this.state.news.articles[15].description}</Text>
      <Image source={{uri:this.state.news.articles[15].urlToImage}} style={{padding: 150}}/>
</TouchableOpacity>
<TouchableOpacity onPress={ ()=> Linking.openURL(this.state.news. articles[16].url) }style = {{marginTop:40}}>
      <Text style = {{fontSize:20,fontWeight: 'bold'}}>17.{this.state.news.articles[16].title}</Text>
      <Text style = {{fontSize:20}}>{this.state.news.articles[16].description}</Text>
      <Image source={{uri:this.state.news.articles[16].urlToImage}} style={{padding: 150}}/>
</TouchableOpacity>
<TouchableOpacity onPress={ ()=> Linking.openURL(this.state.news. articles[17].url) }style = {{marginTop:40}}>
      <Text style = {{fontSize:20,fontWeight: 'bold'}}>18.{this.state.news.articles[17].title}</Text>
      <Text style = {{fontSize:20}}>{this.state.news.articles[17].description}</Text>
      <Image source={{uri:this.state.news.articles[17].urlToImage}} style={{padding: 150}}/>
</TouchableOpacity>
<TouchableOpacity onPress={ ()=> Linking.openURL(this.state.news. articles[18].url) }style = {{marginTop:40}}>
      <Text style = {{fontSize:20,fontWeight: 'bold'}}>19.{this.state.news.articles[18].title}</Text>
      <Text style = {{fontSize:20}}>{this.state.news.articles[18].description}</Text>
      <Image source={{uri:this.state.news.articles[18].urlToImage}} style={{padding: 150}}/>
</TouchableOpacity>
<TouchableOpacity onPress={ ()=> Linking.openURL(this.state.news. articles[19].url) }style = {{marginTop:40}}>
      <Text style = {{fontSize:20,fontWeight: 'bold'}}>20.{this.state.news.articles[19].title}</Text>
      <Text style = {{fontSize:20}}>{this.state.news.articles[19].description}</Text>
      <Image source={{uri:this.state.news.articles[19].urlToImage}} style={{padding: 150}}/>
</TouchableOpacity>
  </View>
  </ScrollView>
  );
}
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:5,

  },
});
