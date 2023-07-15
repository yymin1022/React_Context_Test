import React, {createContext, useState} from "react";

export interface DiaryData{
    title: string,
    content: string
}

export const TestContext = createContext({
    diaryList: Array<DiaryData>(),
    setDiaryList: (diary: DiaryData) => {}
});

const TestContextProvider = ({children}: any) => {
    const [diaryListProvider, setDiaryListProvider] = useState<Array<DiaryData>>([]);

    const setDiaryHandler = (diary: DiaryData) => {
        setDiaryListProvider([...diaryListProvider, diary]); // 이렇게해야 기존리스트 다음에 새 아이템이 추가됨
    };

    return(
        <TestContext.Provider value={{diaryList: diaryListProvider, setDiaryList: setDiaryHandler}}>
            {children}
        </TestContext.Provider>

    )
}

export default TestContextProvider;