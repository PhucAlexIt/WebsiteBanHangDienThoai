function isValidTelephone(telephone){
    return telephone.length>=8
}

function checkEmail(email){   
    return validateEmail(email)
}

function validateEmail(email) {
    const pattern = /^\w+@\w+(\.\w+)+$/
    return pattern.test(email)
}

function isValidRepate(data,repateData){
    return data!==repateData
}

