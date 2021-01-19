import React from "react";
import { render, screen } from "@testing-library/react";
import  userEvent  from "@testing-library/user-event"
import DetailCard from "./DetailCard";


describe("DetailCards", () => {
  
    describe("Unit Tests", () => {
        const mockAddToFavorites = jest.fn()
        const entry = {
            API: "Estelle Facts",
            Description: "Daily Estelle Facts",
            Auth: "",
            HTTPS: true,
            Cors: "no",
            Link: "https://linktonowhere.com",
            Category: "Animals"
        }

        render(
            <DetailCard entry={entry} key={1}
                addToFavorites={mockAddToFavorites}
            />
        )

        it("should render a detail card", () => {
           
            expect(screen.getByText("Estelle Facts")).toBeInTheDocument()
            expect(screen.getByText("Daily Estelle Facts")).toBeInTheDocument()
            expect(screen.getByText("no")).toBeInTheDocument()
            expect(screen.getByText("https://linktonowhere.com")).toBeInTheDocument()
            expect(screen.getByText("Animals")).toBeInTheDocument()

        })

        it("should render with an img", () => {
            const mockAddToFavorites = jest.fn()
            const entry = {
                API: "Estelle Facts",
                Description: "Daily Estelle Facts",
                Auth: "",
                HTTPS: true,
                Cors: "no",
                Link: "https://linktonowhere.com",
                Category: "Animals"
            }

            render(
                <DetailCard entry={entry} key={1}
                    addToFavorites={mockAddToFavorites}
                />
            )
          
            expect(screen.getByText("Estelle Facts")).toBeInTheDocument()
            expect(screen.getByText("Daily Estelle Facts")).toBeInTheDocument()
            expect(screen.getByText("no")).toBeInTheDocument()
            expect(screen.getByText("https://linktonowhere.com")).toBeInTheDocument()
            expect(screen.getByText("Animals")).toBeInTheDocument()
            expect(screen.getByAltText("inactive favorite icon")).toBeInTheDocument()
          
        })
    })

    describe("Integration Tests", () => {

        it("Should invoke a function when clicked", () => {
            const mockAddToFavorites = jest.fn()
            const entry = {
                API: "Estelle Facts",
                Description: "Daily Estelle Facts",
                Auth: "",
                HTTPS: true,
                Cors: "no",
                Link: "https://linktonowhere.com",
                Category: "Animals"
            }

            render(
            <DetailCard entry={entry} key={1}
                addToFavorites={mockAddToFavorites}
            />
            )
            
            const inactiveFav = screen.getByAltText("inactive favorite icon")
            expect(screen.getByText("Estelle Facts")).toBeInTheDocument()
            expect(screen.getByText("Daily Estelle Facts")).toBeInTheDocument()
            expect(screen.getByText("no")).toBeInTheDocument()
            expect(screen.getByText("https://linktonowhere.com")).toBeInTheDocument()
            expect(screen.getByText("Animals")).toBeInTheDocument()
            expect(inactiveFav).toBeInTheDocument()
            userEvent.click(inactiveFav)
            expect(mockAddToFavorites).toHaveBeenCalled()
        })
    })
})
