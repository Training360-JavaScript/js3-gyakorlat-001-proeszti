'use strict';
const HU = {
    date(date) {
        return new Intl.DateTimeFormat('hu-HU').format(date)
    },
    currency(currency) { return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(currency) },
    list(list) { return new Intl.ListFormat('hu-HU', { style: 'long', type: 'conjunction' }).format(list) },
}







export default HU
