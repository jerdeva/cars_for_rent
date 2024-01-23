import { useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/selectors";
import { Link } from 'react-router-dom';
import { Section, Container, Welcome,WelcomeWrap } from "../Page.styled";

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
                    <WelcomeWrap>
                        <Welcome>
                            Будь ласка, оберіть машину з <Link to="/catalog">каталогу</Link>.
                        </Welcome>
                    </WelcomeWrap>}
            </Container>
        </Section>
    )
};
