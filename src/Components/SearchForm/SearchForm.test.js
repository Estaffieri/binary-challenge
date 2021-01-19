import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event"
import { getRandomApi } from "../../apiCalls";
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

    })

})

