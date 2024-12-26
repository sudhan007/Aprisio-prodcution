import { model, Schema } from "mongoose";

const FormSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: [true, "Please enter mobile number"],
      unique: true,
      validate: {
        validator: function (v: string) {
          return /^[0-9]{10,15}$/.test(v); 
        },
        message: (props: { value: any; }) => `${props.value} is not a valid mobile number!`,
      },
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Please enter Email"],
      unique: true,
      lowercase: true, 
      match: [/\S+@\S+\.\S+/, "Please enter a valid email address"], 
    },
  },
  { timestamps: true }
);

export const FormModel = model("Form", FormSchema);
