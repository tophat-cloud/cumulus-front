import logo from "../assets/icons/team.png";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Icon = styled.img`
  margin: 0 auto;
`;

const NoticeTitle = styled.strong`
  display: block;
  margin-top: 18px;
  text-align: center;
  font-size: 64px;
  align-self: center;
`;

const NoticeText = styled.span`
  display: block;
  text-align: center;
  font-size: 24px;
  margin-bottom: 12px;
  align-self: center;
`;

export default () => (
  <Wrapper>
    <Icon src={logo} width={128} height={128} />
    <NoticeTitle>404</NoticeTitle>
    <NoticeText>Page not found</NoticeText>

    <Button onClick={() => window.location.href = '/'}>
      <strong style={{ color: '#e1567c', fontSize: 16 }}>Home</strong>
    </Button>
  </Wrapper>
);
