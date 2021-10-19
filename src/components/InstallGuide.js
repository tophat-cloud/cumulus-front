import styled from "styled-components";
import icon from "../assets/icons/technical.png";
import Color from "../utils/color";
import Button from "@material-ui/core/Button";

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
  font-size: 22px;
`;

const NoticeText = styled.span`
  margin-top: 4px;
  width: 100%;
  text-align: center;
  margin-bottom: 24px;
  font-size: 16px;
`;

const StartButton = styled(Button)`
  width: 300px;
  align-self: center;
`;

export default () => {
  return (
    <Wrapper>
      <Icon src={icon} width={100} height={100} />

      <NoticeTitle>Almost done!</NoticeTitle>
      <NoticeText>Did you install SDK not yet? It's very simple.</NoticeText>

      <StartButton
        variant="text"
        onClick={() => window.location.href = '/dashboard/documents'}
      >
        <strong style={{ color: Color.primary }}>Go to Install</strong>
      </StartButton>
    </Wrapper>
  );
};
