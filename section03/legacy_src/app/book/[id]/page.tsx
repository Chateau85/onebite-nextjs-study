import ClientComponent from "@/app/components/client-component";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string | string[] }>
}) {
    const { id } = await params;

    return (
        <div>
            book/{id} page입니다
            <ClientComponent>
                <></>
            </ClientComponent>
        </div>
    );
}