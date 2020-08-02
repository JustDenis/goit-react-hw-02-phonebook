import React from 'react';
import ContactListItem from '../ContactsListItem/ContactListItem';

function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDelete={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
}

export default ContactsList;
