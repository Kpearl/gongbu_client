import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryBox from '../../components/write/CategoryBox';
import { changeField } from '../../modules/write'

const CategoryContainer = () => {
    const dispatch = useDispatch();
    const categorys = useSelector(state => state.write.categorys);

    const onChangeCategorys = nextCategory => {
        dispatchEvent(
            changeField({
                key: 'categorys',
                value: nextCategory,
            }),
        );
    };

    return <CategoryBox onChangeCategorys={onChangeCategorys} categorys={categorys} />;
};

export default CategoryContainer;