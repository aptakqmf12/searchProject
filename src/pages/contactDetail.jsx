import React from "react";


class ContactDetail extends React.Component{
    render(){

        const detailes = (
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        );
        const blank = (<div>Not Selected</div>);

        return(
        <div>
            <div>
                {this.props.isSelected ? detailes : blank}
            </div>
        </div>
        )
    }
}

ContactDetail.defaultProps = {
    contact : {
        name : '',
        phone : ''
    }
}

export default ContactDetail;


