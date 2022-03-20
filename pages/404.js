import React, { Component } from "react";
import Router from "next/router";

export default function Error404() {
  React.useEffect(() => {
    Router.push("/layout1");
  });

  return <div />;
}
