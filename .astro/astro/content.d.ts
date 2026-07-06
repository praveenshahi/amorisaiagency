declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"agents": {
"chat/instagram-dm.md": {
	id: "chat/instagram-dm.md";
  slug: "instagram-dm";
  body: string;
  collection: "agents";
  data: any
} & { render(): Render[".md"] };
"chat/lead-qualification.md": {
	id: "chat/lead-qualification.md";
  slug: "lead-qualification";
  body: string;
  collection: "agents";
  data: any
} & { render(): Render[".md"] };
"chat/website-support.md": {
	id: "chat/website-support.md";
  slug: "website-support";
  body: string;
  collection: "agents";
  data: any
} & { render(): Render[".md"] };
"chat/whatsapp-agent.md": {
	id: "chat/whatsapp-agent.md";
  slug: "whatsapp-agent";
  body: string;
  collection: "agents";
  data: any
} & { render(): Render[".md"] };
"knowledge/compliance.md": {
	id: "knowledge/compliance.md";
  slug: "compliance";
  body: string;
  collection: "agents";
  data: any
} & { render(): Render[".md"] };
"knowledge/customer-docs.md": {
	id: "knowledge/customer-docs.md";
  slug: "customer-docs";
  body: string;
  collection: "agents";
  data: any
} & { render(): Render[".md"] };
"knowledge/document-intelligence.md": {
	id: "knowledge/document-intelligence.md";
  slug: "document-intelligence";
  body: string;
  collection: "agents";
  data: any
} & { render(): Render[".md"] };
"knowledge/internal-knowledge.md": {
	id: "knowledge/internal-knowledge.md";
  slug: "internal-knowledge";
  body: string;
  collection: "agents";
  data: any
} & { render(): Render[".md"] };
"operations/invoice-data-entry.md": {
	id: "operations/invoice-data-entry.md";
  slug: "invoice-data-entry";
  body: string;
  collection: "agents";
  data: any
} & { render(): Render[".md"] };
"operations/recruiting-agent.md": {
	id: "operations/recruiting-agent.md";
  slug: "recruiting-agent";
  body: string;
  collection: "agents";
  data: any
} & { render(): Render[".md"] };
"operations/reporting-agent.md": {
	id: "operations/reporting-agent.md";
  slug: "reporting-agent";
  body: string;
  collection: "agents";
  data: any
} & { render(): Render[".md"] };
"sales/crm-copilot.md": {
	id: "sales/crm-copilot.md";
  slug: "crm-copilot";
  body: string;
  collection: "agents";
  data: any
} & { render(): Render[".md"] };
"sales/lead-research.md": {
	id: "sales/lead-research.md";
  slug: "lead-research";
  body: string;
  collection: "agents";
  data: any
} & { render(): Render[".md"] };
"sales/outreach-agent.md": {
	id: "sales/outreach-agent.md";
  slug: "outreach-agent";
  body: string;
  collection: "agents";
  data: any
} & { render(): Render[".md"] };
"voice/ai-receptionist.md": {
	id: "voice/ai-receptionist.md";
  slug: "ai-receptionist";
  body: string;
  collection: "agents";
  data: any
} & { render(): Render[".md"] };
"voice/appointment-booking.md": {
	id: "voice/appointment-booking.md";
  slug: "appointment-booking";
  body: string;
  collection: "agents";
  data: any
} & { render(): Render[".md"] };
"voice/outbound-follow-up.md": {
	id: "voice/outbound-follow-up.md";
  slug: "outbound-follow-up";
  body: string;
  collection: "agents";
  data: any
} & { render(): Render[".md"] };
"voice/payment-reminders.md": {
	id: "voice/payment-reminders.md";
  slug: "payment-reminders";
  body: string;
  collection: "agents";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
