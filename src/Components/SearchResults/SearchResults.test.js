import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
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

        it("should display search results", () => {
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
                        stateOfHome={entry}
                        addToFavorites={mockAddToFavorites}
                    />
                </MemoryRouter>
            )

            expect(screen.getByText("Search Results")).toBeInTheDocument()
            expect(screen.getByText("Estelle Facts")).toBeInTheDocument()
            expect(screen.getByText("Daily Estelle Facts")).toBeInTheDocument()
            expect(screen.getByText("no")).toBeInTheDocument()
            expect(screen.getByText("https://linktonowhere.com")).toBeInTheDocument()
            expect(screen.getByText("Animals")).toBeInTheDocument()

        })

    })

})