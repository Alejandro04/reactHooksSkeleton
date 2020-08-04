import styled from "styled-components";

export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
export const Form = styled.form`
    max-width: 400px;
    align-items: center;
    justify-content: center;
    display: flex;
    border: 2px solid;
    border-radius: 17px;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 2em;
    padding-bottom: 3em;
    background: #ddd;
`;
export const H1 = styled.h1`
    font-weight: 700;
    color: #384047;
    text-align: center;
    line-height: 1.5em;
    margin-bottom: 1.2em;
    margin-top: 0.1em;
`;

export const WrappLogin = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Input = styled.input.attrs(props => ({
    type: props.type || "text"
}))`
    color: #607d8b;
    background-color: #ffffff;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
    border: none;
    border-radius: 4px;
    padding: 1em;
    margin-bottom: 1.2em;
    width: 100%;
    font-size: 17px;
`;

export const Button = styled.button`
    color: black;
    font-size: 1em;
    padding: 10px 5px 10px 5px;
    border-radius: 3px;
    border: 0;
    width: 100%;
    margin-top:1em
    cursor: pointer;
    transition: all 200ms ease-in-out;
    background: #ccc;
    :hover{  
            box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
            transform: translateY(-4px);
    }
`;

export const Table = styled.table`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    flex-direction: column;
`;
export const Thead = styled.thead`
    background-color: #ddd;
    width: 80%;
    padding: 10px 5px 10px 5px;
    border-top: 1px solid
    border-left: 1px solid;
    border-right: 1px solid;
`;
export const Tbody = styled.tbody`
    width: 80%;
    padding: 10px 5px 10px 5px;
    border-top: 1px solid;
    border-left: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    height: 200px;
    overflow: scroll;
`;
export const Td = styled.td`
    width: 200px;
    text-align: center;
`;
export const Th = styled.th`
    width: 200px;
`;
