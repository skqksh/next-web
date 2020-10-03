import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.nav`
  color: blue;
  padding: 16px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    li {
      list-style-type: none;
      color: red;
      padding: 8px;
      a {
        text-decoration: none;
      }
    }
  }
`;

const Header = (): JSX.Element => {
  return (
    <Container>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Portfolio">Portfolio</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/SignUp">SignUp</Link>
        </li>
        <li>
          <Link href="/Login">Login</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Header;
