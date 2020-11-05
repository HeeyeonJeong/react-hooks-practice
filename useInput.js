//useInput hook
export const useInput = (initialValue, vaildator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
        const {
            target: { value }
        } = e;

        let willUpdate = true;
        if (typeof vaildator === "function") {
            willUpdate = vaildator(value);
        }
        if (willUpdate) {
            setValue(value);
        }  
    };
    
    return { value, onChange };
};
