import React, { useState } from "react";

import SignIn from "./SignIn";

export default () => {
  // ニックネームをグローバルで管理
  const [name, setName] = useState("");
  console.log("name", name);
  return <SignIn setName={setName} />;
};
