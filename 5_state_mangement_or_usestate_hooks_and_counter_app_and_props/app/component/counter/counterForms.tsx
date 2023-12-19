 'use client'
import React from 'react'
import MeButton from "./button";
import StudentType from "./type/type"
import { useState } from 'react';

export default function CounterForms() {
  const students: StudentType[] = [
    {
      name: "arun",
      gender: "Male",
      physics: 88,
      maths: 87,
      english: 78,
    },
    {
      name: "rajesh",
      gender: "Male",
      physics: 96,
      maths: 100,
      english: 95,
    },
    {
      name: "moorthy",
      gender: "Male",
      physics: 89,
      maths: 90,
      english: 70,
    },
    {
      name: "raja",
      gender: "Male",
      physics: 30,
      maths: 25,
      english: 40,
    },
    {
      name: "usha",
      gender: "Female",
      physics: 67,
      maths: 45,
      english: 78,
    },
    {
      name: "priya",
      gender: "Female",
      physics: 56,
      maths: 46,
      english: 78,
    },
    {
      name: "Sundar",
      gender: "Male",
      physics: 12,
      maths: 67,
      english: 67,
    },
    {
      name: "Kavitha",
      gender: "Female",
      physics: 78,
      maths: 71,
      english: 67,
    },
    {
      name: "Dinesh",
      gender: "Male",
      physics: 56,
      maths: 45,
      english: 67,
    },
    {
      name: "Hema",
      gender: "Female",
      physics: 71,
      maths: 90,
      english: 23,
    },
    {
      name: "Gowri",
      gender: "Female",
      physics: 100,
      maths: 100,
      english: 100,
    },
    {
      name: "Ram",
      gender: "Male",
      physics: 78,
      maths: 55,
      english: 47,
    },
    {
      name: "Murugan",
      gender: "Male",
      physics: 34,
      maths: 89,
      english: 78,
    },
    {
      name: "Jenifer",
      gender: "Female",
      physics: 67,
      maths: 88,
      english: 90,
    },
  ];

  const [index, setIndex] = useState(0); 

  const NextIndex = () => {
    if (index < students.length - 1) {
      setIndex(index + 1)
    }
    else{alert(" thre is no more next students the name is finished and complete")}
  }

  const PreviousIndex = () => {
    if (index > 0) {
      setIndex(index-1)
    }
    else {
      alert("There is no previous student in the list")
    }
    
  }
  return (
    <>
      {/* // This tage name is fragment tag. or React fragment. */}
      <div className='flex flex-col items-center'>
        This is use for the name change with the use state or power ful hook or
        power hook and First made button
        <MeButton
          MyButtonStyle={"bg-lime-500 m-10 p-6"}
          titleButton=" Previous"
          MyLittleButton={PreviousIndex}
        />
        <h1 className="mx-40 p-3">{students[index].name}</h1>
        <h3 className="m-5 p-0">
          this is the end of First previous button end{" "}
        </h3>
        <MeButton
          MyButtonStyle={"bg-rose-500 m-10 p-6"}
          titleButton=" Next"
          MyLittleButton={NextIndex}
        />
        <h3 className="m-5 p-0">this is the end of Last Next button end </h3>
      </div>
    </>
  );
}
