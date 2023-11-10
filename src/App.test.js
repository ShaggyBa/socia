import { createRoot } from 'react-dom/client';
import { MainApp } from './MainApp';
import React from 'react';

test('renders without crashing', () => {
	const container = document.createElement('div');
	const root = createRoot(container);
	root.render(<MainApp tab="home" />);
	root.unmount();
});

// const square = (x) => {
// 	if (x === 1)
// 		return 1
// 	return Math.pow(x, 2)
// }

// describe("square", () => {
// 	test('square', () => {
// 		expect(square(1)).toBe(1)

// 		expect(square(2)).toBeLessThan(5)
// 		const spyMath = jest.spyOn(Math, 'pow')
// 		square(2)
// 		expect(spyMath).toBeCalledTimes(0)
// 	})
// })