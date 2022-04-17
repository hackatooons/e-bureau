import axios from 'axios';

export const handleSignup = async (values, setHasSentOTP) => {
    //send verification email
    try {
        const res = await axios.post(`/api/signup/nodemailer`, { email: values.email })
        setState({ ...state, otp: res.data.data })
    } catch (error) {
        alert('An error occured')
        return false
    }
    setHasSentOTP(true)
    return true
}