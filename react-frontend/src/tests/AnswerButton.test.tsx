
import { describe, test, expect, beforeEach } from "vitest";
import { screen, waitFor, fireEvent } from '@testing-library/react';
import { within } from '@testing-library/dom';
import { TEST_ID_ANSWER_BUTTON } from "../components/buttons/AnswerButton.tsx";
import { TEST_ID_QUESTION_CONTAINER } from "../components/containers/QuestionContainer.tsx";
import { renderApp } from "./helpers/renderApp.tsx";

describe("AnswerButton", () => {

	beforeEach(() => {
		renderApp()
	})

	test("AnswerButtons are disabled immediately after a question is answered", async () => {

    	// wait for QuestionContainers to be rendered
    	const questionContainers = await waitFor(() => screen.getAllByTestId(TEST_ID_QUESTION_CONTAINER));

    	// loop over each question 
    	for (const question of questionContainers) {

    		// assert that each AnswerButton is enabled
    		const answerButtons = within(question).getAllByTestId(TEST_ID_ANSWER_BUTTON);
    		for (const answerButton of answerButtons) {
    			expect(answerButton).toBeEnabled();
    		}

    		// click the first answer button
    		fireEvent.click(answerButtons[0]);

    		// assert that each AnswerButton is now disabled
    		for (const answerButton of answerButtons) {
    			expect(answerButton).toBeDisabled();
    		}
    	}
	})
})