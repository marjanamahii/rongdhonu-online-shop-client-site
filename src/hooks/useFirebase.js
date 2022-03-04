// import { useState, useEffect } from 'react';
// import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, getIdToken } from "firebase/auth";
// import initializeAuthentication from '../Firebase/firebase.init';

// initializeAuthentication();

// const useFirebase = () => {
//     const [user, setUser] = useState({});
//     const [isLoading, setIsLoading] = useState(true);

//     // const [admin, setAdmin] = useState(false);

//     const auth = getAuth();

//     const signInUsingGoogle = () => {
//         setIsLoading(true);
//         const googleProvider = new GoogleAuthProvider();

//         return signInWithPopup(auth, googleProvider)
//             .finally(() => setIsLoading(false))

//     }

//     // observe whether user auth state changed or not
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 getIdToken(user)
//                     .then(idToken => localStorage.setItem('idToken', idToken));
//                 setUser(user);
//             }
//             else {
//                 setUser({});
//             }
//             setIsLoading(false);
//         });
//         return () => unsubscribe;
//     }, [auth])

//     const logout = () => {
//         setIsLoading(true);
//         signOut(auth)
//             .then(() => {
//                 setUser({})
//             })
//             .finally(() => setIsLoading(false))
//     }

//     const saveGoogleUser = (email, displayName) => {
//         const user = { email, displayName };
//         fetch('https://stormy-shelf-46683.herokuapp.com/users', {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(user)
//         })
//             .then()
//     }

//     // checking is admin or not
//     // useEffect(() => {
//     //     fetch(`https://stormy-shelf-46683.herokuapp.com/users/${user?.email}`)
//     //         .then(res => res.json())
//     //         .then(data => setAdmin(data.admin))
//     //         .catch(err => {
//     //             console.log(err);
//     //         })
//     // }, [user?.email])

//     return {
//         user,
//         isLoading,
//         signInUsingGoogle,
//         logout,
//         saveGoogleUser
//     }
// }

// export default useFirebase;


import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();


// // initialize firebase app
// initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, navigate, handleCloser) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                handleCloser();
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                navigate('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, navigate, handleClosel) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
                handleClosel();
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    useEffect(() => {
        fetch(`http://localhost:7000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
    // https://agile-atoll-48938.herokuapp.com
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:7000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
    }
}

export default useFirebase;