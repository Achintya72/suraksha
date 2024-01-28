import { useRouter } from "next/navigation"

export default function useRedirectFunction(page) {
    const router = useRouter();
    return () => router.push(page);
}