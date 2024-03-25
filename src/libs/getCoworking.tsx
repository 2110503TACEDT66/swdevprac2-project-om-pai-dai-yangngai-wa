export default async function getCoworking(id:string) {
    const response = await fetch(`https://coworking-space-git-main-swpractice2.vercel.app/api/v1/coworkings/${id}`)
    if(!response.ok) {
        throw new Error("Failed to fetch coworking")
    }
    return await response.json()
}