import React from "react";


class ContactInfo extends React.Component{
    render(){
        return(
        <div>
            <div  onClick={this.props.onClick}>
                {this.props.contact.name}
                
            </div>
        </div>
        )
    }
}


export default ContactInfo;


