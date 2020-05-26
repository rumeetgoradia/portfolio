import styled from "styled-components"

export const StyledContainer = styled.div`
  position: relative;
  overflow: hidden;
  text-align: left;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  border-radius: 4px;
  padding: 3rem;
  width: 1000px;
  margin-bottom: 3rem;
  background-color: ${({ theme }) => theme.containerColor};
  box-shadow: ${({ theme }) => theme.containerShadow};
  transition: all 0.3s linear;
`
