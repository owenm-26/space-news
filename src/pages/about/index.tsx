import { Inter } from "next/font/google";
import { Typography, Button, DatePicker } from "antd";


const inter = Inter({ subsets: ["latin"] });

// You don't need to edit this file

export default function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Typography.Title>About</Typography.Title>
        <Typography.Paragraph>
          This is a homework assignment that Owen Mariani started working on at 1:38pm Friday 2/23/2024.
        </Typography.Paragraph>
        <Button>This does nothing!</Button>
        <br/>
        <Typography.Text>This Date Picker also does nothing!</Typography.Text>
        <br/>
        <DatePicker picker="week"></DatePicker>
        {/* You can add the "latest article" feature on the website for a bonus */}
      </div>
    </>
  );
}
