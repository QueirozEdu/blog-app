import { Button } from "@/components/Button";
import { BugIcon } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminPostNewPage() {
    return (
        <div>
            <div className="py-16 flex gap-4 flex-wrap items-center">
                <Button variant="default" size="sm">
                    <BugIcon />
                    Confirm
                </Button>
                <Button variant="ghost" size="md">
                    <BugIcon />
                    Confirm
                </Button>
                <Button variant="danger" size="lg">
                    <BugIcon />
                    Confirm
                </Button>
            </div>
        </div>
    );
}
