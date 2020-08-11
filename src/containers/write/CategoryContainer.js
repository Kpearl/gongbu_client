import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryBox from '../../components/write/CategoryBox';
import { changeField } from '../../modules/write'

const CategoryContainer = () => {
    const dispatch = useDispatch();
    const categorys = useSelector(state => state.write.categorys);

    const onChangeCategorys = nextCategorys => {
        dispatch(
            changeField({
                key: 'categorys',
                value: nextCategorys,
            }),
        );
    };
    return <CategoryBox onChangeCategorys={onChangeCategorys} categorys={categorys} />;
};

export default CategoryContainer;