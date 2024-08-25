"use client";

import React, { useContext, useEffect, useState } from "react";

export default function ProjectPage({ params }) {
  // async function fetchGroupData(projectName) {
  //   await fetch(`${BACKEND_API}groups/${groupId}`, {
  //     method: "GET",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json; charset=UTF-8",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) =>
  //       res.ok
  //         ? res.json()
  //         : console.error("error in fetching expensebygroupid")
  //     )
  //     .then((data) => {
  //       const reversedGroupExpenses = data.expenses.reverse();
  //       setGroupExpenses(reversedGroupExpenses);
  //       setSelectedGroup(data);
  //     });
  // }

  useEffect(() => {
    // fetchGroupData(params.groupId);
  }, []);

  return (
    <div>
      <div className="main-body"></div>
    </div>
  );
}
