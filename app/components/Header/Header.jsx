import Box from "../../components/BaseKit/Box/Box";
import BaseText from "../BaseKit/BaseText/BaseText";
import s from "./styles.css";

export const links = [{ rel: "stylesheet", href: s }];

export const Header = (props) => {
  return (
    <Box
      style={{
        zIndex: 2,
        paddingTop: "30px",
      }}
      className="fade"
      data-scroll
    >
      <Box className={"header"} flex="1" jCenter aCenter flexDirection="row">
        <a
          href="https://www.linkedin.com/company/gtproducts/about/"
          target="_blank"
        >
          <BaseText
            className={"header_title"}
            type="span"
            title={"ARTIGOS & CASOS"}
          ></BaseText>
        </a>

        <a
          href="https://www.linkedin.com/company/gtproducts/about/"
          target="_blank"
        >
          <BaseText
            className={"header_title"}
            type="span"
            title={"PROJETOS & INTERFACES"}
          ></BaseText>
        </a>

        <a
          href="https://www.linkedin.com/company/gtproducts/about/"
          target="_blank"
        >
          <BaseText
            className={"header_title"}
            type="span"
            title={"LINKEDIN"}
          ></BaseText>
        </a>

        <a
          href="https://www.linkedin.com/company/gtproducts/about/"
          target="_blank"
        >
          <BaseText
            className={"header_title"}
            type="span"
            title={"WHATSAPP"}
          ></BaseText>
        </a>
      </Box>
    </Box>
  );
};

Header.links = links;

export default Header;
