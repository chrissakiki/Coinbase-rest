import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 4rem 0;
  background-color: var(--background);
  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 90%);

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  h1 {
    font-size: 2.8rem;
    line-height: 1.2;
  }

  .btn {
    border-radius: 24px 4px;
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 2rem;
  }

  .left p {
    margin: 1.5rem 0;
  }

  .left .btn {
    align-self: flex-start;
  }

  .right {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .right .card {
    display: flex;
    flex-direction: column;
    padding: 12px 22px;
    margin: 0.4rem;
    width: 170px;
    height: 170px;
    border-radius: 24px;
    border: 1px solid #d3d3d3;
    box-shadow: rgba(0, 0, 0, 12%) 0px 8px 24px;
    text-align: center;
  }

  .card:hover {
    box-shadow: rgba(0, 0, 0, 24%) 0px 8px 24px;
  }

  .img-container {
    width: 100%;
  }

  img {
    width: 50%;
    margin: auto;
    padding: 0.2rem 0;
  }

  .icon {
    font-weight: 500;
    margin-right: 5px;
    margin-top: 5px;
  }

  .red {
    color: red;
  }

  .green {
    color: green;
  }

  @media (max-width: 1080px) {
    .left h1 {
      font-size: 2.3rem;
    }
  }

  @media (max-width: 970px) {
    .left h1 {
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

    .left {
      width: 70%;
      margin: auto;
    }
  }

  @media (max-width: 600px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    .left {
      width: 100%;
    }

    .left h1 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 450px) {
    .right .card {
      height: 100%;
      width: 100%;
    }
  }
`;

export default Wrapper;
