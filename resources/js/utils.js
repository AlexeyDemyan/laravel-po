export const formatDate = (date) => {
    if (date) {
        const dateFromString = new Date(date);

        return `${dateFromString.getDate()}/${dateFromString.getMonth() + 1
            }/${dateFromString.getFullYear()}`;
    } else {
        return null
    }
};

export const getOrderNumberWithYear = (entry) => {
    const createdYear = new Date(entry.created_at).getFullYear();
    return `${createdYear}-${entry.orderNumber}`
}
