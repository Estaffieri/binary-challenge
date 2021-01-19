import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event"
import { getAllCategories } from "../../apiCalls";
import SearchForm from "./SearchForm";
jest.mock("../../apiCalls");

describe("SEARCHFORM TESTS", () => {

    describe("Unit Tests", () => {


        it("should render a SearchForm", () => {

            render(
                <MemoryRouter>
                    <SearchForm />
                </MemoryRouter>
            )

            expect(screen.getByText("Select A Category:")).toBeInTheDocument()
            expect(screen.getByRole("search")).toBeInTheDocument()

        })

        it("should fillout Form", () => {

            render(
                <MemoryRouter>
                    <SearchForm />
                </MemoryRouter>
            )

            expect(screen.getByText("Select A Category:")).toBeInTheDocument()
            expect(screen.getByRole("search")).toBeInTheDocument()

        })


        it("should fire function", () => {
            const mockedFunction = jest.fn()
            getAllCategories.mockResolvedValue(["Animals"])

            render(
                <MemoryRouter>
                    <SearchForm
                        getSearchResults={mockedFunction}
                    />
                </MemoryRouter>
            )
            
                screen.debug()
            expect(screen.getByText("Search")).toBeInTheDocument()
            expect(screen.getByRole("search")).toBeInTheDocument()
            userEvent.click(screen.getByTestId("drop-down"))
            userEvent.click(screen.getByText("Search"))
            expect(mockedFunction).toHaveBeenCalled()

        })


    })

})

