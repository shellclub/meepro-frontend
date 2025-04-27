export class CommonHelper {
  static formatPrice(price: number): string {
    return new Intl.NumberFormat("en-TH", {
      style: "currency",
      currency: "THB",
    }).format(price);
  }
  static formatNumber(price: number): string {
    return new Intl.NumberFormat("en-TH", {}).format(price);
  }
  static formatNumberBath(price: number): string {
    return `${new Intl.NumberFormat("en-TH", {}).format(price)} บาท`;
  }
  static filterItems = (items: string[], query: string): string[] => {
    if (!query) return items;
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  };

  static formatThaiDate = (isoDate: string): string => {
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Bangkok",
    }).format(date);
  };
}
