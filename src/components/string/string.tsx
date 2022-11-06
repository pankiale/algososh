import React, {useCallback, useEffect, useState} from "react";
import {SolutionLayout} from "../ui/solution-layout/solution-layout";
import {Circle} from "../ui/circle/circle";
import {Input} from "../ui/input/input";
import {Button} from "../ui/button/button";
import styles from "./string.module.css";
import {useDispatch, useSelector} from "../../services/hooks/hooks";
import {TText} from "../../services/types/data";
import {ElementStates} from "../../services/types/element-states";
import {
    algHasStartedAction,
    algHasStoppedAction,
    getDataForSortAction,
    moveElementAction, pageLeftAction
} from "../../services/actions/alg";
import {pause} from "../../utils";

export const StringComponent: React.FC = () => {
    const {isLoader, isFinished, text} = useSelector(state => state.alg)
    const dispatch = useDispatch();
    const [form, setValue] = useState ({text: ''});
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({...form, [e.target.name]: e.target.value });
    };

    const createArrayForSort = (form: {text:string}) => {
        const text = form.text.split('');
        const result: TText[] = [];
        for (let i = 0; i < text.length; i++) {
            result[i] = {letter: text[i], state: ElementStates.Default }
        };
        return result;
    }

    const sortArray = async (array: TText[]) => {
        let end = array.length -1;

        for (let i = 0; i <= end; i++) {
            let temp = array[end];
            dispatch(moveElementAction(end, array[end].letter, ElementStates.Changing));
            dispatch(moveElementAction(i, array[i].letter, ElementStates.Changing));
            await pause(1000);
            dispatch(moveElementAction(end, array[i].letter, ElementStates.Modified));
            dispatch(moveElementAction(i, temp.letter, ElementStates.Modified));
            end --;
        };

        dispatch(algHasStoppedAction());

        return array
    }

    const onSubmit = useCallback(
        (e:React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            dispatch(algHasStartedAction());
            const array = createArrayForSort(form)
            dispatch(getDataForSortAction(array));
            setValue({text: ''});
            sortArray(array);
        },
        [form]
    );

    useEffect(()=>{
        return () => { dispatch(pageLeftAction())
        }
    }, []);

    return (
        <SolutionLayout title="Строка">
            <form className={styles.box} onSubmit={onSubmit} >
                <Input maxLength={11} name={'text'} isLimitText={true} value={form.text} onChange={onChange} />
                <Button text={'Развернуть'} type={"submit"} extraClass={styles.button} isLoader={isLoader}/>
            </form>
            <div className={styles.textbox}>
                {!isLoader && !isFinished && form.text.split('').map(item => <Circle letter={item} />
                )}
                {isLoader && text.map(item => <Circle letter={item.letter} state={item.state} />
                )}
                {!isLoader && isFinished && text.map(item => <Circle letter={item.letter} state={item.state} />
                )}

            </div>
        </SolutionLayout>
    );
};
