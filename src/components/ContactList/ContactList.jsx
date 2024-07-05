import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from '../ContactListItem/ContactListItem.module.css';



export const ContactList = ({ filterContact, deleteContact }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(filterContact());
  }, [filterContact]);

  return (
    <ul className={css.ContactList}>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          filteredContact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filterContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;