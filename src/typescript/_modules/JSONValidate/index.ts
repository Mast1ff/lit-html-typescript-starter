const JSONValidate = (data: string): boolean => {
    try {
        JSON.parse(data);
    } catch (e) {
        return false;
    }
    return true;
};

export {
    JSONValidate,
};
