export interface CurrencyRates {
  motd: string;
  success: string;
  base: string;
  date: string;
  rates: {
    EUR: number;
    USD: number;
  };
}
