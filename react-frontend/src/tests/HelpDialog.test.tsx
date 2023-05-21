
import { describe, test, expect, beforeEach } from "vitest";
import { screen, waitFor, fireEvent } from '@testing-library/react';
import { TEST_ID_HELP_BUTTON } from "../components/buttons/HelpButton.tsx";
import { TEST_ID_HELP_DIALOG, TEST_ID_HELP_DIALOG_DISMISS } from "../components/dialogs/HelpDialog.tsx";
import { renderApp } from "./helpers/renderApp.tsx";

describe("HelpDialog", () => {

	beforeEach(() => {
		renderApp()
	})

	test("Visibility of HelpDialog is toggled when HelpButton is clicked", async () => {

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
