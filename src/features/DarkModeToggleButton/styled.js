import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  align-self: flex-start;
  justify-self: end;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  width: 170px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 50px;
  }
`;

export const DescriptionOfButton = styled.p`
  padding-top: 10px;
  margin-right: 10px;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.textColor};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    visibility: hidden;
    display: none;
  }
`;

export const Input = styled.input`
  ${({ type }) =>
    type === 'checkbox' &&
    css`
      opacity: 0;
      position: absolute;
    `};
`;

export const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 3px;
  height: 26px;
  width: 48px;
  background-color: ${({ theme }) => theme.color.backgroundToggleButton};
  border: 1px solid ${({ theme }) => theme.color.borderToggleButton};
  border-radius: 50px;

  ${({ darkMode }) =>
    darkMode &&
    css`
      justify-content: flex-end;
    `};
`;

export const Ball = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.textColor};

  ${({ darkMode }) =>
    darkMode &&
    css`
      justify-content: flex-end;
      align-items: center;
    `};
`;
