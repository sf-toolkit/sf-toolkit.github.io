import { contacts } from 'data/contacts';
export function findContacts(searchKey) {
  if (searchKey.length === 0) return [];
  const results = contacts.filter(item => item.Name.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1);
  return results;
}