import { Button } from "@/components/Button";

export const dynamic = "force-dynamic";

export default async function AdminPostNewPage() {
    return (
        <div className="py-16 flex gap-4 flex-wrap">
            <Button variant="default" size="sm">
                Confirm
            </Button>
            <Button variant="ghost" size="md">
                Test
            </Button>
            <Button variant="danger" size="lg">
                Testestestes
            </Button>
        </div>
    );
}
