/*
*
@author tri.tran on 2/15/19
*
*/

export function getStrings() {
    //multi language
    return strings.en
}

const strings = {
    en: {
        welcome: 'Welcome to WE Services',
        email: 'Email',
        passWord: 'Password',
        login: 'Sign In',
        descriptionLoginForm: 'By signing up, I agree to The Coffee Club ',
        and: ' and ',
        rememberMe: 'Remember me',
        forgotPass: 'Forgot Password',
        cancel: 'Cancel',
        resetPass: 'Reset Password',
        termConditions: ' Terms & Conditions ',
        privacy: ' Community Guidelines Privacy Policy ',
        firstName: 'First Name',
        lastName: 'Last Name',
        dateOfBirth: 'Date of Birth',
        submit: 'Submit',
        aboutMe: 'About Me',
        interest: 'I’m interested in',
        //noticed dialog
        noticedDialogButton: 'Ok',
        error: 'Error',
        noInternetConnection: 'No internet connection',
        timeOutError: 'Request time out',
        new: 'New',
        pending: 'Pending',
        accepted: 'Accepted',
        inProgress: 'In-Progress & Pending Payment',
        appointments: 'Appointments',
        overView: 'Overview',
        nextAppointment: 'Next Appointment',
        // setting
        hello: "Hello,",
        profile: "Profile",
        appointmentHistory: "Appointment History",
        logout: "Logout",
        phoneNumber: "Phone Number",
        description: "Description",
        changePassword: "Change Password",
        forgetPassword: "Forget Password",
        changeAvatar: "Change Avatar",
        changeSplashImage: "Change Splash Image",
        staffName: "Staff Name",
        haveError: "Something went wrong. Please try again.",
        currentPassword: "Current Password",
        newPassword: "New Password",
        confirmPassword: "Confirm Password",
        describeProductScreen: "You're only 22 points off reaching Gold Status! \nGet there quicker with the latest promotions we have gathered for you below. \nThank you for being a Coffee Club VIP!",
        contenSpecialOfferScreen: "The Coffee Club always brings you new, special, attractive and exciting promotions, from Monthly Promotions, Cheap Prices to daily meals that you can't miss.",
        registerDate: (time) => {return  "Member since " + time},
        remindScanQRCode: (name) => {return "Hi" + name + ", don’t forget to scan your unique QR code to earn points when you shop at The Coffee Club"},
        pointVoucher: (point) => {return point + ' points each'},
        balanceText: "Current Balance Points",
        available: "available"
    }
}
