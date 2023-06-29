import { classNames } from '@/shared/libs/classNames/classNames';
import styles from './styles.module.scss';
interface Props {
	day: number;
}

export const DayCell = ({ day }: Props) => {
	return <div className={classNames(styles.day)}>{day}</div>;
};
