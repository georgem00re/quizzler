
import { describe, test, expect, beforeEach } from "vitest";
import { screen, waitFor, fireEvent } from '@testing-library/react';
import {within} from '@testing-library/dom'
import { TEST_ID_STATS_BUTTON } from "../components/buttons/StatsButton.tsx";
import { TEST_ID_STATS_DIALOG, TEST_ID_STATS_DIALOG_DISMISS } from "../components/dialogs/StatsDialog.tsx";
import { TEST_ID_QUESTION_CONTAINER } from "../components/containers/QuestionContainer.tsx";
import { TEST_ID_ANSWER_BUTTON } from "../components/buttons/AnswerButton.tsx";
import { renderApp } from "./helpers/renderApp.tsx";

describe("StatsDialog", () => {

	beforeEach(() => {
		renderApp();
	})

	test("StatsDialog is visible when StatsButton is clicked and NOT visible when dismissed", async () => {

    	// wait for StatsButton to be rendered
    	const statsButton = await waitFor(() => screen.getByTestId(TEST_ID_STATS_BUTTON));

    	// assert that StatsDialog is NOT visible
    	const statsDialog = screen.getByTestId(TEST_ID_STATS_DIALOG)
    	expect(statsDialog.classList.contains("is-active")).toBe(false);

    	// click StatsButton
    	fireEvent.click(statsButton)

    	// assert that StatsDialog is visible
    	expect(statsDialog.classList.contains("is-active")).toBe(true);

    	// click dismiss button
    	const dismissButton = screen.getByTestId(TEST_ID_STATS_DIALOG_DISMISS)
    	fireEvent.click(dismissButton);

    	// assert that StatsDialog is NOT visible
    	expect(statsDialog.classList.contains("is-active")).toBe(false);
	})

	test.skip("StatsDialog is visible immediately after a quiz is completed", async () => {

		// wait for QuestionContainers to be rendered
		const questionContainers = await waitFor(() => screen.getAllByTestId(TEST_ID_QUESTION_CONTAINER));

		// assert that StatsDialog is NOT visible
		const statsDialog = screen.getByTestId(TEST_ID_STATS_DIALOG)
    	expect(statsDialog.classList.contains("is-active")).toBe(false);

    	// loop over each question and select the first answer
    	for (const question of questionContainers) {
    		const answerButton = within(question).getAllByTestId(TEST_ID_ANSWER_BUTTON)[0];
    		fireEvent.click(answerButton);
    	}

    	// assert that StatsDialog is visible
    	expect(statsDialog.classList.contains("is-active")).toBe(true);
	})
})
