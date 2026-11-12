import { requireAuth } from "@/lib/auth-utils";

interface Props {
    params:Promise<{credentialId :string}>
}

export default async function Credential ({params}:Props){
    await requireAuth();
    const {credentialId} = await params;
    return (
        <><h1>{credentialId}</h1></>
    )
}