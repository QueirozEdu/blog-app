"use server";

import { verifyPassword } from "@/lib/login/manage-login";
import { asyncDelay } from "@/utils/async-delay";

type LoginActionState = {
    username: string;
    error: string;
};

export async function loginAction(state: LoginActionState, formData: FormData) {
    await asyncDelay(3000);

    if (!(formData instanceof FormData)) {
        return {
            username: "",
            error: "Invalid credentials",
        };
    }

    //Data the user entered in the form
    const username = formData.get("username")?.toString().trim() || "";
    const password = formData.get("password")?.toString().trim() || "";

    if (!username || !password) {
        return {
            username,
            error: "Enter username and password",
        };
    }

    const isUsernameValid = username === process.env.LOGIN_USER;
    const isPassowrdValid = await verifyPassword(
        password,
        process.env.LOGIN_PASS || ""
    );

    if (!isUsernameValid || !isPassowrdValid) {
        return {
            username,
            error: "Invalid username or password",
        };
    }

    //From here, the username and passowrd are valid!!
    //TODO: create JWT and cookie
    return {
        username,
        error: "User logged successfully",
    };
}
