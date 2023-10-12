import styled from "styled-components";


export const Button = styled.button`
&:not(:last-child){
	margin-right: 30px;
}
  padding: 4px 30px;
	font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  /* letter-spacing: 0.04em; */
  color: #000000;
  background-color: #1ac6ff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover
 {
  background-color: #2eb8b8;
}
`;