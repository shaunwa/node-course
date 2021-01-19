export const getPropertyWithDefault = (propertyName, defaultValue, obj) => {
    return obj[propertyName] || defaultValue;
}

export const someOtherFunction = () => {
    return 3;
}