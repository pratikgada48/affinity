import * as React from "react";
import { Route, Routes } from "react-router-dom";
import PollCoding from "./components/PollCoding";
import HomePage from "./HomePage";
import PollHobbies from "./components/PollHobbies";

function PublicRoute() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route index path="/poll-code" element={<PollCoding />} />
      <Route index path="/poll-hobby" element={<PollHobbies />} />
    </Routes>
  );
}

export default PublicRoute;
