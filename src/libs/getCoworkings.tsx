export default async function getCoworkings() {
    const response = await fetch("https://coworking-space-git-main-swpractice2.vercel.app/api/v1/coworkings")
    if (!response.ok){
        throw new Error("Failed to fetch coworkings")
    }
    return await response.json()
}