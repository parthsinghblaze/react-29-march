import React from "react";
import { styled } from "styled-components";

function Home() {
  return (
    <MainDiv>
      <div className="container">
        <Box>
          <LeftBox>
            <h6>your e-learning platform</h6>
            <h1>Invest in knowledge and your future!</h1>
            <BannerButton $bgColor="#00b3ff" $hoverColor="black">
              Try Now
            </BannerButton>
            <BannerButton $bgColor="white" $color="black" $hoverColor="orange">
              Play Video
            </BannerButton>
          </LeftBox>
          <RightBox></RightBox>
        </Box>
      </div>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  padding: 100px 0;
  width: 100%;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
`;

const LeftBox = styled.div`
  h6 {
    color: #ff1cf0;
    font-weight: 800;
    font-style: italic;
  }

  h1 {
    font-weight: 800;
    color: #000b2b;
    margin-bottom: 50px;
  }
`;

export const BannerButton = styled.button`
  padding: 16px 32px;
  background: ${(props) => props.$bgColor};
  border: none;
  border-radius: 10px;
  color: ${(props) => (props.$color ? props.$color : "white")};
  margin-right: 10px;

  &:hover {
    background: ${(props) => props.$hoverColor};
  }
`;

const RightBox = styled.div``;

export default Home;
