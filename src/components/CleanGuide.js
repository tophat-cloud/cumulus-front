import styled from "styled-components";
import icon from "../assets/icons/thumbs-up.png";

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  margin: auto;
`;

const NoticeTitle = styled.strong`
  margin-top: 18px;
  width: 100%;
  text-align: center;
`;

const NoticeText = styled.span`
  margin-top: 4px;
  width: 100%;
  text-align: center;
`;

export default () => {
  return (
    <Wrapper>
      <Icon src={icon} width={100} height={100} />

      <NoticeTitle>We couldn't find any weaknesses.</NoticeTitle>
      <NoticeText>congrats! you've got no weakness on project!</NoticeText>
    </Wrapper>
  );
};
