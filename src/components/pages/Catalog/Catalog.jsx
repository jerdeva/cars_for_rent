import { CatalogList } from "components/CatalogList/CatalogList";
import { Filters } from "components/Filters/Filters";
import { Section,Container } from "../Page.styled";


export function CatalogPage(){
    return (
        <Section>
            <Container $top='50px' >
                <Filters />
                <CatalogList />
            </Container>

        </Section>
    )
}