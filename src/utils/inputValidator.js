export const validateEmail = (email) => {
    
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());    

}

export const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(String(password).toLowerCase());    
}

export const validateName = (name) => {
    const re = /^[a-zA-Z ]+$/;
    return re.test(String(name).toLowerCase());    
}

export const validatePhoneNumber = (phoneNumber) => {
    const re = /^\d{10}$/;
    return re.test(String(phoneNumber).toLowerCase());    
}

export const validateZipCode = (zipCode) => {
    const re = /^\d{5}(-\d{4})?$/;
    return re.test(String(zipCode).toLowerCase());
}



export const validateNotEmpty = (value) => {
    return value && value.trim() !== '';
}

export const validateNumberInRange = (number, min, max) => {
    return number >= min && number <= max;
}

export const validateURL = (url) => {
    const re = /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w\-.]*)*\/?$/;
    return re.test(String(url).toLowerCase());    
}

export const validateDate = (date) => {
    return !isNaN(Date.parse(date));
}


