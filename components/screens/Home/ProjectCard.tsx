import React from "react";
import styled from "styled-components";

import { Box } from "@components/LayoutItem";
import { Colors } from "@constants";
import { Text } from "@components/Text";

const Title = styled.div`
  background-color: ${Colors.orangeRed};
  padding: 10px;
`;
const Contens = styled.div`
  background-color: ${Colors.grey};
`;

const ProjectMemberText = styled(Text)`
  color: ${Colors.orangeRed};
  font-size: 20px;
  font-weight: bold;
`;

const ProfileImg = styled.div<{ backgroundImage: string }>`
  border-radius: 120px;
  border: 5px solid ${Colors.orangeRed};
  padding-top: 30%;
  margin: 0 33%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: ${({ backgroundImage }): string =>
    `url(${backgroundImage})`};
`;

const ProjectCard = (): JSX.Element => {
  return (
    <>
      <Title>
        <Text style={{ color: Colors.white, fontSize: 20 }}>
          언택트 기술 수요 조사 프로젝트 - 웹 , 앱 하이브리드 서비스
        </Text>
      </Title>
      <Contens>
        <Box>
          <Text style={{ color: Colors.darkGrey }}>
            이 프로젝트는 <b>언택트 시대</b>를 맞이하여, 새롭게 떠오르고있거나
            수요가 증가하게 된 서비스를 조사하는 프로젝트 입니다.{" "}
            <b>빅데이터 분석 전문가와 인공지능분야의 전문가</b>가 함께
            프로젝트를 진행 중 입니다. 프로젝트를 수행하고자 하는 열정과 본인이
            할 업무를 책임감 있게 진행하실 사수/부사수 분들을 모십니다. 바로
          </Text>
        </Box>
        <Box>
          <Box>
            <ProjectMemberText>프로젝트 멤버</ProjectMemberText>
          </Box>
          <ProfileImg backgroundImage="https://www.onthisday.com/images/people/jason-statham-medium.jpg" />
          <Box>
            <Text style={{ color: Colors.orangeRed }}>제이슨 스타뎀</Text>
          </Box>
        </Box>
      </Contens>
    </>
  );
};

export default ProjectCard;
