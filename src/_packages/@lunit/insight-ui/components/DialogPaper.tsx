import { Paper } from '@material-ui/core';
import styled from 'styled-components';

export const DialogPaper = styled(Paper)`
  // TODO {lighten};

  background-color: #ffffff;
  width: fit-content;
  height: fit-content;
  padding: 30px 50px;
  border-radius: 0;

  > div {
    text-align: center;
  }
`;
