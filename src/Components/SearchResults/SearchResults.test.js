import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event"
import { getRandomApi } from "../../apiCalls";
import SearchResults from "./SearchResults";
jest.mock("../../apiCalls");

describe("SEARCHRESULTS TESTS", () => {

    describe("Unit Tests", () => {


        it("should render a SearchResults", () => {
            const mockAddToFavorites = jest.fn()


            const entry = [{
                API: "Estelle Facts",
                Description: "Daily Estelle Facts",
                Auth: "",
                HTTPS: true,
                Cors: "no",
                Link: "https://linktonowhere.com",
                Category: "Animals"
            }]

            render(
                <MemoryRouter>
                    <SearchResults 
                    stateOfHome = {entry}
                    addToFavorites={mockAddToFavorites}
                     />
                </MemoryRouter>
            )

            expect(screen.getByText("Search Results")).toBeInTheDocument()
        })

    })

})