import React, {useContext, useEffect, useState} from 'react';
import TestContextProvider, {DiaryData, TestContext} from "./TestContext";

const App = () => {
    return (
        <TestContextProvider>
            <UseTestContext />
        </TestContextProvider>
    );
}

const UseTestContext = () => {
    const {diaryList, setDiaryList} = useContext(TestContext);
    const [num, setNum] = useState(0);
    const addDiary = () => {
        setDiaryList({title: `일기 ${num}`, content: "내용......."});
        setNum(num + 1);
    }

    return (
        <>
            <button onClick={addDiary}>일기 추가하기</button>
            {
                diaryList.map((diaryItem) => {
                    return (
                        <>
                            <h2>{diaryItem.title}</h2>
                            <p>{diaryItem.content}</p>
                        </>
                    );
                })
            }
        </>
    );
}

export default App;
