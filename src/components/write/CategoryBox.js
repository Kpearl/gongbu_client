import React, { useState, useCallback, useEffect } from 'react';
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

const CategoryForm = styled.form`
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

const CategoryItem = React.memo(({ category, onRemove
}) => (
        <Category onClick={() => onRemove(category)}>{category}</Category>
    ));

const CategoryList = React.memo(({ categorys, onRemove }) => (
    <CategoryListBlock>
        {categorys.map(category => (
            <CategoryItem key={category} category={category} onRemove={onRemove} />
        ))}
    </CategoryListBlock>
));

const CategoryBox = ({ categorys, onChangeCategorys }) => {
    const [input, setInput] = useState('');
    const [localCategorys, setLocalCategorys] = useState([]);

    const insertCategory = useCallback(
        category => {
            if (!category) return;
            if (localCategorys.includes(category)) return;
            const nextCategorys = [...localCategorys, category];
            setLocalCategorys(nextCategorys);
            onChangeCategorys(nextCategorys);
        },
        [localCategorys, onChangeCategorys],
    );

    const onRemove = useCallback(
        category => {
            const nextCategorys = localCategorys.filter(c => c !== category);
            setLocalCategorys(nextCategorys);
            onChangeCategorys(nextCategorys);
        },
        [localCategorys, onChangeCategorys],
    );

    const onChange = useCallback(
        e => {
            setInput(e.target.value);
        }, []);

    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            insertCategory(input.trim());
            setInput('');
        },
        [input, insertCategory],
    );

    useEffect(() => {
        setLocalCategorys(categorys);
    }, [categorys]);

    return (
        <CategoryBlock>
            <h4>카테고리</h4>
            <CategoryForm onSubmit={onSubmit}>
                <input
                    placeholder="카테고리를 입력하세요."
                    value={input}
                    onChange={onChange} />
                <button type="submit">추가</button>
            </CategoryForm>
            <CategoryList categorys={localCategorys} onRemove={onRemove} />
        </CategoryBlock>
    );
};

export default CategoryBox;