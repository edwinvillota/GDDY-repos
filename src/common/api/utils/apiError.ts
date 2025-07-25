class APIError extends Error {
	private readonly errorData: string | null = null;
	public readonly status: number;
	public readonly message: string;

	constructor(status: number, message: string) {
		super(message);
		this.status = status;
		this.message = message;
	}
}

export default APIError;
