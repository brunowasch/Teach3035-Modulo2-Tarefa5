import styled, { createGlobalStyle } from 'styled-components';

type ThemeMode = 'light' | 'dark';

export const GlobalStyle = createGlobalStyle<{ themeMode: ThemeMode }>`
    html, body, #root {
        font-family: 'Montserrat', sans-serif;
        background-color: ${({ themeMode }) =>
        themeMode === 'light' ? '#ffffff' : '#131313'};
        color: ${({ themeMode }) =>
        themeMode === 'light' ? '#000000' : '#ffffff'};
    }
`;

export const AppContainer = styled.div<{ themeMode: ThemeMode }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 100vh;

    background-color: ${({ themeMode }) =>
        themeMode === 'light' ? '#ffffff' : '#131313'};

    color: ${({ themeMode }) =>
        themeMode === 'light' ? '#000000' : '#ffffff'};
`;

export const ToggleButton = styled.button`
    padding: 10px 20px;
    margin-top: 20px;

    border: none;
    border-radius: 5px;

    cursor: pointer;
    font-size: 16px;

    transition: background-color 0.3s, color 0.3s;

    &:hover {
        opacity: 0.8;
    }
`;
