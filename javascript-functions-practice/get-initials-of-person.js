/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  return (person.firstName.charAt(0).toUpperCase()) + (person.lastName.charAt(0).toUpperCase());
}
