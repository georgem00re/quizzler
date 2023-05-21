
import { describe, test, expect, beforeEach } from "vitest";
import { screen, waitFor, fireEvent } from '@testing-library/react';
import { TEST_ID_HELP_BUTTON } from "../components/buttons/HelpButton.tsx";
import { TEST_ID_HELP_DIALOG, TEST_ID_HELP_DIALOG_DISMISS } from "../components/dialogs/HelpDialog.tsx";
import { renderApp } from "./helpers/renderApp.tsx";

describe("HelpDialog", () => {

	beforeEach(() => {
		renderApp()
	})

	test("HelpDialog is visible when HelpButton is clicked and NOT visible when dismissed", async () => {

    	// wait for HelpButton to be rendered
    	const helpButton = await waitFor(() => screen.getByTestId(TEST_ID_HELP_BUTTON));

    	// assert that HelpDialog is NOT visible
    	const helpDialog = screen.getByTestId(TEST_ID_HELP_DIALOG)
    	expect(helpDialog.classList.contains("is-active")).toBe(false);

    	// click HelpButton
    	fireEvent.click(helpButton)

    	// assert that HelpDialog is visible
    	expect(helpDialog.classList.contains("is-active")).toBe(true);

    	// click dismiss button
    	const dismissButton = screen.getByTestId(TEST_ID_HELP_DIALOG_DISMISS)
    	fireEvent.click(dismissButton);

    	// assert that HelpDialog is NOT visible
    	expect(helpDialog.classList.contains("is-active")).toBe(false);
	})
})
