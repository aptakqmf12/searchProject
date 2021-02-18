import React from "react";

class Child extends React.Component{

    //state 초기값 설정과 바인딩?을 위한 영역
    constructor(props){
        super(props);
        this.state = {
            name : 'plese Click'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    //함수영역 주로 setState를 이용해서 state값을 바꾸는 함수
    handleChange(data){
        let txt = ['초콜렛', '바나나', '딸기'];
        
        this.setState({
            name : txt[Math.floor(Math.random() * 3 )]
        });
    }

    render(){
        return(
            //태그사이에 {}형식으로 props나 state를 렌더하고, onClick등 이벤트에 함수를 호출
            <div>
                <h1>{this.props.name}</h1>
                <div>{this.props.children}</div>
                <div>{this.state.name}</div>
                <button onClick={this.handleChange}>click!</button>

                
            </div>
        );
    }
}
export default  Child;