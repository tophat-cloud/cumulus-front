import styled from "styled-components";
import icon from "../assets/icons/wallet.png";
import Button from "@material-ui/core/Button";
import Color from "../utils/color";
import api from "../utils/api";

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
  const createProject = async () => {
    const newProjectName = prompt(
      "Input your first project name to start cumulus!",
      '',
    );

    if (!newProjectName) {
      return;
    }

    try {
      const { id } = await api.createProject({
        title: newProjectName,
      });

      window.localStorage.setItem("key", id);
      window.location.reload();
    } catch (err) {
      console.log(err.response);
      alert(`Oops..! failed add project, try again.`);
    }
  }

  return (
    <Wrapper>
      <Icon src={icon} width={100} height={100} />

      <NoticeTitle>You haven't any project</NoticeTitle>
      <NoticeText>Add new project and start tracking weakness!</NoticeText>

      <StartButton
        variant="text"
        onClick={createProject}
      >
        <strong style={{ color: Color.primary }}>Start new project</strong>
      </StartButton>
    </Wrapper>
  );
};
