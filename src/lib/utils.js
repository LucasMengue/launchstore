module.exports = {
  date(timestamp) {
    const date = new Date(timestamp);

    // yyyy
    const year = date.getUTCFullYear();

    // mm
    const month = `0${date.getUTCMonth() + 1}`.slice(-2); // 0 a 11 + 1 = 12

    // dd
    const day = `0${date.getUTCDate()}`.slice(-2);

    // return yyyy/mm/dd
    return {
      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`,
      format: `${day}/${month}/${year}`,
    };
  },
  formatPrice(price) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency", //1.000,00
      currency: "BRL", // R$
    }).format(price / 100); // 180,23 -> 18023 / 100 = 180.23
  },
};
