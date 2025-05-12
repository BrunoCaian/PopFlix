import styled from "styled-components";
export const UpcomingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;


  h1 {
    font-size: 2.5rem;
    color: white;
    text-align: center;
    margin-bottom: 2rem;
  }

  .release-date {
    position: absolute;
    bottom: 15px;
    left: 10px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    font-size: 1rem;
    border-radius: 5px;
    text-transform: uppercase;
  }
`;