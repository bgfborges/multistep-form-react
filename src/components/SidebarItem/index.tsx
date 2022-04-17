import { Container, Point } from './styles';
import { Link } from 'react-router-dom';

type Props = {
    title: string;
    description: string;
    icon: JSX.Element;
    path: string;
    active: boolean;
}

const SidebarItem = ({title, description, icon, path, active}: Props) => {
    return (
        <Container active={active} >
            <Link to={path} >
                {icon}
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <Point active={active} />
            </Link>
        </Container>
    );
}

export { SidebarItem };