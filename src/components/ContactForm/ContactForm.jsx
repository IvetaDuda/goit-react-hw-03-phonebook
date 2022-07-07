import React, { Component } from 'react';

import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputNameId = nanoid(4);
  inputNumberId = nanoid(4);

  hendelInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  hendelSubmit = event => {
    event.preventDefault();
    const addContact = {
      id: nanoid(12),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onSubmitForm(addContact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.hendelSubmit}>
        <Label htmlFor={this.inputNameId}>Name</Label>
        <Input
          id={this.inputNameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={this.hendelInputChange}
          required
        />
        <Label htmlFor={this.inputNumberId}>Number</Label>
        <Input
          id={this.inputNumberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={this.hendelInputChange}
          required
        />
        <Button type="submit">Add Contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
