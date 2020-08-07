import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const CategoryBlock = styled.div`
    width: 100%;
    border-top: 1px solid ${palette.gray[2]};
    padding-top: 2rem;

    h4 {
        color: ${palette.gray[8]};
        margin-top: 0;
        margin-bottom: 0.5rem;
    }
`;

const CategoryForm = styled.form `
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    width: 256px;
    border: 1px solid ${palette.gray[9]};
    input,
    button {
        outline: none;
        border: none;
        font-size: 1rem;
    }

    input {
        padding: 0.5rem;
        flex: 1;
        min-width: 0;
    }
    button {
        cursor: pointer;
        padding-right: 1rem;
        padding-left: 1rem;
        border: none;
        background: ${palette.gray[8]};
        color: white;
        font-weight: bold;
        &:hover {
            background: ${palette.gray[6]};
        }
    }
`;

const Category = styled.div`
    margin-right: 0.5rem;
    color: ${palette.gray[6]};
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
`;

const CategoryListBlock = styled.div`
    display: flex;
    margin-top: 0.5rem;
`;

const CategoryItem = React.memo(({category}) => <Category>{category}</Category>);

const CategoryList = React.memo(({categorys}) => (
    <CategoryListBlock>
        {categorys.map(category => (
            <CategoryItem key={category} category={category} />
        ))}
    </CategoryListBlock>
));

const CategoryBox = () => {
    return (
        <CategoryBlock>
            <h4>카테고리</h4>
            <CategoryForm>
                <input placeholder="카테고리를 입력하세요." />
                <button type="sybmit">추가</button>
            </CategoryForm>
            <CategoryList categorys={['생활비', '교통비']}></CategoryList>
        </CategoryBlock>
    )
}

export default CategoryBox;