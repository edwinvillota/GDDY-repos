import { act, renderHook } from '@testing-library/react';
import { useSearch } from '../useSearch';

interface Person {
	id: number;
	name: string;
	lastName: string;
	age: number;
}

const MOCKED_DATA: Person[] = [
	{
		id: 1,
		name: 'Jhon',
		lastName: 'Doe',
		age: 31,
	},
	{
		id: 2,
		name: 'Alice',
		lastName: 'Smith',
		age: 28,
	},
	{
		id: 3,
		name: 'Bob',
		lastName: 'Johnson',
		age: 35,
	},
	{
		id: 4,
		name: 'Carol',
		lastName: 'Williams',
		age: 24,
	},
	{
		id: 5,
		name: 'David',
		lastName: 'Brown',
		age: 40,
	},
];

describe('useSearch', () => {
	it('should return the initial Data if the query is empty', () => {
		const { result } = renderHook(() => useSearch(MOCKED_DATA, ['name']));

		expect(result.current.filteredData).toStrictEqual(MOCKED_DATA);
	});

	it('should return the filtered data', () => {
		vi.useFakeTimers();

		const { result } = renderHook(() =>
			useSearch(MOCKED_DATA, ['name', 'lastName', 'age']),
		);

		act(() => {
			result.current.setQuery('Jhon');
		});

		expect(result.current.isSearching).toBe(true);

		act(() => {
			vi.advanceTimersByTime(1000);
		});

		const resultIds = result.current.filteredData?.map((person) => person.id);

		expect(resultIds).toStrictEqual([1]);

		vi.useRealTimers();
	});

	it('should return empty filtered data', () => {
		vi.useFakeTimers();

		const { result } = renderHook(() => useSearch(MOCKED_DATA, ['age']));

		act(() => {
			result.current.setQuery('80');
		});

		act(() => {
			vi.advanceTimersByTime(1000);
		});

		expect(result.current.filteredData?.length).toBe(0);
	});
});
