import { useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/selectors";
import { Link } from 'react-router-dom';
import { Section, Container } from "../Page.styled";

import { CarInfo } from "components/CarInfo/CarInfo";
import { List } from "components/CatalogList/CatalogList.styled";



export function FavoritePage() {
        const favoriteCars = useSelector(selectFavoriteCars);
    return (
     <Section>
            <Container $top='50px'>
                {(favoriteCars?.length > 0) ?
                    <List>
                        {favoriteCars?.map((car, index) =>
                            <CarInfo car={car} key={car.id} index={index} />
                        )}
                    </List> :
                    <div>
                        <p>
                            Please select your favorite cars in the <Link to="/catalog">Сatalog</Link>.
                        </p>
                    </div>}
            </Container>
        </Section>
    )
};
