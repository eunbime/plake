"use server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const userSignInAction = async (_: any, formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  const userData = { email, password };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auths/signin`,
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const token = await response.json();
    console.log(token);

    return {
      status: true,
      error: "",
    };
  } catch (err) {
    return {
      status: false,
      error: `${(err as Error).message}`,
    };
  }
};

export default userSignInAction;
