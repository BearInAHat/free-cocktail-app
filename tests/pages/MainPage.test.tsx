import React from "react";
import { render, waitFor } from "@testing-library/react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { store } from "src/store";
import { MainPageLoader } from "Pages/MainPage/MainPage.loader";
import { getCocktailCodes, getIsCocktailsLoaded } from "Slices/cocktails";
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation((message) => {
    if (!message.includes("React Router Future Flag Warning")) {
      console.warn(message);
    }
  });
});

afterAll(() => {
  (console.warn as jest.Mock).mockRestore();
});

describe("MainPageLoader", () => {
  let dispatch: jest.Mock;
  let navigate: jest.Mock;

  beforeEach(() => {
    dispatch = jest.fn();
    navigate = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(dispatch);
    (useNavigate as jest.Mock).mockReturnValue(navigate);
  });

  it("calls fetchGetCocktails if cocktails are not loaded", async () => {
    const isCocktailsLoaded = false;
    const cocktailsCodes: string[] = [];
    (useSelector as jest.Mock).mockImplementation((selector) => {
      if (selector === getIsCocktailsLoaded) return isCocktailsLoaded;
      if (selector === getCocktailCodes) return cocktailsCodes;
      return null;
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPageLoader>
            <div>Test Children</div>
          </MainPageLoader>
        </MemoryRouter>
      </Provider>
    );
    expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
  });

  it("navigates to first cocktail route when cocktails are loaded", async () => {
    const isCocktailsLoaded = true;
    const cocktailsCodes = ["Mojito"];
    (useSelector as jest.Mock).mockImplementation((selector) => {
      if (selector === getIsCocktailsLoaded) return isCocktailsLoaded;
      if (selector === getCocktailCodes) return cocktailsCodes;
      return null;
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPageLoader>
            <div>Test Children</div>
          </MainPageLoader>
        </MemoryRouter>
      </Provider>
    );
    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith("/mojito");
    });
  });

  it("does not navigate if already on a cocktail route", async () => {
    const isCocktailsLoaded = true;
    const cocktailsCodes = ["Mojito"];
    const currentPath = "/mojito";
    Object.defineProperty(window, "location", {
      value: { pathname: currentPath },
      writable: true,
    });
    (useSelector as jest.Mock).mockImplementation((selector) => {
      if (selector === getIsCocktailsLoaded) return isCocktailsLoaded;
      if (selector === getCocktailCodes) return cocktailsCodes;
      return null;
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPageLoader>
            <div>Test Children</div>
          </MainPageLoader>
        </MemoryRouter>
      </Provider>
    );
    expect(navigate).not.toHaveBeenCalled();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
