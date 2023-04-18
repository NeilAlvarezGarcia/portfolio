import { labels } from "@/utils/interfaces/labelsFields";

export const validators = {
  [labels.name]: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
  [labels.email]: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  [labels.description]: /^[a-zA-ZÀ-ÿ\s0-9`,.'$%@#-*]{1,1500}$/,
};

export const validateErrors = {
  [labels.name]: "Name is too long. At least 50 characters",
  [labels.email]: "Email not allowed",
  [labels.description]: "Description is too long. At least 1500 characters",
};

export const validate = (value: string, key: labels) => validators[key].test(value);
