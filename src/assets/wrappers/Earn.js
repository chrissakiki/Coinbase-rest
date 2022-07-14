import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    padding: 3rem 1rem;
  }

  h1 {
    font-size: 2.8rem;
    line-height: 1.2;
  }

  .btn {
    border-radius: 24px 4px;
  }

  .left {
    text-align: center;
  }

  img {
    width: 300px;
    transition: 0.6s all ease-in-out;
  }

  img:hover {
    transform: scale(1.1);
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 1080px) {
    .right h1 {
      font-size: 2.3rem;
    }
  }

  @media (max-width: 970px) {
    img {
      width: 400px;
    }

    .right h1 {
      line-height: 1.4;
      font-size: 2.2rem;
    }
  }
  @media (max-width: 886px) {
    text-align: center;

    .container {
      grid-template-columns: 1fr;
      padding: 0 2rem;
      margin-bottom: 1rem;
    }

    .right {
      width: 70%;
      margin: auto;
    }
  }

  @media (max-width: 600px) {
    .right {
      width: 100%;
      order: 1;
    }

    .right h1 {
      font-size: 1.8rem;
    }

    .left {
      order: 2;
    }
    img {
      width: 100%;
    }
  }
`;

export default Wrapper;
