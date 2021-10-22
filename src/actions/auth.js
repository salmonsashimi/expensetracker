import { getAuth, signInWithPopup, signOut } from '@firebase/auth';
import { googleAuthProvider } from '../firebase/firebase'


const auth = getAuth();

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        return signInWithPopup(auth, googleAuthProvider);
    }
}


export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return signOut(auth);
    }
}