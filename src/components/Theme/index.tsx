import { ReactNode } from 'react';
import { Container, Area, Steps, Sidebar, Page } from "./styles";
import { Header } from '../Header/';

type Props = {
    children: ReactNode;
}

const Theme = ({ children }: Props) => {
    return (
        <Container>
            <Area>
                <Header />
                <Steps>
                    <Sidebar>

                    </Sidebar>
                    <Page>
                        {children}
                    </Page>
                </Steps>
            </Area>
        </Container>
    )
}

export { Theme };