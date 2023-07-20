import React from 'react';
import PropTypes from 'prop-types';
import { ListOfPpl, DeleteButt } from './ContatsList.styled';

class ContactsList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.info.map(contact => {
            return (
              <ListOfPpl key={contact.id}>
                <p>
                  {contact.name}: {contact.number}
                </p>
                <DeleteButt
                  type="button"
                  onClick={() => this.props.deleteCont(contact.id)}
                >
                  Delete
                </DeleteButt>
              </ListOfPpl>
            );
          })}
        </ul>
      </div>
    );
  }
}

ContactsList.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteCont: PropTypes.func.isRequired,
};

export default ContactsList;
