import React from "react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event"
import DetailCard from "./DetailCard";


describe("DetailCards", () => {
    describe("Unit Tests", () => {

        it("should render a detail card", () => {
            const entry = {
                API: "Estelle Facts",
                Description: "Daily Estelle Facts",
                Auth: "",
                HTTPS: true,
                Cors: "no",
                Link: "https://linktonowhere.com",
                Category: "Animals"
            }

            const addToFavorites = jest.fn()

            render(<DetailCard entry={entry} key={1}
                addToFavorites={addToFavorites}
            />
            )
            expect(screen.getByText("Estelle Facts")).toBeInTheDocument()
            expect(screen.getByText("Daily Estelle Facts")).toBeInTheDocument()
            expect(screen.getByText("no")).toBeInTheDocument()
            expect(screen.getByText("https://linktonowhere.com")).toBeInTheDocument()
            expect(screen.getByText("Animals")).toBeInTheDocument()

        })

        it("should render with an img", () => {
            const entry = {
                API: "Estelle Facts",
                Description: "Daily Estelle Facts",
                Auth: "",
                HTTPS: true,
                Cors: "no",
                Link: "https://linktonowhere.com",
                Category: "Animals"
            }

            const addToFavorites = jest.fn()

            render(<DetailCard entry={entry} key={1}
                addToFavorites={addToFavorites}
            />
            )
            expect(screen.getByAltText("inactive favorite icon")).toBeInTheDocument()
          
        })
    })
})
