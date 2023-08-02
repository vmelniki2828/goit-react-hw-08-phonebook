export const filterSelector = state => state.filter;

export const contactsSelector = state => state.contacts.items;

export const isLoadingSelector = state => state.contacts.isLoading;

export const isLoggedInSelector = state => state.auth.isLoggedIn;

export const isRefreshingUserSelector = state => state.auth.isRefreshingUser;


export const getUserSelector = state => state.auth.user;




export const filteredContactsSelector = state => {
  return state.contacts.items.filter(contact => {
    return contact.name.toLowerCase().includes(state.filter.toLowerCase());
  });
};