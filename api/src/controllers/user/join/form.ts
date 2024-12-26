import { Elysia, t } from "elysia";
import { FormModel } from "../../../models/user/form"; 

export const FormController = new Elysia({
  prefix: "/form",
})
.post(
    "/submit",
    async ({ body, set }) => {
      const { name, email, mobile, address } = body;
      try {
        // Create a new form document
        const newForm = new FormModel({
          name,
          email,
          mobile,
          address,
        });

        // Save the document to the database
        await newForm.save();

        // Return success set with 201 Created
        set.status=200
        return { message: "Form submitted successfully" };
      } catch (error:any) {
        console.error("Error saving form data:", error);

        if (error.code === 11000) {
          // Duplicate entry (unique constraint violation)
          set.status=409; // 409 Conflict
          return { message: "Duplicate entry. Email or mobile already exists." };
        }

        // Return generic error for other issues
        set.status=500; // 500 Internal Server Error
        return { message: "An internal error occurred while processing the form." };
      }
    },
    {
      body: t.Object({
        email: t.String({ format: "email" }),
        mobile: t.String(),
        address: t.String(),
        name: t.String(),
      }),
    }
  );
