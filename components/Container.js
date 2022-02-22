import styled from "styled-components";
import { padWidth } from "../utils";

const ContainerWrapper = styled.div``;
const Content = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  @media only screen and (max-width: ${padWidth}) {
    padding: 30px 0;
  }
`;

function Container(props) {
  return (
    <ContainerWrapper style={props.style || {}} id={props.id}>
      <Content>{props.children}</Content>
    </ContainerWrapper>
  );
}

export default Container;
