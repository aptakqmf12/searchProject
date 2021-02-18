import React from 'react';
export default class ContactCreate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    

    handleChange(e){
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState = {
            name: '',
            phone: ''
        }  
    }
    handleClick(key){
        const contact = {
            name: this.state.name,
            phone: this.state.phone,
        };

        this.props.onCreatge(contact);
        this.setState({
            name: '',
            phone : ''
        })
    }

    render(){
        return(
          <div>
              <h2>Create Contact</h2>
              <p>
                  <input type="text" name="name" placeholder="name" value={this.state.name}/>
                  <input type="text" name="phone" placeholder="phone" value={this.state.phone} />
              </p>
              <button onClick={this.handleClick}>Create</button>
          </div>  
        );
    }   
}

// ContactCreate.propsTypes = {
//     onCreate : React.PropsTypes.func
// };

// ContactCreate.defaultProps = {
//     onCreate: () =>  { console.error('onCreate not defined!')}
// }