import React, { useEffect, useState } from 'react';
import styles from '../game-settings.module.scss';
import { categoriesArray } from '../../../constants/setting.constants';


export const CategoryButton = ({value, label, imgSrcS, chooseCategory, selectedCategories}) => {
	const [isSelected, setIsSelected] = useState(selectedCategories.includes(value));

	useEffect(() => {
		setIsSelected(selectedCategories.includes(value)
			|| selectedCategories.length === categoriesArray.length - 1);
	}, [selectedCategories, value]);

	return (
		<>
			<button className={`${styles.category} ${!imgSrcS && styles.all}`}
					onClick={() => chooseCategory(value)}
					data-selected={isSelected}>
				{imgSrcS && <img src={imgSrcS} alt={'category'}/>}
				<span>{label}</span>
				{isSelected && <img className={styles.check}
									src={process.env.PUBLIC_URL + '/assets/images/check.png'}
									alt={'check-img'}/>}
			</button>
		</>
	)
};