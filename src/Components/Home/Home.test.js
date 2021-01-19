import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event"
import { getCategoryEntries, getRandomApi } from "../../apiCalls";
import Home from "./Home";
jest.mock("../../apiCalls.js");

