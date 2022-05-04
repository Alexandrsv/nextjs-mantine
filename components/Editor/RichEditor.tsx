import { useState } from "react";
// import { RichTextEditor } from "@mantine/rte";

// RichText.tsx in your components folder
import dynamic from "next/dynamic";
// import "quill/dist/quill.bubble.css";

const RichTextEditor = dynamic(() => import("@mantine/rte"), {
  // Disable during server side rendering
  ssr: false,

  // Render anything as fallback on server, e.g. loader or html content without editor
  loading: () => null,
});

const initialValue =
  "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";

export const RichEditor = () => {
  const [value, onChange] = useState(initialValue);
  console.log("RichEditor", value);
  return (
    <>
      <RichTextEditor value={value} onChange={onChange} readOnly />
      <div dangerouslySetInnerHTML={{ __html: value }}></div>
    </>
  );
};
