import { CatalogList } from "components/CatalogList/CatalogList";
import Dropdown from "components/CatalogSettings/CatalogSettings";

export function CatalogPage(){
    return (
        <div>
            <Dropdown/>
            <CatalogList />
        </div>
    )
}