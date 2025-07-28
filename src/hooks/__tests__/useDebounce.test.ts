import { act, renderHook, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { useDebounce } from '../useDebounce';

describe('useDebounce', () => {
	it('should return the initial value', () => {
		const { result } = renderHook(() => useDebounce('myValue', 200));

		expect(result.current).toBe('myValue');
	});

	it('should apply the delay to the debounced value', async () => {
		vi.useFakeTimers();

		const { result } = renderHook(() => {
			const [state, setState] = useState('myQuery');
			const debounced = useDebounce(state, 200);
			return { state, setState, debounced };
		});

		expect(result.current.debounced).toBe('myQuery');

		act(() => {
			result.current.setState('updatedQuery');
		});

		act(() => {
			vi.advanceTimersByTime(200);
		});

		expect(result.current.debounced).toBe('updatedQuery');

		vi.useRealTimers();
	});
});
