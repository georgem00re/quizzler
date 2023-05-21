
import { describe, test, assert, vi, expect } from "vitest";
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from "react-redux";
import store from "../state/store.ts"
import { getQuiz } from "../services/data.service.ts";
import axios from "axios";
import App from "../App.tsx";
import { MOCK_QUIZ } from "./mocks/quiz.ts";
import { TEST_ID_STATS_BUTTON } from "../components/buttons/StatsButton.tsx";
import { TEST_ID_STATS_DIALOG, TEST_ID_STATS_DIALOG_DISMISS } from "../components/dialogs/StatsDialog.tsx";

describe("StatsDialog", () => {
	test("StatsDialog is displayed when StatsButton is clicked", async () => {
		const spy = vi.spyOn(axios, "get").mockResolvedValue({ data: MOCK_QUIZ })

		// render App component
    	render(
    		<Provider store={store}>
    			<App/>
    		</Provider>
    	);

    	// wait for StatsButton to be rendered
    	const StatsButton = await waitFor(() => screen.getByTestId(TEST_ID_STATS_BUTTON));

    	// assert that StatsDialog is NOT visible
    	const StatsDialog = screen.getByTestId(TEST_ID_STATS_DIALOG)
    	expect(StatsDialog.classList.contains("is-active")).toBe(false);

    	// click StatsButton
    	fireEvent.click(StatsButton)

    	// assert that StatsDialog is visible
    	expect(StatsDialog.classList.contains("is-active")).toBe(true);

    	// click dismiss button
    	const dismissButton = screen.getByTestId(TEST_ID_STATS_DIALOG_DISMISS)
    	fireEvent.click(dismissButton);

    	// assert that StatsDialog is NOT visible
    	expect(StatsDialog.classList.contains("is-active")).toBe(false);
	})
})
