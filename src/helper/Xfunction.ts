import moment from "moment";

export const handleSetLocalStorage = (key: string, language: string) => {
  localStorage.setItem(key, language);
};

export const handleGetLocalStorage = (key: any) => {
  return localStorage.getItem(key);
};

export const formatMoney = (money: number) => {
  return Number(money).toLocaleString("vi-VN", { style: "currency", currency: "VND" });
};

export const formatDate = (date: Date) => {
  return moment(date).format("HH:mm, DD-MM-YYYY ")
}
