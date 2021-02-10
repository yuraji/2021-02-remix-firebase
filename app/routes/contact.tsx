import { useRouteData } from "@remix-run/react";
import type { Loader, Action } from "@remix-run/data";
import { redirect } from "@remix-run/data";

export function meta() {
    return {
        title: "Contact",
        description: "Contact",
    };
}

export let loader: Loader = async () => {
    return { message: "this is awesome 😎" };
};

export let action: Action = async ({ request }) => {
    let body = new URLSearchParams(await request.text());
    let content = body.get("message");
    console.log("CONTENT:", content);

    return redirect("/contact");
};

export default function Index() {
    let data = useRouteData();

    return (
        <div style={{ textAlign: "center", padding: 20 }}>
            <h2>Contact us!</h2>
            <form method="post">
                <input type="text" name="message" />
                <input type="submit" />
            </form>
            <p>Message from the loader: {data.message}</p>
        </div>
    );
}
