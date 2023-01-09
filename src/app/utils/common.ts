export class UtilsCommon {
  convertFormatNumber(inputNumber: number) {
    return new Intl.NumberFormat().format(inputNumber);
  }
  convertFormatCurrency(inputNumber: number) {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
    }).format(inputNumber);
  }
}
