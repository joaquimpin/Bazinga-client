import React, { useEffect, useState } from 'react';
import styles from './final-ranking.module.scss';
import { animated, useTrail } from 'react-spring';


// const data = [
// 	{
// 		user: 'First',
// 		score: 2000,
// 		_id: 1,
// 		height: 70
// 	},
// 	{
// 		user: 'Saint Petersburg',
// 		score: 1900,
// 		_id: 12,
// 		height: 70
// 	},
// 	{
// 		user: 'Deep Blue',
// 		score: 1800,
// 		_id: 13,
// 		height: 70
// 	},
// 	{
// 		user: 'Rare Wind',
// 		score: 1700,
// 		_id: 14,
// 		height: 70
// 	},
// 	{
// 		user: 'Saint Petersburg',
// 		score: 1600,
// 		_id: 15,
// 		height: 70
// 	},
// 	{
// 		user: 'Deep Blue',
// 		score: 1700,
// 		_id: 16,
// 		height: 70
// 	},
// 	{
// 		user: 'Rare Wind',
// 		score: 1600,
// 		_id: 17,
// 		height: 70
// 	},
// 	{
// 		user: 'Saint Petersburg',
// 		score: 1500,
// 		_id: 18,
// 		height: 70
// 	},
// 	{
// 		user: 'Deep Blue',
// 		score: 1400,
// 		_id: 19,
// 		height: 70
// 	},
// 	{
// 		user: 'Rare Wind',
// 		score: 1300,
// 		_id: 20,
// 		height: 70
// 	},
// 	{
// 		user: 'Saint Petersburg',
// 		score: 1200,
// 		_id: 21,
// 		height: 70
// 	},
// 	{
// 		user: 'Last',
// 		score: 1100,
// 		_id: 22,
// 		height: 70
// 	}
// ];

const config = {mass: 5, tension: 2000, friction: 400};

export const FinalRanking = ({style, ranking}) => {
	const [rows, set] = useState([]);

	useEffect(() => {
		set(ranking);
	}, [ranking]);

	const trail = useTrail(rows.length, {
		config,
		opacity: 1,
		x: 0,
		height: 120,
		delay: 1000,
		from: {opacity: 0, x: 20, height: 0},
	});

	const getPosition = (rows, index) => {
		const realIndex = rows.length - index;
		switch (realIndex) {
			case 1:
				return <img src={process.env.PUBLIC_URL + `/assets/images/gold.png`} alt={'position'}/>;
			case 2:
				return <img src={process.env.PUBLIC_URL + `/assets/images/silver.png`} alt={'position'}/>;
			case 3:
				return <img src={process.env.PUBLIC_URL + `/assets/images/bronce.png`} alt={'position'}/>;
			default:
				return <>{rows.length - index}.</>
		}
	};


	return (
		<div style={{...style}} className={styles.container}>
			<img className={styles.fireworks}
				 src={process.env.PUBLIC_URL + '/assets/images/fire3.gif'}
				 alt={'fireworks'}/>

			<div className={styles.title}>Final Result!!!</div>
			<div className={styles.trailsMain}>
				{trail.map(({x, height, ...rest}, index) => (
					<animated.div
						key={rows[index]._id}
						className={styles.trailsText}
						style={{...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`)}}>
						<animated.div style={{height}}>
							<button className={`btn-category ${styles.trailsText}`}>
								{getPosition(rows, index)}
								<span>{rows[index].user}</span>
								<div>{rows[index].score}</div>
							</button>
						</animated.div>
					</animated.div>
				))}
			</div>
		</div>

	)
};