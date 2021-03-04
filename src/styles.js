import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    width: 100%;
    padding: 8px 24px;
    font-size: 28px;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #ff7e00;
    background: #000000;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-left: 8px;
      font-size: 70%;
    }
  }
`;

export const ToolBar = styled.div`
  width: 100%;
  height: 36px;
  margin-bottom: 16px;

  display: flex;
  justify-content: space-between;
  
  button {
    height: 100%;
    font-weight: 900;
    padding: 8px;
    cursor: pointer;
    
    display: flex;
    align-items: center;
    
    svg {
      margin-left: 4px;
      width: 24px;
      height: 24px;
    }
  }

  form {
    display: flex;

    input {
      height: 100%;
      padding: 0 8px;
    }

    button {
      margin-left: 4px;

      svg {
        margin: 0;
      }
    }
  }
`;

export const ContainerForm = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #00000085;
  transition: all 0.5s;
  transform: ${props => props.show ? 'translateX(0%)' : 'translateX(-300%)'};

  display: flex;
  align-items: center;
  justify-content: center;
  
  form {
    max-width: 600px;
    padding: 32px 24px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 1px 12px rgba(0, 0, 0, 0.24);
    background: #FFFFFF;

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    h2 {
      width: 100%;
      margin-bottom: 16px;
      font-weight: 900;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }

    input {
      height: 34px;
      padding: 0 8px;
    }

    button {
      margin: 16px 0 0 8px;
      padding: 8px 16px;
      cursor: pointer;
    }
  }
`;

export const Fieldgroup = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;

  & + & {
    margin-top: 8px;
  }
`;

export const MessageForm = styled.p`
  min-width: 100%;
  margin-top: 16px;
  padding: 12px 16px;
  font-weight: 700;
  text-align: center;
  border-radius: 8px;
  background: #00000015;
`;

export const BoxLoading = styled.div`
  width: 100%;
  margin-bottom: 16px;
  padding: 16px 24px;
  background: #000;
  border-radius: 10px;

  h1 {
    margin: 0;
    font-size: 36px;
    letter-spacing: 0.8px;
    color: #ff7e00;
  }
`;

export const BoxNotFoundMovies = styled.div`
  width: 100%;
  margin-bottom: 16px;
  padding: 16px 24px;
  background: #000;

  h1 {
    margin: 0;
    font-size: 24px;
    letter-spacing: 0.8px;
    color: #ff7e00;
    text-transform: none;
  }
`;