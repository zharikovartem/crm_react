export const requiredField = value => {
    if (value) return undefined;

    return 'Поле обязательно для заплнения';
}

export const maxLengthCreator = (maxLength) => (value) =>{
    if (value && value.length > maxLength ) return 'Максимальное количесво символов: '+maxLength;
    return undefined;
}

// export const maxLength = value => {
//     if (value && value.length > 13 ) return 'Максимальное количесво символов 13';
    
//     return undefined;
// }