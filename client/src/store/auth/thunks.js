import { signInWithGoogle } from "../../firebase/providers";
import { chekingCredentials, login} from "./authslice";

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(chekingCredentials())
        const result = await signInWithGoogle()
        dispatch(login(result))
    }
}