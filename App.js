import React, { Component } from "react";
import { View, Text, Image, Button} from "react-native";
import tambah from './img/tambah.png';
import list from './img/list.png';
import kotak from './img/kotak.png';
import vid from './img/reels2.png';
import live from './img/live2.png';
import tag from './img/tag.png';
import account from './img/angg.jpg';
import aku from './img/nggi.jpg';
import aku2 from './img/nggii.jpg';
import foto1 from './img/ang.jpg';
import foto2 from './img/angg.jpg';
import foto3 from './img/anggi.jpg';
import home from './img/home.png';
import search from './img/search.png';
import reels from './img/reels.png';
import shop from './img/shop.png';
import { style } from "./style";

const App = () => {
  return (
    <View style={style.container}>
      <View style={{flex:1, backgroundColor:'white', flexDirection:'row'}}>
        <View style={{flex:6, backgroundColor:'white',
          justifyContent:'center'}}>
            <Text style={{fontSize:20}}>anggimaulidita</Text>
        </View>
        <TampilanGambar simbol={tambah} />
        <TampilanGambar simbol={list} />
      </View>
      <View style={{flex:2, backgroundColor:'white',
        flexDirection:'row'}}>
          <View style={style.gambarProfil}>
            <Image source={account} style={{width:80,
              height:80, borderRadius:80/2}} />
      </View>
          <CardProfile angka="789" keterangan="Postingan" />
          <CardProfile angka="3627" keterangan="Pengikut" />
          <CardProfile angka="1067" keterangan="Mengikuti" />
      </View>
      <View style={{flex:1, backgroundColor:'white'}}>
        <Text style={{fontSize:17}}>ang</Text>
        <Text style={style.textBio}>Hello friend!</Text>
      </View>
      <View style={{flex:1, backgroundColor:'white',
        flexDirection:'row'}}>
          <View style={{flex:7, backgroundColor:'white'}}>
            <Button title="Edit Profil" ></Button>
          </View>
          <View style={{flex:1, backgroundColor:'white'}}>
            <Button title="v" style={{borderRadius:5}} ></Button>
          </View>
      </View>
      <View style={{flex:2, backgroundColor:'white', flexDirection:'row'}}>
        <Sorotan gambar={aku} keteranganSorotan="myholiyey" />
        <Sorotan gambar={aku2} keteranganSorotan="myselflove" />
        <Sorotan gambar={aku} keteranganSorotan="myfriends" />
        <Sorotan gambar={aku2} keteranganSorotan="mylove" />
      </View>
        <View style={{flex:1, backgroundColor:'white', flexDirection:'row'}}>
          <TampilanGambar simbol={kotak} />
          <TampilanGambar simbol={vid} />
          <TampilanGambar simbol={live} /> 
          <TampilanGambar simbol={tag} /> 
      </View>
      <View style={{flex:1, backgroundColor:'white', flexDirection:'row'}}>
        <Foto feed={foto1} />
        <Foto feed={foto2} />
        <Foto feed={foto3} />
      </View>
      <View style={{flex:1, backgroundColor:'white', flexDirection:"row"}}>
        <Navigasi nav={home} />
        <Navigasi nav={search} />
        <Navigasi nav={reels} />
        <Navigasi nav={shop} />
        <View style={style.viewGambar}>
            <Image source={account} style={{width:20,
              height:20, borderRadius:80/2}} />
        </View>
      </View>
    </View>     
  )
}

const TampilanGambar = (props) => {
  return (
    <View style={style.viewGambar}>
      <Image source={props.simbol} style={style.gambar} />
    </View>
  )
}

const CardProfile = (props) => {
  return (
    <View style={style.viewGambar}>
      <Text style={style.textProfil}>{props.angka}</Text>
      <Text style={style.keteranganProfil}>
        {props.keterangan}</Text>
    </View>
  )
}

const Sorotan = (props) => {
  return (
    <View style={style.viewGambar}>
      <Image source={props.gambar} style=
      {style.gambarProfil} />
      <Text>{props.keteranganSorotan}</Text>
    </View>
  )
}

const Foto = (props) => {
  return (
    <View style={style.viewRow}>
      <Image source={props.feed} style={style.gridGambar} />
    </View>
  )
}

const Navigasi = (props) => {
  return (
    <View style={style.viewGambar}>
      <Image source={props.nav} style={style.gambar} />
    </View>
  )
}
export default App;