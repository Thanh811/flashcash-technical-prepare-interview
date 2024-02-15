import React, { useState } from "react";
import Container from "@mui/joy/Container";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import { Skill } from "../data.js";
import Content from "./Content.jsx";

const Home = () => {
  const [value, setValue] = useState("HTML");

  const renderTitle = () => {
    const listTitle = [];
    for (const iterator of Object.keys(Skill)) {
      listTitle.push(
        <Tab value={iterator} key={iterator}>
          {iterator}
        </Tab>
      );
    }

    return <TabList>{listTitle}</TabList>;
  };

  const renderContent = () => {
    const listContent = [];
    for (const [key, childValue] of Object.entries(Skill[value])) {
      listContent.push(
        <Content
          numberQuestion={key}
          question={childValue["Q"]}
          answer={childValue["A"]}
          key={key}
        />
      );
    }
    return <TabPanel value={value}>{listContent}</TabPanel>;
  };

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <Container sx={{ paddingTop: "50px" }}>
      <Tabs
        aria-label="Basic tabs"
        defaultValue={"HTML"}
        onChange={handleChange}
      >
        {renderTitle()}

        {renderContent()}
      </Tabs>
    </Container>
  );
};

export default Home;
