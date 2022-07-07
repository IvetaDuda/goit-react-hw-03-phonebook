import React, { Component } from 'react';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

import { Container, Title, SubTitle } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHendel = data => {
    const contactNames = this.state.contacts.map(contact => contact.name);

    if (contactNames.includes(data.name)) {
      alert(`${data.name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [data, ...contacts],
      }));
    }
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  filterContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filterContact = this.filterContact();
    return (
      <>
        <Container>
          <Title>Phonebook</Title>
          <ContactForm onSubmitForm={this.formSubmitHendel} />
          <SubTitle>Contacts</SubTitle>
          <Filter onFilter={this.changeFilter} />
          <ContactList
            contacts={filterContact}
            onDelete={this.deleteContacts}
          />
        </Container>
      </>
    );
  }
}
export default App;
