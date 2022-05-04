import { AppShell, Footer, Group, Header, Text } from "@mantine/core";
import React, { FC } from "react";

export const AppContainer: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AppShell
      styles={{
        main: {
          background: "#ffffff",
          paddingLeft: "0",
          width: "100vw",
          height: "100vh",
        },
      }}
      fixed
      header={
        <Header height={50} p={"md"}>
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Text size={"xl"} weight={"bolder"}>
              Some text
            </Text>
          </div>
        </Header>
      }
      footer={
        <Footer height={60} p={"md"}>
          <Group position={"apart"} spacing={"xl"}>
            <Text size={"sm"}>
              <span style={{ fontWeight: "bolder" }}>⏲️ List Time:</span> 0h 22m
            </Text>
            <Text size={"sm"}>
              <span style={{ fontWeight: "bolder" }}>🎉 End Time:</span> 19h 22m
            </Text>
          </Group>
        </Footer>
      }
    >
      {children}
    </AppShell>
  );
};
