import { Alert } from 'react-native';
import { supabase } from '../Connection';

export async function signInWithEmail(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) Alert.alert(error.message);

  return supabase.auth.getSession().then(({ data: { session } }) => {
    return session?.access_token;
  });
}

export async function signUpWithEmail(email: string, password: string) {
  const {
    data: { session },
    error,
  } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) Alert.alert(error.message);
  if (!session) Alert.alert('Please check your inbox for email verification!');

  return supabase.auth.getSession().then(({ data: { session } }) => {
    return session?.access_token;
  });
}
