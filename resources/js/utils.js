export const formatDate = (date) => {
    const dateFromString = new Date(date);

    return `${dateFromString.getDate()}/${
        dateFromString.getMonth() + 1
    }/${dateFromString.getFullYear()}`;
};
