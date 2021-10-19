import styled from 'styled-components';
import Button from "@material-ui/core/Button";

const LogoutButton = styled(Button)`
  color: 'black';
`;

export default () => {
  const onClick = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <LogoutButton
      variant="outlined"
      onClick={onClick}
    >
      Logout
    </LogoutButton>
  );
};
