import styled from 'styled-components';

export const Container = styled.div`
    background-color: #281041;
    color: white;
    min-height: 100vh; 
`;

export const Area = styled.div`
    margin: auto;
    max-width: 1280px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Steps = styled.div`
    flex: 1;
    display: flex;
`;

export const Sidebar = styled.div`
    width: 350px;
    border-right: 1px solid #5a2593; 
    .credits {
        text-align: center;
        margin-top: 40px;
        a{
        color: white;
        }
    }
`;

export const Page = styled.div`
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;
`;