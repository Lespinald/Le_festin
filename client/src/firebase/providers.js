import { async, FirebaseError } from '@firebase/util';
import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth';
import { firebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();


export const signInWithGoogle = async() => {
    try{
        const result = await signInWithPopup(firebaseAuth,googleProvider)
        const {displayName,email,uid,photoURL} = result?.user;        
        const { creationTime } = result?.user?.metadata;
        return{
            displayName,
            email,
            uid,
            photoURL,
            creationTime
        }
    }catch (error){
        const errorMessage = error?.message
        return{
            errorMessage
        }
    }
}