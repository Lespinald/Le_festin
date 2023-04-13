import { async, FirebaseError } from '@firebase/util';
import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth';
import { firebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();


export const signInWithGoogle = async() => {
    try{
        const result = await signInWithPopup(firebaseAuth,googleProvider)
        const {displayName,email,uid} = result?.user;        
        return{
            displayName,
            email,
            uid
        }
    }catch (error){
        const errorMessage = error?.message
        return{
            errorMessage
        }
    }
}