import React from "react"
import { Outlet } from "react-router-dom";
import { BiWorld } from "react-icons/bi"

export default function Layout() {
  return (
    <div>
        <div className="header">
            <BiWorld size={30} />
            <h3>Where in the world?</h3>
        </div>
        <Outlet />
    </div>
  )
};