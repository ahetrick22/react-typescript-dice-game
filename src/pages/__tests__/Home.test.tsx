import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {Home} from "../Home";


describe("<Home />", () => {
    test("renders without crashing", async () => {
        render(<Home />);
    });
});