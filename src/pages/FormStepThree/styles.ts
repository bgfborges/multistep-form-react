import styled from 'styled-components';

export const Container = styled.div`
    p {
        font-size: 13px;
        color: #b8b8d4; 
    }
    h2{
        font-size: 26px;
        margin: 0;
        padding: 0;
    }
    hr {
        height: 1px;
        border: 0;
        background-color: #321452;
        margin: 30px 0; 
    }

    label {
        font-size: 13px;

        input {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25cd89;
            border-radius: 10px;
            color: white;
            outline: 0;
            font-size: 15px;
            margin-bottom: 20px;
            background: #321452;
        }
    }

    button {
        background-color: #25cd89;
        color: white;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }

    button {
        color: white;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
        background-color: #25cd89;
    }

    & button:first-of-type {
        background-color: #321452;
        margin-right: 15px;
    }
`;