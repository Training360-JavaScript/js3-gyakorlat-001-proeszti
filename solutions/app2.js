const HU = {
    date(date) {
        return new Intl.DateTimeFormat('hu-HU').format(date);
    },
    currency(money) { return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(money) },
    list(arr) { return `${arr[0]}, ${arr[1]} és ${arr[2]}` },
};





export default HU
