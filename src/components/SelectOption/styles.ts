import styled from 'styled-components';

type PropsContainer = {
    selected: boolean;
}

export const Container = styled.div<PropsContainer>`
    display: flex;
    border-radius: 10px;
    padding: 20px;
    align-items: center;
    cursor: pointer;

    & + div {
        margin-top: 15px;
    }

    &:hover {
        border: 2px solid #496459;
    }

    border: 2px solid ${(props) => props.selected ? '#496459' : '#321452' }
`;

export const Icon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #321452;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Info = styled.div`
    flex: 1;
    margin-left: 20px;
`;

export const Title = styled.div`
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 7px;
`;
export const Description = styled.div`
    font-size: 14px;
    color: #b8b8d4;
`;