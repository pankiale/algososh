import React, {useEffect, useState} from "react";
import {SolutionLayout} from "../ui/solution-layout/solution-layout";
import styles from "../fibonacci-page/fibonacci.module.css";
import {Input} from "../ui/input/input";
import {Button} from "../ui/button/button";
import {Circle} from "../ui/circle/circle";
import {
  addNumberAction,
  algHasStartedAction,
  algHasStoppedAction,
  clearArrayAction, pageLeftAction,
} from "../../services/actions/alg";
import {useDispatch, useSelector} from "../../services/hooks/hooks";
import {pause} from "../../utils";

export const FibonacciPage: React.FC = () => {
  const {isLoader, number} = useSelector(state => state.alg);
  const dispatch = useDispatch();
  const [form, setValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const fib = (n: number): number[] => {
    let arr: number[] = [0,1];
    if (n === 0) return [0];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
    return arr;
  }

  const plotArray = async (array: number[]) => {
    for (let i = 0; i < array.length; i++) {
      dispatch(addNumberAction(array[i]));
      await pause(500);
    };
  }

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form === '') return alert('Введите число');
    dispatch(algHasStartedAction());
    dispatch(clearArrayAction('number'))
    const array = fib(Number(form));
    plotArray(array)
        .then(()=> setValue(''))
        .then(()=> dispatch(algHasStoppedAction()));
  };

  useEffect(()=>{
    return () => { dispatch(pageLeftAction())
    }
  }, []);

  return (
      <SolutionLayout title="Последовательность Фибоначчи">

        <form className={styles.box} onSubmit={onSubmit} >
          <Input type={'number'} max={19} name={'number'} isLimitText={true} value={form} onChange={onChange} />
          <Button text={'Рассчитать'} type={"submit"} extraClass={styles.button} isLoader={isLoader}/>
        </form>
        <div className={styles.textbox}>
          {number.map((item, index) =>
              <Circle letter={String(item)} index={index} key={index}/>
          )}
        </div>
      </SolutionLayout>
  );
};
