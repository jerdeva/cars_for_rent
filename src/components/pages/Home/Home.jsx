import auto from '../../icons/auto.jpeg'

import { Section,Container, WelcomeWrap, Welcome } from "../Page.styled";
import { Link } from "react-router-dom";


export function HomePage(){
    return (
        <Section $url={auto && `url(${auto})`}>
            <Container $bottom='0px'>
                <WelcomeWrap>
                    <Welcome>
                        <p>Ласкаво просимо до Premium car rental service</p>
                        <p>Щоб обрати авто перейдіть до <Link to="/catalog">каталогу</Link></p>
                    </Welcome>
                </WelcomeWrap>
            </Container>

        </Section>
    )
}