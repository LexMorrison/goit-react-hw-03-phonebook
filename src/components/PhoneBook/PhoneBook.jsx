import React from 'react';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import { Notification } from './Notification/Notification';
import { Filter } from './FilterByName/FilterByName';
import { Container } from './PhoneBook.styled';

class PhoneBook extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const ParsedContacts = JSON.parse(contacts);
    if (ParsedContacts) {
      this.setState({ contacts: ParsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  FilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  formSubmit = data => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts! `);
      return;
    }
    this.setState({ contacts: [...this.state.contacts, data] });
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const FileredContacts = this.FilteredContacts();
    return (
      <Container>
        <Form onSubmit={this.formSubmit} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} selected={this.handleFilter} />
        {this.state.contacts.length !== 0 ? (
          <ContactsList
            info={FileredContacts}
            deleteCont={this.deleteContact}
          />
        ) : (
          <Notification message="There is no any contacts" />
        )}
      </Container>
    );
  }
}

export default PhoneBook;
