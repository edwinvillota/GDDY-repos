export type ExtractPropertiesByType<TObject, TExtract> = {
	[K in keyof TObject]: TObject[K] extends TExtract ? K : never;
}[keyof TObject];
