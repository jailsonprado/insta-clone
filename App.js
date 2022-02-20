import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList, Switch, Image, TouchableOpacity} from 'react-native';
// import {Picker} from '@react-native-picker/picker';
// import Slider from '@react-native-community/slider';
import Lista from './src/Lista'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: '1', 
          nome: 'Lucas Silva', 
          descricao: 'Mais um dia de muitos bugs :)', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
          likeada: true, 
          likers: 600
         },
        {
          id: '2', 
          nome: 'Matheus', 
          descricao: 'Isso sim é ser raiz!!!!!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          likeada: true, 
          likers: 45
        },
        {
          id: '3', 
          nome: 'Jose Augusto', 
          descricao: 'Bora trabalhar Haha', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          likeada: false, 
          likers: 1
        },
        {
          id: '4', 
          nome: 'Gustavo Henrique', 
          descricao: 'Isso sim que é TI!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
          likeada: false, 
          likers: 150
        },
        {
          id: '5', 
          nome: 'Guilherme', 
          descricao: 'Boa tarde galera do insta...', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false, 
          likers: 32
        }
      ]
     };
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity>
            <Image 
            source={require('./src/img/logo.png')} 
            style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image 
            source={require('./src/img/send.png')} 
            style={styles.send}
            />
          </TouchableOpacity>
        </View>

        <FlatList 
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={this.state.feed}
          renderItem={({item}) => <Lista data={item} /> }
        />
       
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    height: 55, 
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
    padding: 5,

    borderBottomWidth: 0.1,
    shadowColor: '#000',
    elevation: 1,
  },
  logo: {

  },
  send: {
    width:23,
    height: 23
  }
});

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       valor: 50
//     };
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//        <Slider 
//         minimumValue={0}
//         maximumValue={100}
//         onValueChange={(valueSelect) => this.setState({valor: valueSelect}) }
//         value={this.state.valor}
//         minimumTrackTintColor='#00FF00'
//         maximumTrackTintColor='#FF0000'
//        />
//        <Text style={{textAlign: 'center', fontSize: 30}}>
//           {this.state.valor.toFixed(0)}
//        </Text>
//       </View>
//     );
//   }
// }
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pizza: 0,
//       pizzas: [
//         {key: 1, nome: 'Strogonoff', valor: 35.9},
//         {key: 2, nome: 'Calabresa', valor: 59},
//         {key: 3, nome: 'Qautro queijos', valor: 37},
//         {key: 4, nome: 'Brigadeiro', valor: 25.7},
//         {key: 5, nome: 'Bauru', valor: 70},
//       ],
//     };
//   }

//   render() {
//     let pizzasItem = this.state.pizzas.map((v, k) => {
//       return <Picker.Item key={k} value={k} label={v.nome} />;
//     });

//     return (
//       <View style={styles.container}>
//         <Text style={styles.logo}>Menu pizzas</Text>

//         <Picker
//           selectedValue={this.state.pizza}
//           onValueChange={(itemValue, itemIndex) =>
//             this.setState({pizza: itemValue})
//           }>
//           {pizzasItem}
//         </Picker>

//         <Text style={styles.pizzas}>Voce escolheu: {this.state.pizzas[this.state.pizza].nome} </Text>
//         <Text style={styles.pizzas}>R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//   },
//   logo: {
//     textAlign: 'center',
//     fontSize: 28,
//     fontWeight: 'bold',
//   },
//   pizzas: {
//     marginTop: 15,
//     fontSize: 25,
//     textAlign: 'center',
//   },
// });

export default App;

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       feed: [
//         {id:'1', nome: 'Jailson', idade: 24, email: 'jailson@teste.com'},
//         {id:'2', nome: 'Joao', idade: 35, email: 'joao@teste.com'},
//         {id:'3', nome: 'Henrique', idade: 44, email: 'henrique@teste.com'},
//         {id:'4', nome: 'Paulo', idade: 15, email: 'paulo@teste.com'},
//         {id:'5', nome: 'jose', idade: 25, email: 'jose@teste.com'},
//         {id:'6', nome: 'Maria', idade: 55, email: 'maria@teste.com'},
//         {id:'7', nome: 'Jorge', idade: 51, email: 'jorge@teste.com'},
//       ]
//     }
//   }

//   render(){
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={this.state.feed}
//           keyExtractor={(item) => item.id}
//           renderItem={ ({item}) => <Pessoas data={item} />  }
//         />
//       </View>
//     )
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// })

// export default App;
