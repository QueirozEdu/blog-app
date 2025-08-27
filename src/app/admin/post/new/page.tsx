import { InputText } from "@/components/InputText";

export const dynamic = "force-dynamic";

export default async function AdminPostNewPage() {
    return (
        <div className="flex flex-col gap-6">
            <InputText labelText="Name" placeholder="Enter your name" />
            <InputText labelText="Lastname" placeholder="Enter your lastname" />
            <InputText
                disabled
                labelText="Place Holder"
                placeholder="This is a place holder"
            />
            <InputText
                disabled
                labelText="Default Value"
                placeholder="This is a place holder"
                defaultValue="This is a default value"
            />
            <InputText
                labelText="Read only"
                placeholder="This is a place holder"
                defaultValue="This is a default value"
                readOnly
            />
        </div>
    );
}
