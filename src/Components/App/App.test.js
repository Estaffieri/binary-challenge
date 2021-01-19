import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event"
import { getRandomApi } from "../../apiCalls";
import App from "./App";
jest.mock("../../apiCalls");

describe("APP TESTS", () => {

    describe("Unit Tests", () => {


        it("should render a Header", () => {

            render(
                <MemoryRouter>
                    <App />
                 </MemoryRouter>
            )

            expect(screen.getByText("Find An API")).toBeInTheDocument()
            expect(screen.getByAltText("To Favorites heart icon")).toBeInTheDocument()

        })

        it("should render a Home", () => {

            render(
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            )

            expect(screen.getByText("Get Random API")).toBeInTheDocument()

        })

    })
   
})

