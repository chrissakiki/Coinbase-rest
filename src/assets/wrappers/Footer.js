import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--primary);
  padding: 2rem 0.5rem 1rem;
  width: 100%;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;

  h2,
  h5 {
    color: #f8f9f7;
  }

  .primary {
    color: #000;
  }
  .container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    padding: 1rem;
  }

  .col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .bar {
    width: 100px;
    border-bottom: 2px solid #fff;
    margin: 1rem 0 1rem;
    border-radius: 0.25rem;
  }

  a {
    font-size: 1rem;
    color: #f8f9f7;
    margin-bottom: 8px;
  }

  .icon {
    color: #fff;
    margin-right: 4px;
    font-size: 1.5rem;
  }

  @media (max-width: 800px) {
    .col-1 {
      display: none;
    }
    .container {
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      row-gap: 3rem;
    }
  }

  @media (max-width: 600px) {
    text-align: center;

    .bar {
      margin: 1rem auto;
    }
  }
`;

export default Wrapper;
