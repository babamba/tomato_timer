import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreator as tomatoActions } from "../../reducer";
import Timer from './presenter';


//state에서 데이터를 가져온것을 관리
// 컴포넌트의 현재 state 를 불러옴. ( provider store 에서 )
function mapStateToProps(state){
    const { isPlaying, elapsedTime, timeDuration } = state;
    return {
        isPlaying, 
        elapsedTime, 
        timeDuration,
    }
}

// dispatch는 액션을 리듀서로 보내는 function.
// dispatch와 action을 묶자
function mapDispatchToProps(dispatch){
    return {
        startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
        restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
        addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);