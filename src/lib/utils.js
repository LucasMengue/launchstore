module.exports = {
  date(timestamp) {
    const date = new Date(timestamp);

    // yyyy
    const year = date.getUTCFullYear();

    // mm
    const month = `0${date.getUTCMonth() + 1}`.slice(-2); // 0 a 11 + 1 = 12

    // dd
    const day = `0${date.getUTCDate()}`.slice(-2);

    // hours
    const hour = date.getHours();

    // minutes
    const minutes = date.getMinutes();

    // return yyyy/mm/dd
    return {
      day,
      month,
      year,
      hour,
      minutes,
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
  formatCpfCnpj(value) {
    value = value.replace(/\D/g, "");

    if (value.length > 14) value = value.slice(0, -1);

    // check if is cnpj - 11.222.333/0001-11
    if (value.length > 11) {
      value = value.replace(/(\d{2})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1/$2");
      value = value.replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      //cpf
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1-$2");
    }

    return value;
  },
  formatCep(value) {
    value = value.replace(/\D/g, "");

    if (value.length > 8) value = value.slice(0, -1);

    value = value.replace(/(\d{5})(\d)/, "$1-$2");

    return value;
  },
};
