
import { describe, test, assert, vi } from "vitest";
import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import store from "../state/store.ts"
import { getQuiz } from "../services/data.service.ts";
import axios from "axios";
import App from "../App.tsx";
import { MOCK_QUIZ } from "./mocks/quiz.ts";

describe("App", () => {
	test("render application", () => {
		const spy = vi.spyOn(axios, "get").mockResolvedValue({ data: MOCK_QUIZ })
    	render(
    		<Provider store={store}>
    			<App/>
    		</Provider>
    	);
	})
})
