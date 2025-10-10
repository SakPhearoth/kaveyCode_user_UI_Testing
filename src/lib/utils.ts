// Minimal className utility used by UI components.
// Supports strings, arrays and objects (truthy keys only).
export function cn(...inputs: any[]): string {
	return inputs
		.flat()
		.filter(Boolean)
		.map((item) => {
			if (typeof item === 'string' || typeof item === 'number') return String(item);
			if (Array.isArray(item)) return item.join(' ');
			if (typeof item === 'object' && item !== null)
				return Object.keys(item).filter((k) => (item as any)[k]).join(' ');
			return '';
		})
		.filter(Boolean)
		.join(' ');
}

export default cn;
