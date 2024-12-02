import * as yup from "yup";

export const bookingSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Z\s-]+$/,
      "Only alphabets, spaces, and hyphens are allowed"
    )
    .max(50, "Maximum 50 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{11}$/, "Phone number must be 11 digits")
    .required("Phone number is required"),
  adults: yup
    .number()
    .min(1, "At least 1 adult is required")
    .max(9, "Maximum 9 adults")
    .required("Number of adults is required"),
  children: yup.number().min(0).max(9).notRequired(),
  paymentMethod: yup
    .string()
    .oneOf(["Visa", "MasterCard"])
    .required("Payment method is required"),
});
