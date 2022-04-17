import styled from 'styled-components';

interface ContainerProps {
    active: boolean;
}

export const Container = styled.div<ContainerProps>`
    padding: 20px;
    border-radius: 10px;
    background: #321452;
    margin-right: 10px;
    margin-top: 10px;
    border: 2px solid ${props => props.active ? '#25cd89' : '#321452'};

    a{
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        color: white;
        

        svg {
            width: 20px;
            height: 20px;
            background: #321452;
            padding: 10px;
            margin-right: 15px;
            border-radius: 50%;
        }

        div {
            width: 200px;
            p, h2 {
                padding: 0;
                margin: 0;
            }

            h2 {
                font-size: 20px;
            }
        }

    }
`;

interface PointerProps {
    active: boolean;
}

export const Point = styled.div<PointerProps>`
    max-width: 6px;
    height: 6px;
    border: 3px solid #5a2593;
    border-radius: 50%;
    background-color: ${props => props.active ? '#25cd89' : '#321452'};
`;