import type { NextPage } from "next";
import {
  ActionIcon,
  Group,
  Text,
  Title,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { PlayerPlay, PlaylistAdd, Plus, Settings } from "tabler-icons-react";

const Home: NextPage = () => {
  const theme = useMantineTheme();
  console.log({ theme });
  return (
    <Group direction={"column"} mt={"-100px"}>
      <Group
        style={{
          backgroundColor: theme.colors.gray[0],
          width: "500px",
          height: "100vh",
        }}
        mx={"auto"}
        direction={"column"}
      >
        <Group position={"apart"} style={{ width: "100%" }}>
          <ActionIcon
            color={"gray"}
            size={"xl"}
            m={"sm"}
            variant={"transparent"}
          >
            <Settings />
          </ActionIcon>
          <ActionIcon
            color={"gray"}
            size={"xl"}
            m={"sm"}
            variant={"transparent"}
          >
            <PlaylistAdd />
          </ActionIcon>
        </Group>
        <Group
          spacing={0}
          mt={"sm"}
          position={"center"}
          mx={"auto"}
          direction={"column"}
          // style={{ height: "200px" }}
        >
          <Title order={1} style={{ fontWeight: "900" }}>
            25:00
          </Title>
          <Text>Explore Mantine Tutorial</Text>
        </Group>
        <Group
          // mt={"sm"}
          position={"center"}
          mx={"auto"}
          mb={"md"}
          // style={{ height: "200px" }}
        >
          <ActionIcon color={"dark"} size={"xl"} variant={"transparent"}>
            -5
          </ActionIcon>
          <ActionIcon
            color={"dark"}
            size={"xl"}
            radius={"xl"}
            variant={"filled"}
          >
            <PlayerPlay />
          </ActionIcon>
          <ActionIcon color={"dark"} size={"xl"} variant={"transparent"}>
            +5
          </ActionIcon>
        </Group>
        <Group
          mt={"sm"}
          mb={"sm"}
          mx={"auto"}
          direction={"column"}
          position={"center"}
          style={{ height: "90px" }}
        >
          <UnstyledButton style={{ height: "100%", width: "260px" }}>
            <Group
              spacing={0}
              p={"lg"}
              direction={"column"}
              mt={"sm"}
              mx={"auto"}
              position={"center"}
              style={{
                background: "rgb(238, 238, 238)",
                border: "1px solid rgb(189, 189, 189)",
              }}
            >
              <Plus />
              <Text size={"xs"} color={"gray"}>
                Add to Task
              </Text>
            </Group>
          </UnstyledButton>
        </Group>
        <Group
          mx="auto"
          style={{ width: "260px", justifyContent: "space-between" }}
          position={"right"}
        >
          <Text size={"xs"}>🕶️ Hide complete</Text>
          <Text size={"xs"}>🎉 Clear complete</Text>
          <Text size={"xs"}>🧹 Clear all</Text>
        </Group>
      </Group>
    </Group>
  );
};

export default Home;
