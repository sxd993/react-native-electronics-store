
import { CatalogView } from "@/widgets/catalog-view/ui/CatalogView";
import { useState } from "react";

export const CatalogPage = () => {
    const [search, setSearch] = useState("");

    return <CatalogView search={search} onChangeSearch={setSearch} />;
};

