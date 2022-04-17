import { ReactNode } from 'react';
import { Container, Area, Steps, Sidebar, Page } from "./styles";
import { Header } from '../Header/';
import { SidebarItem } from '../SidebarItem';
import { CgProfile } from 'react-icons/cg';
import { ImBook } from 'react-icons/im';
import { IoIosContacts, IoMdDoneAll } from 'react-icons/io';
import { useForm } from '../../contexts/FormContext';

type Props = {
    children: ReactNode;
}

const Theme = ({ children }: Props) => {
    const { state } = useForm();

    return (
        <Container>
            <Area>
                <Header />
                <Steps>
                    <Sidebar>
                        <SidebarItem
                            title="Personal"
                            description="Personal informations"
                            icon={<CgProfile />}
                            path="/"
                            active={ state.currentStep === 1 }
                        />
                        <SidebarItem
                            title="Professional"
                            description="Your Lovel"
                            icon={<ImBook />}
                            path="/step2"
                            active={ state.currentStep === 2 }
                        />
                        <SidebarItem
                            title="Contact"
                            description="How we find you"
                            icon={<IoIosContacts />}
                            path="/step3"
                            active={ state.currentStep === 3 }
                        />
                        <SidebarItem
                            title="Result"
                            description="Get your result"
                            icon={<IoMdDoneAll />}
                            path="/result"
                            active={ state.currentStep === 4 }
                        />
                        <p className="credits">Created with love by <a href="https://github.com/bgfborges" target="_blank" rel="noreferrer"><strong>Gabriel Borges</strong></a></p>
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