import React, {Component} from 'react';
import { View, Text, StyleSheet , StatusBar } from 'react-native';
import Button from "../Button";

// presentional component 
// 데이터를 보여주는 것을 관리 // 인덱스js로 넘어감 

function formatTime(time) {
    var minutes = Math.floor(time / 60);
    time -= minutes * 60;
     var seconds = parseInt(time % 60, 10);
     return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10
      ? `0${seconds}`
      : seconds}`;
     return;
  }

class Timer extends Component{

    componentWillReceiveProps(nextProps){
        const currentProps = this.props;
        console.log(`The current props ar : ${currentProps.isPlaying} and the new ones are ${nextProps.isPlaying} ` )
        if(!currentProps.isPlaying && nextProps.isPlaying){
            console.log("should start")
            const timerInterval = setInterval(() => {
                currentProps.addSecond()
            }, 1000);
            this.setState({
                timerInterval
            })
            // start interval
        }else if(currentProps.isPlaying && !nextProps.isPlaying){
            // stop interval ( clear )
            console.log("should stop")
            clearInterval(this.state.timerInterval);
        }
        
    }

    render(){
        console.log(this.props);
        // props를 갖고있는 presentional 컴포넌트 
        const{ 
            isPlaying, 
            elapsedTime, timeDuration,startTimer, restartTimer, addSecond } = this.props;
        return(
        <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
             <View style={styles.upper}>
                 <Text style={styles.time}>{formatTime(timeDuration - elapsedTime )}</Text>
             </View>
             <View style={styles.lower}>
                { !isPlaying && (
                    <Button iconName="play-circle" onPress={startTimer} /> 
                    )
                }
                { isPlaying && (
                    <Button iconName="stop-circle" onPress={restartTimer} />
                    )
                }
             </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#CE0B24"
    },
    upper:{
        flex:2,
        justifyContent: 'center',
        alignItems:"center"
    },
    lower:{
        flex:1,
        justifyContent: 'center',
        alignItems:"center"
    },
    time:{
        color:"white",
        fontSize:120,
        fontWeight:"100"
    }

})

export default Timer;