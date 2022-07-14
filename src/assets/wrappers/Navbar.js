import styled from "styled-components";

const Wrapper = styled.nav`
  height: 70px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;

  .container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
  }

  h2 {
    font-size: 2.1rem;
  }

  .primary {
    color: var(--primary);
  }

  .nav-menu {
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }

  .nav-link {
    color: #444;
    font-weight: 500;
    text-transform: capitalize;
    font-size: 1.1rem;
    transition: all 0.5s ease;
  }

  .nav-link:hover {
    color: #000;
  }

  .btn-primary {
    padding: 0.6rem 1.2rem;
    border-radius: 0.5rem;
    border: 1px solid var(--primary);
    background-color: var(--primary);
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
  }

  .hamburger {
    display: none;
    cursor: pointer;
    position: absolute;
    top: 22px;
    right: 20px;
  }

  .ham-icon {
    color: var(--primary);
  }

  @media (max-width: 800px) {
    .hamburger {
      display: block;
    }

    .container {
      padding-top: 0.95rem;
      flex-direction: column;
      align-items: flex-start;
    }

    h2 {
      font-size: 2rem;
    }

    .nav-menu {
      background-color: #fff;
      flex-direction: column;
      align-items: start;
      gap: 0;
      width: 50%;
      display: none;
      margin-top: 0.5rem;
      box-shadow: 8px 8px 22px rgba(0, 0, 0, 0.1);
    }

    .nav-menu.active {
      display: flex;
    }

    .nav-link {
      padding: 1rem;
      border: 1px solid #eee;
      width: 100%;
      color: var(--primary);
    }

    .btn-primary {
      display: none;
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.8rem;
    }
  }
`;

export default Wrapper;
