
import { describe, test, assert, vi, expect } from "vitest";
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from "react-redux";
import store from "../state/store.ts"
import { getQuiz } from "../services/data.service.ts";
import axios from "axios";
import App from "../App.tsx";
import { MOCK_QUIZ } from "./mocks/quiz.ts";
import { TEST_ID_HELP_BUTTON } from "../components/buttons/HelpButton.tsx";
import { TEST_ID_HELP_DIALOG, TEST_ID_HELP_DIALOG_DISMISS } from "../components/dialogs/HelpDialog.tsx";

describe("HelpDialog", () => {
	test("HelpDialog is displayed when HelpButton is clicked", async () => {
		const spy = vi.spyOn(axios, "get").mockResolvedValue({ data: MOCK_QUIZ })

		// render App component
    	render(
    		<Provider store={store}>
    			<App/>
    		</Provider>
    	);

    	// wait for HelpButton to be rendered
    	const HelpButton = await waitFor(() => screen.getByTestId(TEST_ID_HELP_BUTTON));

    	// assert that HelpDialog is NOT visible
    	const HelpDialog = screen.getByTestId(TEST_ID_HELP_DIALOG)
    	expect(HelpDialog.classList.contains("is-active")).toBe(false);

    	// click HelpButton
    	fireEvent.click(HelpButton)

    	// assert that HelpDialog is visible
    	expect(HelpDialog.classList.contains("is-active")).toBe(true);

    	// click dismiss button
    	const dismissButton = screen.getByTestId(TEST_ID_HELP_DIALOG_DISMISS)
    	fireEvent.click(dismissButton);

    	// assert that HelpDialog is NOT visible
    	expect(HelpDialog.classList.contains("is-active")).toBe(false);
	})
})
