import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Favorites from "./Favorites";

describe("FAVORITES TESTS", () => {

    describe("Unit Tests", () => {
        
       
        it("should render a favorites page", () => {
            const mockAddToFavorites = jest.fn()
            
            render(
            <MemoryRouter>
                <Favorites
                    currentFavorites={[]}
                    addToFavorites={mockAddToFavorites}
                />
            </MemoryRouter>
            )

            expect(screen.getByText("No favorites yet -- let's add some!")).toBeInTheDocument()
            expect(screen.getByAltText("vector-broken-heart-with-band-aid")).toBeInTheDocument()
            expect(screen.queryByText("My Favorite APIs")).not.toBeInTheDocument()
        })

        it("should display favorite cards", () => {
            const mockAddToFavorites = jest.fn()

            render(
                <MemoryRouter>
                    <Favorites
                        currentFavorites={[{
                            API: "Estelle Facts",
                            Description: "Daily Estelle Facts",
                            Auth: "",
                            HTTPS: true,
                            Cors: "no",
                            Link: "https://linktonowhere.com",
                            Category: "Animals"
                        }]}
                        addToFavorites={mockAddToFavorites}
                    />
                </MemoryRouter>
            )
            expect(screen.getByText("My Favorite APIs")).toBeInTheDocument()
            expect(screen.queryByText("No favorites yet -- let's add some!")).not.toBeInTheDocument()
            expect(screen.queryByAltText("vector-broken-heart-with-band-aid")).not.toBeInTheDocument()
        })
    })
})
