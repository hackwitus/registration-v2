export const HANDLE_AUTHENTICATION_CALLBACK = 'HANDLE_AUTHENTICATION_CALLBACK';
export const USER_PROFILE_LOADED = 'USER_PROFILE_LOADED';

// ... addToDo and loadToDoList ...

export function handleAuthenticationCallback() {
  return {
    type: HANDLE_AUTHENTICATION_CALLBACK,
  };
}
