import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
    const res = await fetch("/api/commissions", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const status = await fetch("/api/comstat", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const data = await res.json()
    const parsedstat = await status.json()
    
    return {
        "data": data,
        "status": parsedstat.isOpen
    }
}