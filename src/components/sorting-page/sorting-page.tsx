import React from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";

export const SortingPage: React.FC = () => {

  const random = (minLen: number = 3, maxLen: number = 17): number[] => {
    let arr: number[] = [];
    let arrLength = Math.floor((Math.random())*(maxLen-minLen+1))+minLen;
    arrLength
    let n = 0
    while (n < arrLength) {
      arr.push(Math.floor(Math.random()*101));
      n ++
    };
    return arr;
  }


  return (
    <SolutionLayout title="Сортировка массива">

    </SolutionLayout>
  );
};
