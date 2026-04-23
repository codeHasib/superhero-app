"use client";

import { signOut } from "better-auth/api";

const ComparePage = () => {
  return (
    <div>
      Compare
      <button onClick={signOut}>out</button>
    </div>
  );
};

export default ComparePage;
