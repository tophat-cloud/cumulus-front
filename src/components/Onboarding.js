import styled from "styled-components";
import icon from "../assets/icons/wallet.png";
import Button from "@material-ui/core/Button";
import Color from "../utils/color";

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-top: 25vh;
  align-self: center;
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
  margin-bottom: 24px;
`;

const StartButton = styled(Button)`
  width: 300px;
  align-self: center;
`;

export default () => {
  return (
    <Wrapper>
      <Icon src={icon} width={100} height={100} />

      <NoticeTitle>You haven't any project</NoticeTitle>
      <NoticeText>Add new project and start tracking weakness!</NoticeText>

      <StartButton
        variant="text"
      >
        <strong style={{ color: Color.primary }}>Start new project</strong>
      </StartButton>
    </Wrapper>
  );
};
