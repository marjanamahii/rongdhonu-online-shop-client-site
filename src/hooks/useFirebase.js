import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, getIdToken } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))

    }

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                    .then(idToken => localStorage.setItem('idToken', idToken));
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth])

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }

    const saveGoogleUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://stormy-shelf-46683.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    // checking is admin or not
    // useEffect(() => {
    //     fetch(`https://stormy-shelf-46683.herokuapp.com/users/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setAdmin(data.admin))
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }, [user?.email])

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logout,
        saveGoogleUser
    }
}

export default useFirebase;