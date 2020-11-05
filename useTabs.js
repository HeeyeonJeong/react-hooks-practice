//useTab hook
export const useTabs = (initialTab, allTabs) => {
  //에러확인용도 - content없거나, 배열이 아닐때 return
    if(!allTabs || !Array.isArray(allTabs)){
        return;
    }
    const [currentIndex, setCurrentIndex] = useState(initialTab);

    return{
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    }
}