import { type FormValue, formSchema } from "./schema";

const db = {
  create: (data: any) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve({ ok: true });
        reject({ error: "something happened" });
      });
    }),
};

export const formAction = async (data: FormValue) => {
  const result = formSchema.safeParse(data);

  if (!result.success) {
    return {
      status: "error",
      error: result.error,
    };
  }
  try {
    const response = await db.create(result.data);
    return {
      data: response,
      status: "success",
    };
  } catch (error) {
    console.error(error);
    return { status: "error", message: "Something went wrong!" };
  }
};
