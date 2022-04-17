import styled from 'styled-components';

export const Container = styled.div``;

export const JobReview = styled.div`
    width: 100%;
    background: #d5d5e5;
    margin-top: 50px;
    border-radius: 20px;
    padding: 40px;
    color: #000000;
`;

export const Info = styled.div`
    h3 {
        font-size: 35px;
        margin: 0;
    }
    small {
        margin-top: 5px;
        font-size: 14px;
    }
`;

export const Repos = styled.div`
    width: 100%;

    div{
        display: inline-block;
        box-sizing: border-box;
        padding: 20px;
        background: #444;
        color: white;
        width: 32%;
        margin-right: 1%;
        margin-top: 10px;
        border-radius: 5px;
        text-align: center;
    }
`;