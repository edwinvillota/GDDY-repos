import type { ServiceName } from '@/common/constants/services';
import SERVICES from '@/common/constants/services';

export const getServiceInfo = (service: ServiceName) => {
	if (service in SERVICES) {
		return SERVICES[service];
	}

	throw new Error(
		'Service information could not be retrieved. Please check your configuration and environment variables.',
	);
};
