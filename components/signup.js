import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View,Modal,TouchableHighlight,Alert,Image} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, CheckBox, Button, SocialIcon } from 'react-native-elements';


export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
            modalVisible: false
        }
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }

    togglecheck = () => {
        this.setState({
            checked: !this.state.checked
        })
    }


    render() {

        return (
            
            <View style={styles.main}>
                
                <View>
                    <Input
                        placeholder='EMAIL'
                    />
                    <Input
                        placeholder='PASSWORD'
                    />
                    <Input
                        placeholder='REPEAT PASSWORD'
                    />
                </View>
                <View style={styles.checklabel}>
                    <CheckBox
                        style={styles.size}
                        checked={this.state.checked}
                        title={
                            <Text style={styles.size}>I agree with the <Text style={{fontWeight:'bold', fontSize:14.5}}>Terms and Conditions</Text></Text>
                        }
                        onPress={this.togglecheck}

                    />
                </View>
                <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
              this.setState({modalVisible:false})
           
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.textStyle}>Select Account Type</Text>
              <View style={styles.containermodel}>
          <View style={{   borderColor: '#800080', borderRadius: 10,
        padding: 10,

    
        elevation: 2,
                borderWidth: 1,height:120}}>
      <View style={styles.openButton} >    
                          <Image
               source={require('../assets/user.png')}
           
             
  />     
      <TouchableHighlight
          
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
   
                <Text style={styles.textStyletext}>Individual</Text>
              </TouchableHighlight>
              </View>
              </View>
                <View style={{   borderColor: '#800080', borderRadius: 10,
        padding: 10,
marginLeft:20,
    
        elevation: 2,
                borderWidth: 1,height:120}}>
               <View style={styles.openButtonbuss} >    
                          <Image
               source={require('../assets/business.png')}
                
             
  />     
      <TouchableHighlight
          
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
   
                <Text style={styles.textStyletext}>Business</Text>
              </TouchableHighlight>
              </View>
              </View>
             
                </View>  
                 <View style={styles.container}>
<TouchableOpacity
                        style={styles.buttonpro}
                        onPress={this.onPress}
                        >
                        <Text style={{color:"white"}}>Proceed</Text>
                    </TouchableOpacity>
                </View>   
              </View>
     
    </View>
             
         
         
        </Modal>

      
        </View>

                <View style={styles.buttonbox}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.setModalVisible(true);
                          }}
                        
                        >
                        <Text style={{color:"white"}}>Continue</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:"15%" }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    <View>
                        <Text style={{ width: '100%', textAlign: 'center' }}>Sign Up With</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                </View>
                <View style={styles.social}>
                    <SocialIcon
                        raised={true}
                        type='facebook'
                    />
                    <SocialIcon
                        raised={true}
                        type='google'
                    />
                    <SocialIcon
                        raised={true}
                        type='linkedin'
                    />
                    <SocialIcon
                        raised={true}
                        type='twitter'
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        marginTop:'5%',
        paddingHorizontal:'9%',
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    checklabel: {
        marginTop: '5%'
    },
    containermodel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
     
    tm: {
        fontWeight: 'bold'
    },
    size: {
        fontSize: 15
    },
    buttonbox: {
        justifyContent:'center',
        alignItems:'center',
        marginTop: '10%'
    },
    button:{    
        alignItems: "center",
        backgroundColor: "#c70039",
        padding: 10,
        width:'60%',
        borderRadius:30
    },
    social: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: '12%'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
     
      },
      modalView: {
        marginBottom:4,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
height:300,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "white",
       
       
      },
       openButtonbuss: {
        backgroundColor: "white",
       
       
      },
      textStyle: {
        marginTop:0,
        color: "black",
        fontWeight: "bold",
        fontSize:18,
        textAlign: "center",
  marginBottom:10,
      },
       textStyletext: {
        marginTop:10,
        color: "black",
        fontWeight: "bold",
     
        textAlign: "center",
  marginBottom:10,
      },
       container:{
     
        
   
        justifyContent:'center',
        alignItems:'center'
    },
        buttonpro:{    
        alignItems: "center",
        textAlign:"center"
,        backgroundColor: "#800000",
        paddingHorizontal: 40,
        paddingTop:8,
     paddingBottom:8,
        borderRadius:10,
        marginTop:'8%'
    },
    

})