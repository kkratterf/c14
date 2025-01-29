import { PopularCardSkeleton } from "@/components/ui/popular-card";


export default function Loading() {
    return (
        <div className="flex flex-col gap-1">
            {Array.from({ length: 5 }, (_, i) => (
                <PopularCardSkeleton key={i} />
            ))}
        </div>
    );
}