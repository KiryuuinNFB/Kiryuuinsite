import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies, fetch }) => {
    const token = cookies.get('auth')
    if (!token) {
        redirect(307, "/admin")
    }

    const res = await fetch("/api/cms", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = await res.json()

    return { data }
}
