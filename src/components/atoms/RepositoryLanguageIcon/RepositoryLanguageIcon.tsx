import { type FC, lazy, Suspense } from 'react';
import type { IconBaseProps } from 'react-icons';
import { CgSearchLoading } from 'react-icons/cg';
import type { RepositoryLanguage } from '@/common/types/models/RepositoryLanguage';

const LANGUAGE_ICON = {
	'C#': lazy(() =>
		import('react-icons/tb').then((m) => ({ default: m.TbBrandCSharp })),
	),
	PHP: lazy(() => import('react-icons/fa').then((m) => ({ default: m.FaPhp }))),
	JavaScript: lazy(() =>
		import('react-icons/io5').then((m) => ({ default: m.IoLogoJavascript })),
	),
	Python: lazy(() =>
		import('react-icons/fa').then((m) => ({ default: m.FaPython })),
	),
	Ruby: lazy(() =>
		import('react-icons/di').then((m) => ({ default: m.DiRuby })),
	),
	Perl: lazy(() =>
		import('react-icons/gi').then((m) => ({ default: m.GiCamel })),
	),
	'Objective-C': lazy(() =>
		import('react-icons/vsc').then((m) => ({ default: m.VscFile })),
	),
} satisfies Record<RepositoryLanguage, React.ComponentType<IconBaseProps>>;

interface RepositoryLanguageIconProps extends IconBaseProps {
	language: RepositoryLanguage;
}

export const RepositoryLanguageIcon: FC<RepositoryLanguageIconProps> = ({
	language,
	...props
}) => {
	const Icon = LANGUAGE_ICON[language];

	if (!Icon) return <CgSearchLoading {...props} data-testid="default-icon" />;

	return (
		<Suspense
			fallback={
				<div
					role="progressbar"
					className="inline-block bg-neutral-600 animate-pulse rounded w-6 h-6"
					style={{
						height: props.size,
						width: props.size,
					}}
				/>
			}
		>
			<Icon {...props} data-testid={`icon-${language}`} />
		</Suspense>
	);
};
