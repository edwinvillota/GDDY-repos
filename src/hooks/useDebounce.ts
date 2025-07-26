import { useEffect, useState } from 'react';

export function useDebounce<TValue>(value: TValue, miliseconds: number) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, miliseconds);

		return () => {
			clearTimeout(handler);
		};
	}, [value, miliseconds]);

	return debouncedValue;
}
