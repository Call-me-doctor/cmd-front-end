export const IsCellNumber = (value) => {
    const re = /^[2-9]{1}\d{10}$/;

    return re.test(value);
}

export const HowManyCommas = (value) => {
    if(!value){
        return 0;
    }
    const segments = value.split(',');
    if(segments.length <= 1){
        return 0;
    }

    return segments.length - 1;
}
