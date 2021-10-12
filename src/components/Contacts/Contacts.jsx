import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as BinIcon } from "../../icons/bin.svg";
import Button from "../../_share/Button/Button";
import { ContactList, Item, Title } from "./Contacts.styled";
import {
  fetchContacts,
  removeContact,
  getFilteredContacts,
} from "../../redux/contacts/";

export function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getFilteredContacts);
  const onDeleteContacts = (id) => dispatch(removeContact(id));

  return (
    <ContactList>
      <Title>Contacts</Title>
      {contacts.map(({ name, id, number }) => (
        <Item key={id} id={id}>
          {name}: {number}
          <Button
            type="button"
            ariaLabel="Delete contact"
            onDeleteContacts={() => onDeleteContacts(id)}
          >
            <BinIcon width="30" height="30" fill="red" />
          </Button>
        </Item>
      ))}
    </ContactList>
  );
}
