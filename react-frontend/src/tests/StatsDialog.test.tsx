
import { describe, test, expect, beforeEach } from "vitest";
import { screen, waitFor, fireEvent } from '@testing-library/react';
import { TEST_ID_STATS_BUTTON } from "../components/buttons/StatsButton.tsx";
import { TEST_ID_STATS_DIALOG, TEST_ID_STATS_DIALOG_DISMISS } from "../components/dialogs/StatsDialog.tsx";
import { renderApp } from "./helpers/renderApp.tsx";

describe("StatsDialog", () => {

	beforeEach(() => {
		renderApp();
	})

	test("StatsDialog is visible when StatsButton is clicked and NOT visible when dismissed", async () => {

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
