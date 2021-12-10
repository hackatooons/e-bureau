import bcrypt from 'bcryptjs'
import validator from 'validator';
import axios from 'axios';
import { passwordValidator } from '../../utils/passwordValidator';


export const handleSignup = async (state)=> {
    //check for all fields
    if(!(state && state?.name && state?.email && state?.mobile && state?.password && state?.confirmPassword)) {
        alert('All fields are required')
        return false
    }
    //check if password and confirmPassword equals or not
    if(state.password !== state.confirmPassword){
        alert('Password and Confirm Password not matched')
        return false
    }
    //isEmail?
    if(!validator.isEmail(state.email)){
        alert('Invalid email')
        return false
    }
    //isMobilePhone?
    if(!validator.isMobilePhone(state.mobile)){
        alert('Invalid mobile number')
        return false
    }
    //validate password
    if(!passwordValidator(state.password)){
        alert('Invalid password')
        return false
    }
    //save data to local storage and send email and mobile otp for verification
    var mobileOtp
    try {
        const res = await axios.post(`/api/otpVerification/twillio`,{mobile: state.mobile})
        mobileOtp = res.data.data
    } catch (error) {
        alert('An error occured')
        return false
    }
    var emailOtp
    try {
        const res = await axios.post(`/api/otpVerification/nodemailer`,{email: state.email})
        emailOtp = res.data.data
    } catch (error) {
        alert('An error occured')
        return false
    }
    //hash Password
    const hashPassword = await bcrypt.hash(state.password,10)
    const data = {
        name: state?.name,
        email: state?.email,
        mobile: state?.mobile,
        password: hashPassword,
        mobileOtp,
        emailOtp,
    }
    localStorage.setItem('signup',JSON.stringify(data))
    return true
}