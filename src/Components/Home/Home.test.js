import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event"
import { getRandomApi } from "../../apiCalls";
import Home from "./Home";
jest.mock("../../apiCalls");

describe("HOME TESTS", () => {

    describe("Unit Tests", () => {


        it("should render a Home page", () => {

            render(
                <MemoryRouter>
                    <Home/>
                </MemoryRouter>
            )

            expect(screen.getByText("Get Random API")).toBeInTheDocument()
    
        })
    })

    describe("Integration Tests", () => {


        it("should fire a function when clicked", () => {
            const entry = {
                API: "Estelle Facts",
                Description: "Daily Estelle Facts",
                Auth: "",
                HTTPS: true,
                Cors: "no",
                Link: "https://linktonowhere.com",
                Category: "Animals"
            }
            
            getRandomApi.mockResolvedValueOnce({entries: {entry}})
            render(
                <MemoryRouter>
                    <Home/>
                </MemoryRouter>
            )


            const getRandomApiButton = screen.getByText("Get Random API")
            expect(screen.getByText("Get Random API")).toBeInTheDocument()
            userEvent.click(getRandomApiButton)
            expect(getRandomApi).toHaveBeenCalled()

        })
    })
})
