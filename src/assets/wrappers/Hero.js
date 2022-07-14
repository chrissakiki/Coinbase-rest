import styled from "styled-components";

const Wrapper = styled.div`
  margin: 3rem 0 2rem;
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 2rem auto 0;
    justify-content: center;
    align-items: center;
    padding: 0 3rem;
  }

  h1 {
    font-size: 3rem;
    line-height: 1.2;
  }

  .btn {
    border-radius: 24px 4px;
  }

  .primary {
    color: var(--primary);
  }
  .left {
    width: 100%;
    padding: 1rem;
  }

  h1,
  .input-container {
    padding: 1rem 0;
  }

  .right {
    padding: 1rem;
  }

  .img-container {
    width: 100%;
    display: flex;
  }

  img {
    width: 500px;
    margin: auto;
  }

  @media (max-width: 1080px) {
    .left h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 970px) {
    img {
      width: 400px;
    }

    .left h1 {
      line-height: 1.4;
      font-size: 2.3rem;
    }
  }
  @media (max-width: 886px) {
    text-align: center;

    .container {
      grid-template-columns: 1fr;
      padding: 0 2rem;
      margin-bottom: 1rem;
    }

    .left {
      width: 70%;
      margin: auto;
    }
  }

  @media (max-width: 600px) {
    .left {
      width: 100%;
    }

    img {
      width: 100%;
    }
  }
`;

export default Wrapper;
