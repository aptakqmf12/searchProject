import React from "react";
import ContactInfo from "./contactInfo";
import ContactDetail from "./contactDetail";
import ContactCreate from "./contactCreate";
import update from 'react-addons-update';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedKey : -1,
            keyword : '',
            contactData : [
                {
                    name : "Abet",
                    phone : '010-1111-1111'
                },
                {
                    name : "Betty",
                    phone : '010-2222-2222'
                },
                {
                    name : "David",
                    phone : '010-3333-3333'
                },
            ]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.handleCreate = this.handleCreate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange(e){
        this.setState({
            keyword: e.target.value
        })
    }
    handleClick(key){
        this.setState({
            selectedKey : key
        });
        console.log(key, 'is seleted');
    }

    handleCreate(contact){
        this.setState({
            contactData : update(this.state.contactData, {$push : [contact]})
        });
    }

    handleRemove(){
        this.setState({
            contactData : update(
                this.state.contactData, { $splice: [[this.state.selectedKey, 1]] }
            ),
            selectedKey: -1
        });
    }
    
    handleEdit(name, phone){
        this.setState({
            contactData : update(this.state.contactData, { [this.state.selectedKey] : {
                name : { $set : name},
                phone : { $set : phone},
             } })
        });
    }
    
  render() {
    const mapToComp = (data) => {
        data.sort();
        data = data.filter(
            (contact) => {
                return contact.name.toLowerCase().indexOf(this.state.keyword) > -1;
            }
        )
        return data.map( (contact, i) => {
            return (
                <ContactInfo contact={contact} key={i} onClick={ () => this.handleClick(i) }/>  
                //컴포넌트에는 onClick이 props로 전달되어 부모에 걸어줘야함
            );
        } )
    }

    return (
        <div>
            <h1>Contacts1</h1>
            <input type="text"
                name="keyword"
                placeholder="Search"
                value={this.state.keyword}
                onChange={this.handleEdit('기모리', '01080095439')}
            />

            <div>{mapToComp(this.state.contactData)}</div>
            <ContactDetail isSelected={this.state.selectedKey != -1} contact={this.state.contactData[this.state.selectedKey]} />
            <ContactCreate onCreate={this.handleCreate} />
        </div>
    );

  }
}

export default Contact;