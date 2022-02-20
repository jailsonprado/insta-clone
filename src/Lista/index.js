import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList, Switch, Image, TouchableOpacity} from 'react-native';

class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data
        }
        this.mostraLikes = this.mostraLikes.bind(this)
        this.like = this.like.bind(this)
        this.carregaIcone = this.carregaIcone.bind(this)
    }

    carregaIcone(likeada) {
        return likeada ? require('../img/likeada.png') : require('../img/like.png') 
    }

    like(){
        let feed = this.state.feed;

        if(feed.likeada === true){
            this.setState({
                feed:{
                    ...feed,
                    likeada: false,
                    likers: feed.likers -1
                }
            })
        }else{
            this.setState({
                feed:{
                    ...feed,
                    likeada: true,
                    likers: feed.likers +1
                }
            })
        }
    }

    mostraLikes(likers){
        let feed = this.state.feed;

        if(feed.likers <= 0){
            return;
        }
        return (
            <Text style={styles.likes}>
                  {feed.likers}{feed.likers > 1 ? " curtidas" : " curtida"}
            </Text>
          
        )
    }

    render() {
        return (
            <View style={styles.areaFeed}>
                <View style={styles.viewPerfil}>
                    <Image 
                        source={{uri: this.state.feed.imgperfil}}
                        style={styles.fotoPerfil}
                    />
                    <Text style={styles.nomeUsario}>{this.state.feed.nome}</Text>
                </View>

                <Image 
                    resizeMode="cover"
                    style={styles.fotoPublicada} 
                    source={{uri: this.state.feed.imgPublicacao}}
                />

                <View style={styles.areBtn}>
                    <TouchableOpacity onPress={this.like}>
                        <Image 
                            source={this.carregaIcone(this.state.feed.likeada)}
                            style={styles.iconeLike}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSend}>
                        <Image 
                            source={require('../img/send.png')}
                            style={styles.iconeLike}
                        />
                    </TouchableOpacity>
                </View>
                {this.mostraLikes(this.state.feed.likers)}

                <View style={styles.viewRodape}>
                    <Text style={styles.nomeRodape}>
                        {this.state.feed.nome}
                    </Text>
                    <Text style={styles.descricao}>
                        {this.state.feed.descricao}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    areaFeed:{

    },
    viewPerfil:{
        flexDirection:'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,
    },
    fotoPerfil:{
        width: 40,
        height: 40,
        borderRadius: 25,
    },
    nomeUsario:{
        fontSize: 22,
        textAlign: 'left',
        color: '#000',
        paddingLeft: 5
    },
    fotoPublicada:{
        flex: 1,
        height: 400,
        alignItems: 'center',
    },

    areBtn:{
        flexDirection: 'row',
        padding: 5,
    },
    iconeLike:{
        width: 33,
        height: 33,
    },
    btnSend:{
        paddingLeft: 5,
    },
    viewRodape:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    descricao:{
        paddingLeft: 5,
        fontSize: 15,
        color: '#000'
    },
    nomeRodape:{
        fontSize:18,
        fontWeight: 'bold',
        color: '#000',
        paddingLeft: 5
    },
    likes:{
        fontWeight: 'bold',
        marginLeft: 5,
        color: '#000'
    }
})

export default Lista;