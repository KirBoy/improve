import { DayCell } from '@/shared/components/DayCell/DayCell';

const MainPage = () => {
	return (
		<div>
			<DayCell day={1} />
			<DayCell day={10} />
			<DayCell day={30} />
		</div>
	);
};

export default MainPage;
